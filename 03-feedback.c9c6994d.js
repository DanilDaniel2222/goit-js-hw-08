!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o);var n=o("eaxEB"),l={form:document.querySelector("form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")},u=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""};l.input.value=u.email,l.textarea.value=u.message,l.form.addEventListener("input",e(n)((function(e){"INPUT"===e.target.nodeName&&(u.email=e.target.value);"TEXTAREA"===e.target.nodeName&&(u.message=e.target.value);localStorage.setItem("feedback-form-state",JSON.stringify(u))}),500)),l.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,r=t.email,a=t.message,o={email:r.value,message:a.value};console.log(o),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.c9c6994d.js.map
