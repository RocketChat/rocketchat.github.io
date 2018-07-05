/* global fetch, $ */

;(function () {
  var APP_CARD_TEMPLATE = $('#app-card-template')
  var APPS_LIST_EL = $('.apps-list')
  var SEARCH_RESULTS_EL = $('.search-results-list')
  var SEARCH_FIELD = $('.hero .search')
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

  var createAppCard = function (app) {
    var templateToStr = APP_CARD_TEMPLATE.text()
    var newCardEl = $(templateToStr)

    newCardEl.find('.name').text(app.name || '')
    newCardEl.find('.description').text(app.description || '')
    // TODO: change to background maybe?
    newCardEl.find('.icon-wrapper').find('img').attr('src', app.iconFile || '')

    var tags = app.tags || []

    for (var i = 0; i < tags.length; i++) {
      var template = '<li class="tags-list-item"><span class="app-tag">' + tags[i] + '</span></li>'

      newCardEl.find('.tags-list').append(template)
    }

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

    $(window).on('resize', function () {
      setSearchListPosition()
    })
  }

  var onSearch = function (term) {
    if (term) {
      filterBySearch(term, APPS)
    } else {
      createSearchList([])
    }
  }

  bindEvents()
  getAppsData()
})()
