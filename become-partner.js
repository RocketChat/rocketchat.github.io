/*! validate v1.1.2 | (c) 2018 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/validate */
!(function(e, t) {
  "function" == typeof define && define.amd
    ? define([], t(e))
    : "object" == typeof exports
      ? (module.exports = t(e))
      : (e.validate = t(e));
})("undefined" != typeof global ? global : this.window || this.global, function(
  e
) {
  "use strict";
  var t,
    r = {},
    a = "querySelector" in document && "addEventListener" in e,
    o = {
      selector: "[data-validate]",
      fieldClass: "error",
      errorClass: "error-message",
      messageValueMissing: "Please fill out this field.",
      messageValueMissingSelect: "Please select a value.",
      messageValueMissingSelectMulti: "Please select at least one value.",
      messageTypeMismatchEmail: "Please enter an email address.",
      messageTypeMismatchURL: "Please enter a URL.",
      messageTooShort:
        "Please lengthen this text to {minLength} characters or more.",
      messageTooLong:
        "Please shorten this text to no more than {maxLength} characters.",
      messagePatternMismatch: "Please match the requested format.",
      messageBadInput: "Please enter a number.",
      messageStepMismatch: "Please select a valid value.",
      messageRangeOverflow: "Please select a value that is no more than {max}.",
      messageRangeUnderflow:
        "Please select a value that is no less than {min}.",
      messageGeneric: "The value you entered for this field is invalid.",
      disableSubmit: !1,
      onSubmit: function() {},
      beforeShowError: function() {},
      afterShowError: function() {},
      beforeRemoveError: function() {},
      afterRemoveError: function() {}
    };
  Element.prototype.matches ||
    (Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function(e) {
        for (
          var t = (this.document || this.ownerDocument).querySelectorAll(e),
            r = t.length;
          --r >= 0 && t.item(r) !== this;

        );
        return r > -1;
      });
  var s = function() {
      var e = {},
        t = !1,
        r = 0,
        a = arguments.length;
      "[object Boolean]" === Object.prototype.toString.call(arguments[0]) &&
        ((t = arguments[0]), r++);
      for (; r < a; r++) {
        var o = arguments[r];
        !(function(r) {
          for (var a in r)
            Object.prototype.hasOwnProperty.call(r, a) &&
              (t && "[object Object]" === Object.prototype.toString.call(r[a])
                ? (e[a] = s(!0, e[a], r[a]))
                : (e[a] = r[a]));
        })(o);
      }
      return e;
    },
    n = function(e, t) {
      for (; e && e !== document; e = e.parentNode) if (e.matches(t)) return e;
      return null;
    };
  (r.hasError = function(e, r) {
    var a = s(t || o, r || {});
    if (
      !e.disabled &&
      "file" !== e.type &&
      "reset" !== e.type &&
      "submit" !== e.type &&
      "button" !== e.type
    ) {
      var n = e.validity;
      if (!n.valid) {
        if (n.valueMissing)
          return "select-multiple" === e.type
            ? a.messageValueMissingSelectMulti
            : "select-one" === e.type
              ? a.messageValueMissingSelect
              : a.messageValueMissing;
        if (n.typeMismatch) {
          if ("email" === e.type) return a.messageTypeMismatchEmail;
          if ("url" === e.type) return a.messageTypeMismatchURL;
        }
        return n.tooShort
          ? a.messageTooShort
              .replace("{minLength}", e.getAttribute("minLength"))
              .replace("{length}", e.value.length)
          : n.tooLong
            ? a.messageTooLong
                .replace("{minLength}", e.getAttribute("maxLength"))
                .replace("{length}", e.value.length)
            : n.badInput
              ? a.messageBadInput
              : n.stepMismatch
                ? a.messageStepMismatch
                : n.rangeOverflow
                  ? a.messageRangeOverflow.replace(
                      "{max}",
                      e.getAttribute("max")
                    )
                  : n.rangeUnderflow
                    ? a.messageRangeUnderflow.replace(
                        "{min}",
                        e.getAttribute("min")
                      )
                    : n.patternMismatch
                      ? e.hasAttribute("title")
                        ? e.getAttribute("title")
                        : a.messagePatternMismatch
                      : a.messageGeneric;
      }
    }
  }),
    (r.showError = function(e, r, a) {
      var i = s(t || o, a || {});
      if (
        (i.beforeShowError(e, r),
        e.classList.add(i.fieldClass),
        "radio" === e.type && e.name)
      ) {
        var l = document.getElementsByName(e.name);
        if (l.length > 0) {
          for (var m = 0; m < l.length; m++)
            l[m].form === e.form && l[m].classList.add(i.fieldClass);
          e = l[l.length - 1];
        }
      }
      var c = e.id || e.name;
      if (c) {
        var u = e.form.querySelector("." + i.errorClass + "#error-for-" + c);
        if (!u) {
          (u = document.createElement("div")),
            (u.className = i.errorClass),
            (u.id = "error-for-" + c);
          var f;
          ("radio" !== e.type && "checkbox" !== e.type) ||
            ((f =
              e.form.querySelector('label[for="' + c + '"]') ||
              n(e, "label")) &&
              f.parentNode.insertBefore(u, f.nextSibling)),
            f || e.parentNode.insertBefore(u, e.nextSibling);
        }
        e.setAttribute("aria-describedby", "error-for-" + c),
          (u.innerHTML = r),
          (u.style.display = ""),
          (u.style.visibility = ""),
          i.afterShowError(e, r);
      }
    }),
    (r.removeError = function(e, r) {
      var a = s(t || o, r || {});
      if (
        (a.beforeRemoveError(e),
        e.removeAttribute("aria-describedby"),
        e.classList.remove(a.fieldClass),
        "radio" === e.type && e.name)
      ) {
        var n = document.getElementsByName(e.name);
        if (n.length > 0) {
          for (var i = 0; i < n.length; i++)
            n[i].form === e.form && n[i].classList.remove(a.fieldClass);
          e = n[n.length - 1];
        }
      }
      var l = e.id || e.name;
      if (l) {
        var m = e.form.querySelector("." + a.errorClass + "#error-for-" + l);
        m &&
          ((m.innerHTML = ""),
          (m.style.display = "none"),
          (m.style.visibility = "hidden"),
          a.afterRemoveError(e));
      }
    });
  var i = function(e) {
      for (
        var r = document.querySelectorAll(t.selector), a = 0;
        a < r.length;
        a++
      )
        e
          ? r[a].removeAttribute("novalidate")
          : r[a].setAttribute("novalidate", !0);
    },
    l = function(e) {
      if (e.target.form && e.target.form.matches(t.selector)) {
        var a = r.hasError(e.target);
        if (a) return void r.showError(e.target, a);
        r.removeError(e.target);
      }
    },
    m = function(e) {
      if (e.target.form && e.target.form.matches(t.selector)) {
        var a = e.target.getAttribute("type");
        if ("checkbox" === a || "radio" === a) {
          var o = r.hasError(e.target);
          if (o) return void r.showError(e.target, o);
          r.removeError(e.target);
        }
      }
    },
    c = function(e) {
      if (e.target.matches(t.selector)) {
        for (var a, o = e.target.elements, s = 0; s < o.length; s++) {
          var n = r.hasError(o[s]);
          n && (r.showError(o[s], n), a || (a = o[s]));
        }
        if (((a || t.disableSubmit) && e.preventDefault(), a))
          return void a.focus();
        t.onSubmit(e.target, o);
      }
    };
  return (
    (r.destroy = function() {
      if (t) {
        document.removeEventListener("blur", l, !0),
          document.removeEventListener("click", m, !1),
          document.removeEventListener("submit", c, !1);
        for (
          var e = document.querySelectorAll(t.errorClass), a = 0;
          a < e.length;
          a++
        )
          r.removeError(e[a]);
        i(!0), (t = null);
      }
    }),
    (r.init = function(e) {
      a &&
        (r.destroy(),
        (t = s(o, e || {})),
        i(),
        document.addEventListener("blur", l, !0),
        document.addEventListener("click", m, !0),
        document.addEventListener("submit", c, !1));
    }),
    r
  );
});

