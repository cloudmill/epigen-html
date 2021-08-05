!function(){"use strict";var t,e={905:function(t,e,n){var i=n(566);function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$root=document.querySelector(e),this.$root&&(this.$wrapper=this.$root.querySelector(".b__bottom"),this.$slides=this.$root.querySelectorAll(".b__slide"),this.setActive=this.setActive.bind(this),this.init())}var e,n,i;return e=t,(n=[{key:"init",value:function(){var t=this;this.setActive(this.$slides[0]),this.$root.addEventListener("click",(function(e){var n=e.target.closest(".b--btn-left-right-slider");if(n)switch(n.dataset.commandSliderArrow){case"prev":if(t.$active.previousElementSibling){t.setActive(t.$active.previousElementSibling);break}t.setActive(t.$slides[t.$slides.length-1]);break;case"next":if(t.$active.nextElementSibling){t.setActive(t.$active.nextElementSibling);break}t.setActive(t.$slides[0]);break;default:return}})),this.$root.addEventListener("touchstart",(function(e){t.$root.ontouchmove=function(n){t.$root.ontouchend=function(){return e.touches[0].clientX-n.touches[0].clientX<0&&e.touches[0].clientX-n.touches[0].clientX<-75?(t.$active.previousElementSibling?t.setActive(t.$active.previousElementSibling):t.setActive(t.$slides[t.$slides.length-1]),t.$root.ontouchmove=null,void(t.$root.ontouchend=null)):e.touches[0].clientX-n.touches[0].clientX>0&&e.touches[0].clientX-n.touches[0].clientX>75?(t.$active.nextElementSibling?t.setActive(t.$active.nextElementSibling):t.setActive(t.$slides[0]),t.$root.ontouchmove=null,void(t.$root.ontouchend=null)):void 0}}})),window.addEventListener("resize",(function(){t.setActive(t.$active)}))}},{key:"setActive",value:function(t){var e=this;this.$slides.forEach((function(n,i){n!==t?n.classList.remove("active"):(e.$wrapper.style.pointerEvents="none",setTimeout((function(){n.classList.add("active"),e.$active=n,e.$wrapper.style.transform="translateX(-".concat(e.$wrapper.offsetWidth*i,"px)"),e.$wrapper.style.pointerEvents=""}),500))}))}}])&&a(e.prototype,n),i&&a(e,i),t}(),s=n(660),c=n.n(s),l=n(354),r=n.n(l),d=(n(563),n(638));var u=matchMedia("(min-width: ".concat(1280,"px)"));d((function(){d(".nav-page-d").each((function(){var t=d(this),e={activeItem:t.find(".nav-page-d__item--active"),setActiveItem:function(t){e.activeItem.removeClass("nav-page-d__item--active"),e.activeItem=t,e.activeItem.addClass("nav-page-d__item--active")}};t.find(".nav-page-d__link").on("click",(function(t){t.preventDefault();var n=d(this).closest(".nav-page-d__item");e.setActiveItem(n)}))}))})),d((function(){d(".aside__menu").on("click",(function(){d(this).toggleClass("aside__menu--active")}))})),d((function(){var t=d(".panel"),e=d(window).scrollTop();function n(){var n=d(window).scrollTop();Math.abs(e-n)>=1&&(n>e?t.addClass("panel--hidden"):t.removeClass("panel--hidden")),e=n}d(window).one("scroll",(function t(){n(),setTimeout((function(){n(),d(window).one("scroll",t)}),1e3/60)}))}));d((function(){var t=d(".cookies");if(0!==t.length){var e=!1,n=t.find(".cookies__btn");setTimeout((function(){t.addClass("cookies--active"),t.on("transitionend",(function(n){n.target===t[0]&&(e?t.addClass("cookies--disabled"):e=!0)})),n.on("click",(function(){e&&t.removeClass("cookies--active")}))}),1e3)}})),d((function(){var t=d("[data-modal]");0!==t.length&&(d("[data-button]").each((function(){var t=d(this),e=t.data("button");t.on("click",(function(){d("[data-modal='".concat(e,"']")).toggleClass("modal--active"),d(".body").toggleClass("body--hidden")}))})),d(window).on("click",(function(e){e.target==d(".modal--active")[0]&&(t.removeClass("modal--active"),d(".body").removeClass("body--hidden"))})))})),d((function(){d("[data-crop-text]").each((function(){var t=d(this),e=t.text();function n(){var n=u.matches?21:18;if(t.text(e),t.height()>3*n){for(var i=e;t.height()>3*n;)i=i.substring(0,i.length-1).trim(),t.text(i);i=i.substring(0,i.length-5).trim()+"...",t.text(i)}}n(),window.addEventListener("resize",(function t(){n(),setTimeout((function(){n(),window.addEventListener("resize",t,{once:!0})}),1e3)}),{once:!0})}))})),d((function(){var t=[".review-card--modal",".button-modal","[data-mdl-open]"].join(", "),e={isActive:d(".mdl").hasClass("mdl--active")};function n(){d(t).on("click",(function i(){console.log("open click"),d(t).off("click",i),e.isActive=!0,d(".mdl").addClass("mdl--active"),setTimeout((function(){!function(){function t(i){console.log("click close");var a=d(i.target),o=a.closest(".mdl__close"),s=a.closest(".mdl__content");1!==o.length&&0!==s.length||(d(window).off("click",t),e.isActive=!1,d(".mdl").removeClass("mdl--active"),setTimeout((function(){n()}),0))}d(window).on("click",t)}()}),0)}))}e.isActive||n(),d(t).on("click",(function(t){t.preventDefault()}))}));d((function(){var t=d(".alert");if(0!==t.length){var e=!1,n=t.find(".button-close");setTimeout((function(){t.addClass("alert--active"),t.on("transitionend",(function(n){n.target===t[0]&&(e?t.addClass("alert--disabled"):e=!0)})),n.on("click",(function(){e&&t.removeClass("alert--active")}))}),1e3)}})),d((function(){var t=d("[data-list]");if(0!==t.length&&u.matches){var e=t.offset().top-10,n=d(".panel__panel").height();d(window).on("scroll",(function(){var i=this.pageYOffset;i>e&&(t.addClass("disease-page__container--hidden"),d(".panel__list").addClass("panel__list--scroll")),i+n<e&&(t.removeClass("disease-page__container--hidden"),d(".panel__list").removeClass("panel__list--scroll"))}))}})),d((function(){0!==d(".nav-page-d").length&&d("[data-scroll]").on("click",(function(t){t.preventDefault();var e,n=d(this).data("scroll"),i=d(n).offset().top,a=d(".panel").height();0!==d(".panel__list").length?e=a+(d(".panel__list").height()+10):e=a;d("html, body").animate({scrollTop:i-e},700)}))})),d((function(){d(".accordion").each((function(){var t=d(this);t.find(".accordion__head").on("click",(function(){t.toggleClass("accordion--active")}))}))})),d((function(){var t,e=d(".nav-page-d");0!==e.length&&(t=u.matches?e.find(".nav-page-d__item"):d(".nav-page-d--mobile").find(".nav-page-d__item"),d(window).on("scroll",(function(){var e=window.scrollY;d("[data-section]").each((function(n,i){var a,o=i.offsetTop;if(0!==d(".panel__list").length){var s=d(".panel__list").height()+10;a=d(".panel").height()+s}else a=d(".panel").height()+10;o-a<e&&(t.each((function(){d(this).hasClass("nav-page-d__item--active")&&d(this).removeClass("nav-page-d__item--active")})),t.eq(n).addClass("nav-page-d__item--active"))}))})))})),d((function(){var t=d("[data-form]");0!==t.length&&(t.find("[data-form-button]").on("click",(function(t){t.preventDefault();var e=d(this).data("form-button");d("[data-form='".concat(e,"']")).attr("data-form-hidden",""),d("[data-response='".concat(e,"']")).attr("data-response-active","")})),d("[data-response]").find("[data-response-button]").on("click",(function(){var t=d(this).data("response-button");d("[data-form='".concat(t,"']")).removeAttr("data-form-hidden"),d("[data-response='".concat(t,"']")).removeAttr("data-response-active")})))})),d((function(){var t=d("[data-tab]");0!==t.length&&t.each((function(){var t=d(this),e=t.data("tab"),n=d("[data-slide]"),i=d("[data-slide='".concat(e,"']"));t.on("click",(function(){i.hasClass("spray-page__slider-slide--active")||(setTimeout((function(){n.not(i).removeClass("spray-page__slider-slide--active")}),500),i.addClass("spray-page__slider-slide--active"),i.css("z-index","1"),setTimeout((function(){i.css("z-index","0")}),700))}))}))})),d(window).on("load",(function(){var t=d("[data-slider-id]");0!==t.length&&t.each((function(){var t,e,n,a=d(this),o=(a.data("slider-id"),a.data("slider-prev")),s=a.data("slider-next"),c=d('[data-slider-button="'.concat(o,'"]')),l=d('[data-slider-button="'.concat(s,'"]')),r={slidesPerView:"auto",spaceBetween:15,breakpoints:(t={},e=1280,n={spaceBetween:30},e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t)},u=new i.Z(a[0],r);c.on("click",(function(){u.slidePrev()})),l.on("click",(function(){u.slideNext()}))}))})),d((function(){if(0!==d(".file").length){var t=d(".file__input"),e=d(".file__container"),n=[];t.on("change",(function(){for(var i=[],a=0;a<t[0].files.length;a++){var o=t[0].files[a];i.push(o),n.push(o)}i.forEach((function(t){var i=d("<div class=file__item><p class=file__name>".concat(t.name,"</p><div class=file__mark></div></div>"));i.data("fileData",t),e.append(i),i.on("click",(function(t){var e=d(t.target).closest(".file__mark"),i=n.indexOf(d(this).data("fileData"));1===e.length&&(d(this).remove(),n.splice(i,1))}))}))}))}})),d((function(){new o(".b--reviews-slider-main-page")})),d((function(){new o(".b--carousel-slider-desktop")})),d((function(){var t=d(".js--gel-reviews-slider");if(t.length){var e=new i.Z(t[0],{slidesPerView:"auto",spaceBetween:20,loop:!0}),n=d(".js--gel-reviews-btn--prev"),a=d(".js--gel-reviews-btn--next");n.on("click",(function(){return e.slidePrev()})),a.on("click",(function(){return e.slideNext()}))}})),d((function(){var t=d(".disease-page__spray");if(!u.matches&&0!==t.length){var e=t.find(".disease-page__content"),n=t.find(".disease-page__spray-button"),i=!1;function a(){var n=e.height();i?e.css("max-height",""):(260<n&&(t.addClass("disease-page__spray--crop"),e.css("max-height",260)),n<260&&(t.removeClass("disease-page__spray--crop"),e.css("max-height","")))}a(),d(window).one("resize",(function t(){a(),setTimeout((function(){d(window).one("resize",t)}),1e3/60)})),n.on("click",(function(){d(this).find(".button-show__text").toggleText("подробнее","скрыть"),e.toggleClass("disease-page__content--show"),i=!i,a()})),d.fn.extend({toggleText:function(t,e){return this.text(this.text()==e?t:e)}})}})),d((function(){r().init({once:!0,offset:0,duration:1e3}),window.addEventListener("scroll",(function t(){var e=setTimeout((function(){clearTimeout(e),r().refresh(),window.addEventListener("scroll",t)}),1e3);window.removeEventListener("scroll",t)}))})),d((function(){if(0!==d(".sticky").length)new(c())(".sticky")}));d((function(){d(".product-slider").each((function(){var t=d(this),e=t.find(".product-slider__slide");a(),d(window).on("load",a),d(window).one("resize",(function t(){setTimeout((function(){a(),d(window).one("resize",t)}),1e3/30)}));var n=t.find(".spray-page__tabs-item");if(n.length>1){var i={cur_index:0,clickable:!0};n.on("click",(function(){if(i.clickable){var t=d(this).closest(".product-slider__btns-item").index();if(t!==i.cur_index){e.toggleClass("product-slider__slide--front");var n=e.eq(t),a=n.find(".product-slider__layout");1===t&&n.addClass("product-slider__slide--right"),n.css("width",0),setTimeout((function(){n.css("width","calc(((100vw - (30px * 2)) / 24) * 18)")})),a.css("transform","scale(1.5)"),setTimeout((function(){a.css("transition","0.5s"),a.css("transform","scale(1)")})),i.cur_index=t,i.clickable=!1,setTimeout((function(){i.clickable=!0,n.css("width",""),a.css("transform",""),a.css("transition","")}),500)}}}))}function a(){var n,i=(n=0,e.each((function(){var t=this.offsetHeight;n=t>n?t:n})),n+"px");e.each((function(){d(this).css("height",i)})),t.css("height",i)}}))})),d((function(){var t=d(".panel");if(0!==t.length){var e={id:null,close:function(){d('[data-modal-id="'.concat(this.id,'"]')).removeAttr("data-modal-active"),d('[data-modal-button="'.concat(this.id,'"]')).removeAttr("data-modal-active")},open:function(){d('[data-modal-id="'.concat(this.id,'"]')).attr("data-modal-active",""),d('[data-modal-button="'.concat(this.id,'"]')).attr("data-modal-active","")},update:function(t){this.id=t},change:function(t){this.close(),this.update(t===this.id?null:t),this.open()}};d("[data-modal-button]").on("click",(function(){var n=d(this).data("modal-button");e.change(n),0!==t.find("[data-modal-active]").length?(t.addClass("panel--modal-active"),d(".body").css("overflow","hidden")):(t.removeClass("panel--modal-active"),d(".body").css("overflow",""))})),d(window).on("click",(function(n){0!==d(n.target).closest(".panel__wrapper").length&&0===d(n.target).closest(".panel__test").length||0!==d(n.target).closest("[data-modal-active]").length||(e.change(null),d(".body").css("overflow",""),t.removeClass("panel--modal-active"))}))}})),d((function(){console.log("wave");var t=d(".canvas"),e=t[0].getContext("2d");t[0].width=window.innerWidth,t[0].height=window.innerHeight,function(){var t;e.clearRect(0,0,window.innerWidth,window.innerHeight),t=[{x:0,y:0},{x:50,y:25},{x:100,y:50},{x:50,y:100},{x:0,y:50},{x:50,y:25},{x:100,y:0}],e.beginPath(),e.moveTo(t[0].x,t[0].y);for(var n=1;n<t.length-2;n++){var i=(t[n].x+t[n+1].x)/2,a=(t[n].y+t[n+1].y)/2;e.quadraticCurveTo(t[n].x,t[n].y,i,a)}e.quadraticCurveTo(t[n].x,t[n].y,t[n+1].x,t[n+1].y),e.closePath();var o=e.createLinearGradient(0,0,100,0);o.addColorStop(0,"green"),o.addColorStop(.7,"white"),o.addColorStop(1,"pink"),e.strokeStyle=o,e.lineWidth=5,e.stroke()}()})),d((function(){d(".test__label").each((function(){d(this).on("click",(function(){var t=d(this).closest(".test__options"),e=t.next(),n=d(".test__dot"),i=d(".test__index");t.removeClass("test__options--active"),e.addClass("test__options--active"),n.eq(e.index()).addClass("test__dot--active"),i.text(e.index()+1),0===d(".test__options--active").length&&(d(".test__container").addClass("test__container--hidden"),d(".test__result").addClass("test__result--active"))}))}));var t=d(".test__form"),e=t.find(".test__form-response"),n=t.find(".form"),i=n.find(".form__input");d(document).on("submit",n,(function(t){t.preventDefault(),d(".test__form-wrapper").addClass("test__form-wrapper--hidden"),e.addClass("test__form-response--active"),d(".test__form-email").text(i.val())}))})),d((function(){d(".block").each((function(){d(this);console.log("block")}))})),d((function(){d("form").parsley()}))}},n={};function i(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={exports:{}};return e[t].call(o.exports,o,o.exports,i),o.exports}i.m=e,t=[],i.O=function(e,n,a,o){if(!n){var s=1/0;for(r=0;r<t.length;r++){n=t[r][0],a=t[r][1],o=t[r][2];for(var c=!0,l=0;l<n.length;l++)(!1&o||s>=o)&&Object.keys(i.O).every((function(t){return i.O[t](n[l])}))?n.splice(l--,1):(c=!1,o<s&&(s=o));c&&(t.splice(r--,1),e=a())}return e}o=o||0;for(var r=t.length;r>0&&t[r-1][2]>o;r--)t[r]=t[r-1];t[r]=[n,a,o]},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={143:0,532:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,o,s=n[0],c=n[1],l=n[2],r=0;for(a in c)i.o(c,a)&&(i.m[a]=c[a]);if(l)var d=l(i);for(e&&e(n);r<s.length;r++)o=s[r],i.o(t,o)&&t[o]&&t[o][0](),t[s[r]]=0;return i.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var a=i.O(void 0,[606,532],(function(){return i(905)}));a=i.O(a)}();