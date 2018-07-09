/* global fetch, $ */

;(function () {
  var APP_CARD_TEMPLATE = $('#app-card-template')
  var APPS_LIST_EL = $('.apps-list')
  var SEARCH_RESULTS_EL = $('.search-results-list')
  var SEARCH_FIELD = $('.hero .search')
  var MODAL_WRAPPER_EL = $('.add-app-modal-wrapper')
  var MODAL_TEMPLATE = $('#add-app-modal-template')
  var APPS = []

  var getAppsData = function () {
    fetch('/apps.json')
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        APPS = data
        createAppList(APPS)
      })
  }

  var findAppByName = function (name, apps) {
    var app = {}

    for (var i = 0; i < apps.length; i++) {
      if (apps[i].name === name) {
        app = apps[i]
      }
    }

    return app
  }

  var createTagsList = function (tags) {
    var list = ''

    for (var i = 0; i < tags.length; i++) {
      list += '<li class="tags-list-item"><span class="app-tag">' + tags[i] + '</span></li>'
    }

    return list
  }

  var createAppCard = function (app) {
    var templateToStr = APP_CARD_TEMPLATE.text()
    var newCardEl = $(templateToStr)

    newCardEl.find('.name').text(app.name || '')
    newCardEl.find('.description').text(app.description || '')
    // TODO: change to background maybe?
    newCardEl.find('.icon-wrapper').find('img').attr('src', app.iconFile || '')

    var tags = app.tags || []

    var tagsList = createTagsList(tags)

    newCardEl.find('.tags-list').html(tagsList)

    bindAppCardEvents(newCardEl, app)

    return newCardEl
  }

  var createAppListRow = function (apps) {
    var listEl = $('<li class="flex-grid"></li>')

    for (var i = 0; i < apps.length; i++) {
      var current = apps[i]

      if (current) {
        var card = createAppCard(current)

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
    searchResultEl.find('.icon-wrapper').find('img').attr('src', result.iconFile || '')
    searchResultEl.data('name', result.name)

    return searchResultEl
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

  var filterByTag = function (tag, apps) {
    var filtered = []

    if (!tag) {
      createAppList(APPS)
      return
    }

    for (var i = 0; i < apps.length; i++) {
      var current = apps[i]
      var tagsList = current.tags || []
      var isMatch = tagsList.indexOf(tag) !== -1

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

  var createModalButtons = function () {
    var downloadButton = '<button class="button js-become-partner-close">Got it</button>'

    return downloadButton
  }

  var openModal = function (app) {
    MODAL_WRAPPER_EL.removeClass('display-none')
    MODAL_WRAPPER_EL.empty()

    var content = createModalContent(app)
    var card = createAppCard(app)

    content.find('.app-card-wrapper').html(card)

    var buttons = createModalButtons()

    content.find('.content-wrapper').append(buttons)

    MODAL_WRAPPER_EL.html(content)

    bindModalEvents()
  }

  var closeModal = function () {
    MODAL_WRAPPER_EL.addClass('display-none')

    unbindModalEvents()
  }

  var onSearch = function (term) {
    if (term) {
      filterBySearch(term, APPS)
    } else {
      createSearchList([])
    }
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
    var appTagButons = $('.app-tag-button')

    searchEl.on('keyup', function (ev) {
      onSearch(searchEl.val())
    })

    appTagButons.on('click', function (ev) {
      var target = $(ev.target)

      appTagButons.removeClass('highlight')
      target.addClass('highlight')

      filterByTag(target.data().tagname, APPS)
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
})()