validate.init({
  afterShowError: function (field, error) {
    if (field.nodeName === "SELECT" || field.id === "website") {
      var parent = field.parentNode.parentNode
      var node = document.createElement("DIV");
      var textnode = document.createTextNode(error);
      node.appendChild(textnode);
      node.className = "error-message error-message--fake";

      field.parentNode.classList.add('error');

      if (!parent.querySelector('.error-message--fake')) {
        parent.append(node);
      } else {
        parent.querySelector('.error-message--fake').textContent = error;
      }
    }
  },
  beforeRemoveError: function (field) {
    if (field.nodeName === "SELECT" || field.id === "website") {
      field.parentNode.classList.remove('error');

      var parent = field.parentNode.parentNode;
      if (parent.querySelector('.error-message--fake')) { 
        parent.removeChild(parent.querySelector('.error-message--fake'))
      }
    }
  }
});


(function initForm() {
  function toggleModal(hide) {
    var element = document.querySelector('.modal');

    if (hide) {
      element.classList.remove('modal--show')
      window.location.search = "";
    } else {
      element.classList.add('modal--show')
    }
  }

  // Show modal on form success
  if (
      window.location && 
      window.location.search && 
      window.location.search === "?form-success"
    ) {
    toggleModal();
  }

  // Update returnUrl
  (function updateUrl() {
    var fieldReturnUrl = document.querySelector('#js-return-url');
    var currentUrl = window.location.href

    fieldReturnUrl.value = String(currentUrl + '?form-success')
  }());

  var modalButton = document.querySelector('.js-become-partner-close');
  modalButton.addEventListener('click', function () {
    toggleModal(true);
  })
}());