!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in l)return l[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return l[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r);var n=r("eaxEB"),o="feedback-form-state",i=document.querySelector(".feedback-form");i.addEventListener("input",e(n)((function(e){u={email:f.value,message:d.value},localStorage.setItem(o,JSON.stringify(u))}),500)),i.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:f.value,message:d.value}),(""===f.value||""===d.value)&&alert("Don't be lazy, fill up all the fields !");e.currentTarget.reset(),localStorage.removeItem(o),u={}}));var u=JSON.parse(localStorage.getItem(o))||{},s=i.elements,f=s.email,d=s.message;u&&(f.value=u.email||"",d.value=u.message||"")}();
//# sourceMappingURL=03-feedback.ed49cc1f.js.map