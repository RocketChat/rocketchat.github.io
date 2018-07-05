/* global fetch, $ */

;(function () {
  var APP_CARD_TEMPLATE = $('#app-card-template')
  var APPS = []

  var getAppsData = function () {
    fetch('/apps.json')
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        APPS = data
        createList(APPS)
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

  var createListRow = function (apps) {
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

  var createList = function (appsData) {
    var appsListEl = $('.apps-list')
    appsListEl.empty()

    for (var i = 0; i < appsData.length; i += 2) {
      var row = createListRow([appsData[i], appsData[i + 1]])

      appsListEl.append(row)
    }
  }

  var bindEvents = function () {
    var searchEl = $('.hero .search')

    searchEl.on('keyup', function (ev) {
      var term = searchEl.val()

      if (term) {
        filterBySearch(term, APPS)
      } else {
        createList(APPS)
      }
    })
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

    createList(filtered)
  }

  bindEvents()
  getAppsData()
})()
