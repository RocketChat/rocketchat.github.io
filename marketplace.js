/* global fetch, $ */

;(function () {
  var APP_CARD_TEMPLATE = $('#app-card-template')
  var APPS_LIST_EL = $('.apps-list')
  var SEARCH_RESULTS_EL = $('.search-results-list')
  var SEARCH_FIELD = $('.hero .search')
  var MODAL_WRAPPER_EL = $('.add-app-modal-wrapper')
  var MODAL_TEMPLATE = $('#add-app-modal-template')
  var APPS = []

  var clipboard

  var getAppsData = function () {
    fetch('https://marketplace.rocket.chat/v1/apps')
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        var parsed = parseData(data)
        APPS = parsed

        createAppList(APPS)
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
        return
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

  var createCategoriesMenu = function (categories) {
    var list = $('.apps-list-container').find('.links-list')
    var virtualList = ''
    categories = categories || []

    for (var i = 0; i < categories.length; i++) {
      var title = categories[i].title
      var li = '<li data-category="' + title + '" class="links-list-item">{{button}}</li>'

      var button = '<button data-category="' + title + '" class="app-category-button">' + title + '</button>'

      li = li.replace(/{{button}}/, button)

      virtualList += li
    }

    list.append(virtualList)

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

  var createAppListRow = function (apps) {
    var listEl = $('<li class="flex-grid"></li>')

    for (var i = 0; i < apps.length; i++) {
      var current = apps[i]

      if (current) {
        var card = createAppCard(current)
        bindAppCardEvents(card, apps[i])

        listEl.append(card)
      }
    }

    return listEl
  }

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

    for (var i = 0; i < appsData.length; i += 2) {
      var row = createAppListRow([appsData[i], appsData[i + 1]])

      appsListEl.append(row)
    }
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

    appCategoryButons.on('click', function (ev) {
      var target = $(ev.target)

      appCategoryButons.removeClass('highlight')
      target.addClass('highlight')

      filterByCategory(target.data().category, APPS)
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
  getAppsData()
  getCategoriesData()
})()
