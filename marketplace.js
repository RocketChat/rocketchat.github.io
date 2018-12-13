/* global fetch, $ */

;(function () {
  var APP_CARD_TEMPLATE = $('#app-card-template')
  var APPS_LIST_EL = $('.apps-list')
  var SEARCH_RESULTS_EL = $('.search-results-list')
  var SEARCH_FIELD = $('.hero .search')
  var MODAL_WRAPPER_EL = $('.add-app-modal-wrapper')
  var MODAL_TEMPLATE = $('#add-app-modal-template')
  var APPS_MESSAGE_CONTAINER = $('.apps-message-container')
  var APPS = []

  var clipboard

  var getAppsData = function () {
    return fetch('https://marketplace.rocket.chat/v1/apps')
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        var parsed = parseData(data)
        APPS = parsed

        createAppList(APPS)
        $(".apps-loading").css('display','none')
        $(".apps-list-container").css('display','block')
      })
      .catch((err) => {
        showFetchError()
      })
  }

  var getCategoriesData = function () {
    fetch('https://marketplace.rocket.chat/v1/categories')
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        createCategoriesMenu(data)
      })
  }

  var parseData = function (data) {
    var parsed = []

    for (var i = 0; i < data.length; i++) {
      parsed.push(data[i].latest)
    }

    return parsed
  }

  var findAppByName = function (name, apps) {
    var app = {}

    for (var i = 0; i < apps.length; i++) {
      if (apps[i].name === name) {
        app = apps[i]
        return app
      }
    }

    return app
  }

  var createCategoriesList = function (categories) {
    var list = ''

    for (var i = 0; i < categories.length; i++) {
      list += '<li class="categories-list-item"><span class="app-category">' + categories[i] + '</span></li>'
    }

    return list
  }

  var createCategoriesSelect = function (categories) {
    var list = '<option value="" class="categories--item"><button data-category="" class="app-category-button ">All Apps</button></option>'

    for (var i = 0; i < categories.length; i++) {
      list += '<option value="' + categories[i].title + '" class="categories--item"><button data-category=' + categories[i].title + 'class="app-category-button ">' + categories[i].title + '</button></option>'
    }

    return list
  }

  var createCategoriesMenuList = function (categories, selected) {
    var virtualList = ''
    var highlightedIndex = 0
    categories = categories || []

    for (var i = 0; i < categories.length; i++) {
      var title = categories[i].title
      var li = '<li data-category="' + title + '" class="links-list-item">{{button}}</li>'

      if (selected == title) {
        highlightedIndex = i + 1
      }

      var button = '<button data-category="' + title + '" class="app-category-button ">' + title + '</button>'

      li = li.replace(/{{button}}/, button)

      virtualList += li
    }

    return {
      virtualList: virtualList,
      highlightedIndex: highlightedIndex
    }
  }

  var getCategoriesTitles = function (categories) {
    var titles = []

    for (var i = 0; i < categories.length; i++) {
      titles.push(categories[i].title)
    }

    return titles
  }

  var createCategoriesMenu = function (categories) {
    var list = $('.apps-list-container').find('.links-list')
    var selectedCategory = getCategoryFromUrl()
    var menuListObj = {}
    var categoriesTitles = getCategoriesTitles(categories)

    var categoriesSelect = createCategoriesSelect(categories)

    $('.categories-select select').html(categoriesSelect)

    if (categoriesTitles.indexOf(selectedCategory) == -1) {
      selectedCategory = ''
    }

    menuListObj = createCategoriesMenuList(categories, selectedCategory)

    list.append(menuListObj.virtualList)

    list.find('button').eq(menuListObj.highlightedIndex).addClass('highlight')

    if (selectedCategory) {
      filterByCategory(selectedCategory, APPS)
    }

    bindCategoriesMenuEvents()

    return list
  }

  var createAppCard = function (app) {
    var templateToStr = APP_CARD_TEMPLATE.text()
    var newCardEl = $(templateToStr)

    newCardEl.find('.name').text(app.name || '')
    newCardEl.find('.description').text(app.description || '')

    var icon = newCardEl.find('.icon-wrapper').find('.icon')
    setBase64BackgroundImage(icon, app.iconFileData)

    var categories = app.categories || []

    var categoriesList = createCategoriesList(categories)

    newCardEl.find('.categories-list').html(categoriesList)

    return newCardEl
  }

  // var createAppListRow = function (apps) {
  //   var listEl;

  //   for (var i = 0; i < apps.length; i++) {
  //     var current = apps[i]

  //     if (current) {
  //       var card = createAppCard(current)
  //       bindAppCardEvents(card, apps[i])

  //       listEl.append(card)
  //     }
  //   }

  //   return listEl
  // }

  var createSearchResult = function (result) {
    var searchResultTemplate = $('#search-result-template').text()
    var searchResultEl = $(searchResultTemplate)

    searchResultEl.find('.name').text(result.name || '')
    searchResultEl.find('.description').text(result.description || '')
    var icon = searchResultEl.find('.icon-wrapper').find('.icon');
    setBase64BackgroundImage(icon, result.iconFileData)

    searchResultEl.data('name', result.name)

    return searchResultEl
  }

  var setBase64BackgroundImage = function (el, iconFileData) {
    el[0].style.backgroundImage = 'url(data:image/png;base64,' + iconFileData + ')'
  }

  var createAppList = function (appsData) {
    var appsListEl = APPS_LIST_EL
    appsListEl.empty()

    appsData.forEach(app => {
      if (app) {
        var card = createAppCard(app)
          bindAppCardEvents(card, app)

          appsListEl.append(card)
      }
    });
  }

  var showFetchError = function () {
    showAppsListMessage('sorry, an error occurred and we couldn\'t load the data', true)
  }

  var showAppsListMessage = function (message, isError) {
    var appsListEl = APPS_LIST_EL
    var errorClass = isError ? 'error-message' : ''
    appsListEl.empty()

    var messageEl = $('<li class="flex-grid message-wrapper"><div class="' + errorClass + '">' + message + '</div></li>')

    appsListEl.append(messageEl)
  }

  var showEmptyCategoryMessage = function (category) {
    APPS_MESSAGE_CONTAINER
      .find('.message')
      .text('No results found for "' + category + '"')

    APPS_MESSAGE_CONTAINER.removeClass('display-none')
  }

  var hideEmptyCategoryMessage = function () {
    APPS_MESSAGE_CONTAINER.addClass('display-none')
  }

  var setSearchListPosition = function () {
    var searchFieldLeft = SEARCH_FIELD.offset().left

    SEARCH_RESULTS_EL[0].style.left = searchFieldLeft + 'px'
  }

  var createSearchList = function (appsData) {
    var searchListEl = SEARCH_RESULTS_EL
    searchListEl.find('.app-card').off('click')
    searchListEl.empty()

    setSearchListPosition()

    for (var i = 0; i < appsData.length; i++) {
      var listEl = $('<li class="search-result-item"></li>')
      var row = createSearchResult(appsData[i])
      listEl.append(row)

      searchListEl.append(listEl)
    }
  }

  var filterBySearch = function (term, apps) {
    var filtered = []
    var regex = new RegExp('^' + term, 'i')

    for (var i = 0; i < apps.length; i++) {
      var current = apps[i]
      var isMatch = regex.test(current.name)

      if (isMatch) {
        filtered.push(current)
      }
    }

    createSearchList(filtered)
  }

  var filterByCategory = function (category, apps) {
    var filtered = []

    if (!category) {
      createAppList(APPS)
      setCategoryOnUrl('')
      hideEmptyCategoryMessage()
      return
    }

    for (var i = 0; i < apps.length; i++) {
      var current = apps[i]
      var categoriesList = current.categories || []
      var isMatch = categoriesList.indexOf(category) !== -1

      if (isMatch) {
        filtered.push(current)
      }
    }

    createAppList(filtered)

    if (filtered.length) {
      createAppList(filtered)
      setCategoryOnUrl(category)
      hideEmptyCategoryMessage()
    } else {
      showEmptyCategoryMessage(category)
    }
  }

  var setCategoryOnUrl = function (category) {
    var url = window.location.href.replace(/\?category=.*/g, '')
    var queryParameters = '?category=' + encodeURIComponent(category)

    if (!category) {
      queryParameters = ''
    }

    window.history.pushState({}, '', url + queryParameters)
  }

  var getCategoryFromUrl = function () {
    var match = window.location.href.match(/\?category=.*/)
    var category = ''

    if (match) {
      category = match[0].replace(/\?category=/, '').trim()
      category = decodeURIComponent(category)
    }

    return category
  }

  var createModalContent = function (app) {
    var template = MODAL_TEMPLATE.text()
    var newModalContent = $(template)

    return newModalContent
  }

  var createModalButtons = function (app) {
    var url = 'https://marketplace.rocket.chat/v1/apps/' + app.id + '/download'
    var downloadButton = '<a class="button" target="_blank" href="' + url + '">Download</a>'
    var copyUrlButton = '<button class="button--ghost copy-url-button" data-clipboard-action="copy" data-clipboard-text="' + url + '">Copy URL</button>'
    var list = $('<ul class="buttons-list"></ul>')

    list.append('<li class="buttons-list-item">' + downloadButton + '</li>')
    list.append('<li class="buttons-list-item">' + copyUrlButton + '</li>')

    return list
  }

  var openModal = function (app) {
    MODAL_WRAPPER_EL.removeClass('display-none')
    MODAL_WRAPPER_EL.empty()

    var content = createModalContent(app)
    var card = createAppCard(app)

    content.find('.app-card-wrapper').html(card)

    var buttons = createModalButtons(app)

    content.find('.content-wrapper').append(buttons)

    MODAL_WRAPPER_EL.html(content)

    clipboard = new ClipboardJS(MODAL_WRAPPER_EL.find('.copy-url-button')[0])

    bindModalEvents(app)
  }

  var closeModal = function () {
    MODAL_WRAPPER_EL.addClass('display-none')
    clipboard.destroy()

    unbindModalEvents()
  }

  var onSearch = function (term) {
    if (term) {
      filterBySearch(term, APPS)
    } else {
      createSearchList([])
    }
  }

  var bindCategoriesMenuEvents = function () {
    var appCategoryButons = $('.app-category-button')
    var appCategorySelect = $('.categories-select select')

    appCategorySelect.on('change', function (ev) {
      var category = ev.target.value

      filterByCategory(category, APPS)
    })

    appCategoryButons.on('click', function (ev) {
      var target = $(ev.target)

      appCategoryButons.removeClass('highlight')
      target.addClass('highlight')

      var category = target.data().category

      filterByCategory(category, APPS)
    })
  }

  var bindAppCardEvents = function (appCardEl, app) {
    appCardEl.on('click', function () {
      openModal(app)
    })
  }

  var bindModalEvents = function () {
    MODAL_WRAPPER_EL.find('.close-button').on('click', function () {
      closeModal()
    })
  }

  var unbindModalEvents = function () {
    MODAL_WRAPPER_EL.find('.close-button').off('click')
  }

  var bindEvents = function () {
    var searchEl = SEARCH_FIELD

    searchEl.on('keyup', function (ev) {
      onSearch(searchEl.val())
    })

    SEARCH_RESULTS_EL.on('click', function (ev) {
      var name = $(ev.target).parents('.search-result').data().name
      var app = findAppByName(name, APPS)

      if (app.name) {
        createSearchList([])
        openModal(app)
      }
    })

    $(window).on('resize', function () {
      setSearchListPosition()
    })
  }

  bindEvents()
  getAppsData().then(function () {
    getCategoriesData()
  })
})()
