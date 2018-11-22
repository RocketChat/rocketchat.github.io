/*!
 * headroom.js v0.9.4 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!(function(a, b) {
  "use strict";
  "function" == typeof define && define.amd
    ? define([], b)
    : "object" == typeof exports
      ? (module.exports = b())
      : (a.Headroom = b());
})(this, function() {
  "use strict";
  function a(a) {
    (this.callback = a), (this.ticking = !1);
  }
  function b(a) {
    return a && "undefined" != typeof window && (a === window || a.nodeType);
  }
  function c(a) {
    if (arguments.length <= 0)
      throw new Error("Missing arguments in extend function");
    var d,
      e,
      f = a || {};
    for (e = 1; e < arguments.length; e++) {
      var g = arguments[e] || {};
      for (d in g)
        "object" != typeof f[d] || b(f[d])
          ? (f[d] = f[d] || g[d])
          : (f[d] = c(f[d], g[d]));
    }
    return f;
  }
  function d(a) {
    return a === Object(a) ? a : { down: a, up: a };
  }
  function e(a, b) {
    (b = c(b, e.options)),
      (this.lastKnownScrollY = 0),
      (this.elem = a),
      (this.tolerance = d(b.tolerance)),
      (this.classes = b.classes),
      (this.offset = b.offset),
      (this.scroller = b.scroller),
      (this.initialised = !1),
      (this.onPin = b.onPin),
      (this.onUnpin = b.onUnpin),
      (this.onTop = b.onTop),
      (this.onNotTop = b.onNotTop),
      (this.onBottom = b.onBottom),
      (this.onNotBottom = b.onNotBottom);
  }
  var f = {
    bind: !!function() {}.bind,
    classList: "classList" in document.documentElement,
    rAF: !!(
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame
    )
  };
  return (
    (window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame),
    (a.prototype = {
      constructor: a,
      update: function() {
        this.callback && this.callback(), (this.ticking = !1);
      },
      requestTick: function() {
        this.ticking ||
          (requestAnimationFrame(
            this.rafCallback || (this.rafCallback = this.update.bind(this))
          ),
          (this.ticking = !0));
      },
      handleEvent: function() {
        this.requestTick();
      }
    }),
    (e.prototype = {
      constructor: e,
      init: function() {
        if (e.cutsTheMustard)
          return (
            (this.debouncer = new a(this.update.bind(this))),
            this.elem.classList.add(this.classes.initial),
            setTimeout(this.attachEvent.bind(this), 100),
            this
          );
      },
      destroy: function() {
        var a = this.classes;
        this.initialised = !1;
        for (var b in a)
          a.hasOwnProperty(b) && this.elem.classList.remove(a[b]);
        this.scroller.removeEventListener("scroll", this.debouncer, !1);
      },
      attachEvent: function() {
        this.initialised ||
          ((this.lastKnownScrollY = this.getScrollY()),
          (this.initialised = !0),
          this.scroller.addEventListener("scroll", this.debouncer, !1),
          this.debouncer.handleEvent());
      },
      unpin: function() {
        var a = this.elem.classList,
          b = this.classes;
        (!a.contains(b.pinned) && a.contains(b.unpinned)) ||
          (a.add(b.unpinned),
          a.remove(b.pinned),
          this.onUnpin && this.onUnpin.call(this));
      },
      pin: function() {
        var a = this.elem.classList,
          b = this.classes;
        a.contains(b.unpinned) &&
          (a.remove(b.unpinned),
          a.add(b.pinned),
          this.onPin && this.onPin.call(this));
      },
      top: function() {
        var a = this.elem.classList,
          b = this.classes;
        a.contains(b.top) ||
          (a.add(b.top),
          a.remove(b.notTop),
          this.onTop && this.onTop.call(this));
      },
      notTop: function() {
        var a = this.elem.classList,
          b = this.classes;
        a.contains(b.notTop) ||
          (a.add(b.notTop),
          a.remove(b.top),
          this.onNotTop && this.onNotTop.call(this));
      },
      bottom: function() {
        var a = this.elem.classList,
          b = this.classes;
        a.contains(b.bottom) ||
          (a.add(b.bottom),
          a.remove(b.notBottom),
          this.onBottom && this.onBottom.call(this));
      },
      notBottom: function() {
        var a = this.elem.classList,
          b = this.classes;
        a.contains(b.notBottom) ||
          (a.add(b.notBottom),
          a.remove(b.bottom),
          this.onNotBottom && this.onNotBottom.call(this));
      },
      getScrollY: function() {
        return void 0 !== this.scroller.pageYOffset
          ? this.scroller.pageYOffset
          : void 0 !== this.scroller.scrollTop
            ? this.scroller.scrollTop
            : (
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollTop;
      },
      getViewportHeight: function() {
        return (
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight
        );
      },
      getElementPhysicalHeight: function(a) {
        return Math.max(a.offsetHeight, a.clientHeight);
      },
      getScrollerPhysicalHeight: function() {
        return this.scroller === window || this.scroller === document.body
          ? this.getViewportHeight()
          : this.getElementPhysicalHeight(this.scroller);
      },
      getDocumentHeight: function() {
        var a = document.body,
          b = document.documentElement;
        return Math.max(
          a.scrollHeight,
          b.scrollHeight,
          a.offsetHeight,
          b.offsetHeight,
          a.clientHeight,
          b.clientHeight
        );
      },
      getElementHeight: function(a) {
        return Math.max(a.scrollHeight, a.offsetHeight, a.clientHeight);
      },
      getScrollerHeight: function() {
        return this.scroller === window || this.scroller === document.body
          ? this.getDocumentHeight()
          : this.getElementHeight(this.scroller);
      },
      isOutOfBounds: function(a) {
        var b = a < 0,
          c = a + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
        return b || c;
      },
      toleranceExceeded: function(a, b) {
        return Math.abs(a - this.lastKnownScrollY) >= this.tolerance[b];
      },
      shouldUnpin: function(a, b) {
        var c = a > this.lastKnownScrollY,
          d = a >= this.offset;
        return c && d && b;
      },
      shouldPin: function(a, b) {
        var c = a < this.lastKnownScrollY,
          d = a <= this.offset;
        return (c && b) || d;
      },
      update: function() {
        var a = this.getScrollY(),
          b = a > this.lastKnownScrollY ? "down" : "up",
          c = this.toleranceExceeded(a, b);
        this.isOutOfBounds(a) ||
          (a <= this.offset ? this.top() : this.notTop(),
          a + this.getViewportHeight() >= this.getScrollerHeight()
            ? this.bottom()
            : this.notBottom(),
          this.shouldUnpin(a, c)
            ? this.unpin()
            : this.shouldPin(a, c) && this.pin(),
          (this.lastKnownScrollY = a));
      }
    }),
    (e.options = {
      tolerance: { up: 0, down: 0 },
      offset: 0,
      scroller: window,
      classes: {
        pinned: "headroom--pinned",
        unpinned: "headroom--unpinned",
        top: "headroom--top",
        notTop: "headroom--not-top",
        bottom: "headroom--bottom",
        notBottom: "headroom--not-bottom",
        initial: "headroom"
      }
    }),
    (e.cutsTheMustard =
      "undefined" != typeof f && f.rAF && f.bind && f.classList),
    e
  );
});

(function() {
  var header = document.querySelector(".app-header_wrap");
  if (header) {
    var headroom = new Headroom(header);
    headroom.init();
  }
})();

if (document.querySelector(".js-download")) {
  var selects = document.querySelectorAll(".js-select-download");

  var setDownload = function(element) {
    element = element || {};
    var target = element.getAttribute("data-target");
    var value = element.value;
    var selector = document.querySelector("[data-download='" + target + "']");

    if (selector) {
      selector.href = value;
      selector.download = value;
    }
  };

  if (selects && selects.length > 0) {
    for (var i = 0; i < selects.length; i++) {
      var element = selects[i];

      setDownload(element);
      element.addEventListener("change", setDownload.bind(this, element));
    }
  }
}

(function() {
  var Animations = function() {
    var onlyDesktop = window.innerWidth >= 769;
    var homeStars = document.querySelector(".home-landingpage__stars");
    var homeMail = document.querySelector(".home-landingpage__mail");
    var homeChat = document.querySelector(".home-landingpage__chat");
    var support = document.querySelector(".support-hero__image");
    var cloud = document.querySelector(".pricing-hero__image");
    var install = document.querySelector(".install-hero__image");
    var partners = document.querySelector(".partners-hero__image");
    var partnersBody = document.querySelector("body.partners");

    if (onlyDesktop) {
      var scrollY = window.scrollY;

      if (homeStars) {
        homeStars.style.transform = "translate3d(0, " + scrollY / 10 + "px, 0)";
      }
      if (homeMail) {
        homeMail.style.transform =
          "translate3d(" + scrollY / 25 + "px, " + scrollY / 15 + "px, 0)";
      }
      if (homeChat) {
        homeChat.style.transform =
          "translate3d(0, 0, 0) rotate(" + (scrollY - 1000) / 140 + "deg)";
      }
      if (support) {
        support.style.transform = "translate3d(0, " + scrollY / 10 + "px, 0)";
      }
      if (cloud) {
        cloud.style.transform = "translate3d(0, " + scrollY / 10 + "px, 0)";
      }
      if (install) {
        install.style.transform = "translate3d(0, " + scrollY / 10 + "px, 0)";
      }
      if (partnersBody) {
        partnersBody.style.backgroundPositionY = (scrollY - 3300) / -7 + "px";
      }
    } else {
      if (homeStars) {
        homeStars.style.transform = "";
      }
      if (homeMail) {
        homeMail.style.transform = "";
      }
      if (homeChat) {
        homeChat.style.transform = "";
      }
      if (support) {
        support.style.transform = "";
      }
      if (cloud) {
        cloud.style.transform = "";
      }
      if (install) {
        install.style.transform = "";
      }
      if (partnersBody) {
        partnersBody.style.backgroundPositionY = "";
      }
    }

    window.requestAnimationFrame(Animations);
  };

  window.requestAnimationFrame(Animations);
})();

(function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      var stars = Math.round(data["stargazers_count"] / 1000 * 10) / 10;
      var forks = Math.round(data["forks_count"] / 1000 * 10) / 10;
      var starsElements = document.getElementsByClassName("star-count");
      var forksElements = document.getElementsByClassName("fork-count");

      for (var i = 0; i < starsElements.length; i++) {
        starsElements[i].innerHTML = stars + "k";
      }

      for (var i = 0; i < forksElements.length; i++) {
        forksElements[i].innerHTML = forks + "k";
      }
    }
  };
  xhttp.open(
    "GET",
    "https://api.github.com/repos/RocketChat/Rocket.Chat",
    true
  );
  xhttp.send();
})();


$(document).ready(function() {
  var path = window.location.pathname;
  if (path == '/pricing' || path == '/pricing/') {
    if (window.location.hash.substr(1) == "cloud") {
      $('.switch').removeClass('active');
      $(".cloud").addClass(' active');
      $('.cloud__container').css("display","block");
      $('.self-managed__container').css("display","none");
    }
  }
})

$('.switch').on('click', function () {
  $('.switch').removeClass('active');
  $(this).addClass(' active');

  if ($(this).hasClass('cloud')){
    $('.cloud__container').css("display","block");
    $('.self-managed__container').css("display","none");
  } else if ($(this).hasClass('self-managed')){
    $('.cloud__container').css("display","none");
    $('.self-managed__container').css("display","block");
  }
})

$('.youtube-image-link, .youtube-text-link').on('click touch', function (e) {
  var checkExist = setInterval(function() {
    if ($('.featherlight').length) {
      if ($(e.target).hasClass('pt')){
        $(".featherlight .youtube-video")[0].src = "https://www.youtube.com/embed/nkzfriX8IlE?autoplay=1";
      }
      $(".featherlight .youtube-video")[0].src += "?autoplay=1";
      clearInterval(checkExist);
    }
 }, 500);
})

$('.install_desktop-buttons .button').on('click', function (e) {
  e.preventDefault();
  var os =  e.target.dataset.os;
  $('.install_desktop-buttons .button.active').removeClass('active');
  $('.install_download.active').removeClass('active');

  $(this).addClass(' active');
  $('.install_download.'+os).addClass(' active');
})

if(location.pathname == "/install") {
  var os="Unknown OS";
  if (navigator.appVersion.indexOf("Win")!=-1) {
    os="windows"
  } else if (navigator.appVersion.indexOf("Mac")!=-1) {
    os="mac";
  } else if (navigator.appVersion.indexOf("Linux")!=-1) {
    os="linux";
  }

  $('.install_desktop-buttons .button.active').removeClass('active');
  $('.install_download.active').removeClass('active');

  $(`.install_desktop-buttons .button.${os}`).addClass(' active');
  $('.install_download.'+os).addClass(' active');
}

