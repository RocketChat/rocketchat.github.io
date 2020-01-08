
var pathname = window.location.pathname;
console.log(pathname);

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	}
}

if (pathname.includes('/pricing')){
  $window = $(window);
  $window.scroll(debounce(function() {
    if ( $window.scrollTop() <= 10 ) {
      $('.app-header').addClass('top');
      $('.app-header').removeClass('app-header--light');
    } else {
      $('.app-header').removeClass('top');
      $('.app-header').addClass('app-header--light');
    }
  }, 20));
}

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
  if (path == '/pricing' || path == '/pricing/' || path == '/pricing.html') {
    $('.pricing .button.trial.contact').featherlight($('#pricing-form'), { 'persist' : 'shared' });
    if (window.location.hash.substr(1) == "cloud") {
      $('.switch').removeClass('active');
      $(".cloud").addClass(' active');
      $('.cloud__container').css("display","block");
      $('.self-managed__container').css("display","none");
    }
  }

  if(window.location.hash.substring(1) === 'thank-you' && $.featherlight) {
    $.featherlight($('#solution-form__after-box'));
  } else {
    // Fragment doesn't exist
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

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("fade");

  if (slides.length === 0) return; // the following code will not be run if not on the home page.

  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
    // slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.opacity = "0.75";
  // slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000);
}

$('.pricing .button.trial.contact').on('click', function (e) {
  setTimeout(function(){ $('.pricing .featherlight #lead-source').attr('value', `Pricing ${e.target.dataset.label}`); }, 500);
});

$(function() {
  $('#contact-form-switch').change(function(){
    $('.form-wrap').hide();
    $('#' + $(this).val()).show();
  });
});