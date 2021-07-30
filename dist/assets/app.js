!function(){"use strict";var e,t={905:function(e,t,n){var i=n(566);function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$root=document.querySelector(t),this.$root&&(this.$wrapper=this.$root.querySelector(".b__bottom"),this.$slides=this.$root.querySelectorAll(".b__slide"),this.setActive=this.setActive.bind(this),this.init())}var t,n,i;return t=e,(n=[{key:"init",value:function(){var e=this;this.setActive(this.$slides[0]),this.$root.addEventListener("click",(function(t){var n=t.target.closest(".b--btn-left-right-slider");if(n.dataset.commandSliderArrow)switch(n.dataset.commandSliderArrow){case"prev":if(e.$active.previousElementSibling){e.setActive(e.$active.previousElementSibling);break}e.setActive(e.$slides[e.$slides.length-1]);break;case"next":if(e.$active.nextElementSibling){e.setActive(e.$active.nextElementSibling);break}e.setActive(e.$slides[0]);break;default:return}})),this.$root.addEventListener("touchstart",(function(t){e.$root.ontouchmove=function(n){e.$root.ontouchend=function(){return t.touches[0].clientX-n.touches[0].clientX<0&&t.touches[0].clientX-n.touches[0].clientX<-75?(e.$active.previousElementSibling?e.setActive(e.$active.previousElementSibling):e.setActive(e.$slides[e.$slides.length-1]),e.$root.ontouchmove=null,void(e.$root.ontouchend=null)):t.touches[0].clientX-n.touches[0].clientX>0&&t.touches[0].clientX-n.touches[0].clientX>75?(e.$active.nextElementSibling?e.setActive(e.$active.nextElementSibling):e.setActive(e.$slides[0]),e.$root.ontouchmove=null,void(e.$root.ontouchend=null)):void 0}}})),window.addEventListener("resize",(function(){e.setActive(e.$active)}))}},{key:"setActive",value:function(e){var t=this;this.$slides.forEach((function(n,i){n!==e?n.classList.remove("active"):(t.$wrapper.style.pointerEvents="none",setTimeout((function(){n.classList.add("active"),t.$active=n,t.$wrapper.style.transform="translateX(-".concat(t.$wrapper.offsetWidth*i,"px)"),t.$wrapper.style.pointerEvents=""}),500))}))}}])&&a(t.prototype,n),i&&a(t,i),e}(),s=n(660),c=n.n(s),r=n(354),l=n.n(r),d=n(638);var u=matchMedia("(min-width: ".concat(1280,"px)"));d((function(){d(".nav-page-d").each((function(){var e=d(this),t={activeItem:e.find(".nav-page-d__item--active"),setActiveItem:function(e){t.activeItem.removeClass("nav-page-d__item--active"),t.activeItem=e,t.activeItem.addClass("nav-page-d__item--active")}};e.find(".nav-page-d__link").on("click",(function(e){e.preventDefault();var n=d(this).closest(".nav-page-d__item");t.setActiveItem(n)}))}))})),d((function(){d(".aside__menu").on("click",(function(){d(this).toggleClass("aside__menu--active")}))})),d((function(){var e=d(".panel"),t=d(window).scrollTop();function n(){var n=d(window).scrollTop();Math.abs(t-n)>=1&&(n>t?e.addClass("panel--hidden"):e.removeClass("panel--hidden")),t=n}d(window).one("scroll",(function e(){n(),setTimeout((function(){n(),d(window).one("scroll",e)}),1e3/60)}))}));d((function(){var e=d(".cookies");if(0!==e.length){var t=!1,n=e.find(".cookies__btn");setTimeout((function(){e.addClass("cookies--active"),e.on("transitionend",(function(n){n.target===e[0]&&(t?e.addClass("cookies--disabled"):t=!0)})),n.on("click",(function(){t&&e.removeClass("cookies--active")}))}),1e3)}})),d((function(){var e=d("[data-modal]");0!==e.length&&(d("[data-button]").each((function(){var e=d(this),t=e.data("button");e.on("click",(function(){d("[data-modal='".concat(t,"']")).toggleClass("modal--active")}))})),d(window).on("click",(function(t){t.target==d(".modal--active")[0]&&e.removeClass("modal--active")})))})),d((function(){d("[data-crop-text]").each((function(){var e=d(this),t=e.text();function n(){var n=u.matches?21:18;if(e.text(t),e.height()>3*n){for(var i=t;e.height()>3*n;)i=i.substring(0,i.length-1).trim(),e.text(i);i=i.substring(0,i.length-5).trim()+"...",e.text(i)}}n(),window.addEventListener("resize",(function e(){n(),setTimeout((function(){n(),window.addEventListener("resize",e,{once:!0})}),1e3)}),{once:!0})}))})),d((function(){var e=[".review-card--modal",".button-modal","[data-mdl-open]"].join(", "),t={isActive:d(".mdl").hasClass("mdl--active")};function n(){d(e).on("click",(function i(){console.log("open click"),d(e).off("click",i),t.isActive=!0,d(".mdl").addClass("mdl--active"),setTimeout((function(){!function(){function e(i){console.log("click close");var a=d(i.target),o=a.closest(".mdl__close"),s=a.closest(".mdl__content");1!==o.length&&0!==s.length||(d(window).off("click",e),t.isActive=!1,d(".mdl").removeClass("mdl--active"),setTimeout((function(){n()}),0))}d(window).on("click",e)}()}),0)}))}t.isActive||n(),d(e).on("click",(function(e){e.preventDefault()}))}));d((function(){var e=d(".alert");if(0!==e.length){var t=!1,n=e.find(".button-close");setTimeout((function(){e.addClass("alert--active"),e.on("transitionend",(function(n){n.target===e[0]&&(t?e.addClass("alert--disabled"):t=!0)})),n.on("click",(function(){t&&e.removeClass("alert--active")}))}),1e3)}})),d((function(){var e=d("[data-list]");if(0!==e.length&&u.matches){var t=e.offset().top-10,n=d(".panel__panel").height();d(window).on("scroll",(function(){var i=this.pageYOffset;i>t&&(e.addClass("disease-page__container--hidden"),d(".panel__list").addClass("panel__list--scroll")),i+n<t&&(e.removeClass("disease-page__container--hidden"),d(".panel__list").removeClass("panel__list--scroll"))}))}})),d((function(){0!==d(".nav-page-d").length&&d("[data-scroll]").on("click",(function(e){e.preventDefault();var t,n=d(this).data("scroll"),i=d(n).offset().top,a=d(".panel").height();0!==d(".panel__list").length?t=a+(d(".panel__list").height()+10):t=a;d("html, body").animate({scrollTop:i-t},700)}))})),d((function(){d(".accordion").each((function(){var e=d(this);e.find(".accordion__head").on("click",(function(){e.toggleClass("accordion--active")}))}))})),d((function(){var e,t=d(".nav-page-d");0!==t.length&&(e=u.matches?t.find(".nav-page-d__item"):d(".nav-page-d--mobile").find(".nav-page-d__item"),d(window).on("scroll",(function(){var t=window.scrollY;d("[data-section]").each((function(n,i){var a,o=i.offsetTop;if(0!==d(".panel__list").length){var s=d(".panel__list").height()+10;a=d(".panel").height()+s}else a=d(".panel").height()+10;o-a<t&&(e.each((function(){d(this).hasClass("nav-page-d__item--active")&&d(this).removeClass("nav-page-d__item--active")})),e.eq(n).addClass("nav-page-d__item--active"))}))})))})),d((function(){var e=d("[data-form]");0!==e.length&&(e.find("[data-form-button]").on("click",(function(e){e.preventDefault();var t=d(this).data("form-button");d("[data-form='".concat(t,"']")).attr("data-form-hidden",""),d("[data-response='".concat(t,"']")).attr("data-response-active","")})),d("[data-response]").find("[data-response-button]").on("click",(function(){var e=d(this).data("response-button");d("[data-form='".concat(e,"']")).removeAttr("data-form-hidden"),d("[data-response='".concat(e,"']")).removeAttr("data-response-active")})))})),d((function(){var e=d("[data-tab]");0!==e.length&&e.each((function(){var e=d(this),t=e.data("tab"),n=d("[data-slide]"),i=d("[data-slide='".concat(t,"']"));e.on("click",(function(){i.hasClass("spray-page__slider-slide--active")||(setTimeout((function(){n.not(i).removeClass("spray-page__slider-slide--active")}),500),i.addClass("spray-page__slider-slide--active"),i.css("z-index","1"),setTimeout((function(){i.css("z-index","0")}),700))}))}))})),d(window).on("load",(function(){var e=d("[data-slider-id]");0!==e.length&&e.each((function(){var e,t,n,a=d(this),o=(a.data("slider-id"),a.data("slider-prev")),s=a.data("slider-next"),c=d('[data-slider-button="'.concat(o,'"]')),r=d('[data-slider-button="'.concat(s,'"]')),l={slidesPerView:"auto",spaceBetween:15,breakpoints:(e={},t=1280,n={spaceBetween:30},t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e)},u=new i.Z(a[0],l);c.on("click",(function(){u.slidePrev()})),r.on("click",(function(){u.slideNext()}))}))})),d((function(){if(0!==d(".file").length){var e=d(".file__input"),t=d(".file__container"),n=[];e.on("change",(function(){for(var i=[],a=0;a<e[0].files.length;a++){var o=e[0].files[a];i.push(o),n.push(o)}i.forEach((function(e){var i=d("<div class=file__item><p class=file__name>".concat(e.name,"</p><div class=file__mark></div></div>"));i.data("fileData",e),t.append(i),i.on("click",(function(e){var t=d(e.target).closest(".file__mark"),i=n.indexOf(d(this).data("fileData"));1===t.length&&(d(this).remove(),n.splice(i,1))}))}))}))}})),d((function(){new o(".page-consultation__expert-slider")})),d((function(){var e=d(".js--gel-reviews-slider");if(e.length){var t=new i.Z(e[0],{slidesPerView:"auto",spaceBetween:20,loop:!0}),n=d(".js--gel-reviews-btn--prev"),a=d(".js--gel-reviews-btn--next");n.on("click",(function(){return t.slidePrev()})),a.on("click",(function(){return t.slideNext()}))}})),d((function(){var e=d(".disease-page__spray");if(!u.matches&&0!==e.length){var t=e.find(".disease-page__content"),n=e.find(".disease-page__spray-button"),i=!1;function a(){var n=t.height();i?t.css("max-height",""):(260<n&&(e.addClass("disease-page__spray--crop"),t.css("max-height",260)),n<260&&(e.removeClass("disease-page__spray--crop"),t.css("max-height","")))}a(),d(window).one("resize",(function e(){a(),setTimeout((function(){d(window).one("resize",e)}),1e3/60)})),n.on("click",(function(){d(this).find(".button-show__text").toggleText("подробнее","скрыть"),t.toggleClass("disease-page__content--show"),i=!i,a()})),d.fn.extend({toggleText:function(e,t){return this.text(this.text()==t?e:t)}})}})),d((function(){l().init({once:!0,offset:0,duration:1e3}),window.addEventListener("scroll",(function e(){var t=setTimeout((function(){clearTimeout(t),l().refresh(),window.addEventListener("scroll",e)}),1e3);window.removeEventListener("scroll",e)}))})),d((function(){if(0!==d(".sticky").length)new(c())(".sticky")}));d((function(){d(".product-slider").each((function(){var e=d(this),t=e.find(".product-slider__slide");a(),d(window).on("load",a),d(window).one("resize",(function e(){setTimeout((function(){a(),d(window).one("resize",e)}),1e3/30)}));var n=e.find(".spray-page__tabs-item");if(n.length>1){var i={cur_index:0,clickable:!0};n.on("click",(function(){if(i.clickable){var e=d(this).closest(".product-slider__btns-item").index();if(e!==i.cur_index){t.toggleClass("product-slider__slide--front");var n=t.eq(e),a=n.find(".product-slider__layout");1===e&&n.addClass("product-slider__slide--right"),n.css("width",0),setTimeout((function(){n.css("width","calc(((100vw - (30px * 2)) / 24) * 18)")})),a.css("transform","scale(1.5)"),setTimeout((function(){a.css("transition","0.5s"),a.css("transform","scale(1)")})),i.cur_index=e,i.clickable=!1,setTimeout((function(){i.clickable=!0,n.css("width",""),a.css("transform",""),a.css("transition","")}),500)}}}))}function a(){var n,i=(n=0,t.each((function(){var e=this.offsetHeight;n=e>n?e:n})),n+"px");t.each((function(){d(this).css("height",i)})),e.css("height",i)}}))}))}},n={};function i(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,i),o.exports}i.m=t,e=[],i.O=function(t,n,a,o){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],a=e[l][1],o=e[l][2];for(var c=!0,r=0;r<n.length;r++)(!1&o||s>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[r])}))?n.splice(r--,1):(c=!1,o<s&&(s=o));c&&(e.splice(l--,1),t=a())}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,a,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={143:0,532:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,s=n[0],c=n[1],r=n[2],l=0;for(a in c)i.o(c,a)&&(i.m[a]=c[a]);if(r)var d=r(i);for(t&&t(n);l<s.length;l++)o=s[l],i.o(e,o)&&e[o]&&e[o][0](),e[s[l]]=0;return i.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=i.O(void 0,[255,532],(function(){return i(905)}));a=i.O(a)}();