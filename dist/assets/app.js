!function(){var t,e={905:function(t,e,n){"use strict";var a=n(566);function i(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$root=document.querySelector(e),this.$root&&(this.$wrapper=this.$root.querySelector(".b__bottom"),this.$slides=this.$root.querySelectorAll(".b__slide"),this.setActive=this.setActive.bind(this),this.init())}var e,n,a;return e=t,(n=[{key:"init",value:function(){var t=this;this.setActive(this.$slides[0]),this.$root.addEventListener("click",(function(e){var n=e.target.closest(".b--btn-left-right-slider");if(n)switch(n.dataset.commandSliderArrow){case"prev":if(t.$active.previousElementSibling){t.setActive(t.$active.previousElementSibling);break}t.setActive(t.$slides[t.$slides.length-1]);break;case"next":if(t.$active.nextElementSibling){t.setActive(t.$active.nextElementSibling);break}t.setActive(t.$slides[0]);break;default:return}})),this.$root.addEventListener("touchstart",(function(e){t.$root.ontouchmove=function(n){t.$root.ontouchend=function(){return e.touches[0].clientX-n.touches[0].clientX<0&&e.touches[0].clientX-n.touches[0].clientX<-75?(t.$active.previousElementSibling?t.setActive(t.$active.previousElementSibling):t.setActive(t.$slides[t.$slides.length-1]),t.$root.ontouchmove=null,void(t.$root.ontouchend=null)):e.touches[0].clientX-n.touches[0].clientX>0&&e.touches[0].clientX-n.touches[0].clientX>75?(t.$active.nextElementSibling?t.setActive(t.$active.nextElementSibling):t.setActive(t.$slides[0]),t.$root.ontouchmove=null,void(t.$root.ontouchend=null)):void 0}}})),window.addEventListener("resize",(function(){t.setActive(t.$active)}))}},{key:"setActive",value:function(t){var e=this;this.$slides.forEach((function(n,a){n!==t?n.classList.remove("active"):(e.$wrapper.style.pointerEvents="none",setTimeout((function(){n.classList.add("active"),e.$active=n,e.$wrapper.style.transform="translateX(-".concat(e.$wrapper.offsetWidth*a,"px)"),e.$wrapper.style.pointerEvents=""}),500))}))}}])&&i(e.prototype,n),a&&i(e,a),t}(),s=n(660),r=n.n(s),c=n(354),l=n.n(c),d=(n(563),n(638));function f(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}d((function(){n(10)}));var v=matchMedia("(min-width: ".concat(1280,"px)"));d((function(){d(".nav-page-d").each((function(){var t=d(this),e={activeItem:t.find(".nav-page-d__item--active"),setActiveItem:function(t){e.activeItem.removeClass("nav-page-d__item--active"),e.activeItem=t,e.activeItem.addClass("nav-page-d__item--active")}};t.find(".nav-page-d__link").on("click",(function(t){t.preventDefault();var n=d(this).closest(".nav-page-d__item");e.setActiveItem(n)}))}))})),d((function(){d(".aside__menu").on("click",(function(){d(this).toggleClass("aside__menu--active")}))})),d((function(){var t=d(".panel"),e=d(window).scrollTop();function n(){var n=d(window).scrollTop();Math.abs(e-n)>=1&&(n>e?t.addClass("panel--hidden"):t.removeClass("panel--hidden")),e=n}d(window).one("scroll",(function t(){n(),setTimeout((function(){n(),d(window).one("scroll",t)}),1e3/60)}))}));var h=1e3;d((function(){var t=d(".cookies");if(0!==t.length){var e=!1,n=t.find(".cookies__btn");d(".main-page").length&&(h+=3e3),setTimeout((function(){t.addClass("cookies--active"),t.on("transitionend",(function(n){n.target===t[0]&&(e?t.addClass("cookies--disabled"):e=!0)})),n.on("click",(function(){e&&t.removeClass("cookies--active")}))}),h)}})),d((function(){var t=d("[data-modal]");0!==t.length&&(d("[data-button]").each((function(){var t=d(this),e=t.data("button");t.on("click",(function(){d("[data-modal='".concat(e,"']")).toggleClass("modal--active"),d(".body").toggleClass("body--hidden")}))})),d(window).on("click",(function(e){e.target==d(".modal--active")[0]&&(t.removeClass("modal--active"),d(".body").removeClass("body--hidden"))})))})),d((function(){d("[data-crop-text]").each((function(){var t=d(this),e=t.text();function n(){var n=v.matches?21:18;if(t.text(e),t.height()>3*n){for(var a=e;t.height()>3*n;)a=a.substring(0,a.length-1).trim(),t.text(a);a=a.substring(0,a.length-5).trim()+"...",t.text(a)}}n(),window.addEventListener("resize",(function t(){n(),setTimeout((function(){n(),window.addEventListener("resize",t,{once:!0})}),1e3)}),{once:!0})}))})),d((function(){var t=[".review-card--modal",".button-modal","[data-mdl-open]"].join(", "),e={isActive:d(".mdl").hasClass("mdl--active")};function n(){d(t).on("click",(function a(){console.log("open click"),d(t).off("click",a),e.isActive=!0,d(".mdl").addClass("mdl--active"),d(".body").addClass("body--hidden"),setTimeout((function(){!function(){function t(a){console.log("click close");var i=d(a.target),o=i.closest(".mdl__close"),s=i.closest(".mdl__content"),r=i.closest(".file__item");(1===o.length||0===s.length&&0===r.length)&&(d(window).off("click",t),e.isActive=!1,d(".mdl").removeClass("mdl--active"),d(".body").removeClass("body--hidden"),setTimeout((function(){n()}),0))}d(window).on("click",t)}()}),0)}))}e.isActive||n(),d(t).on("click",(function(t){t.preventDefault()}))}));d((function(){var t=d(".alert");if(0!==t.length){var e=!1,n=t.find(".button-close");setTimeout((function(){t.addClass("alert--active"),t.on("transitionend",(function(n){n.target===t[0]&&(e?t.addClass("alert--disabled"):e=!0)})),n.on("click",(function(){e&&t.removeClass("alert--active")}))}),1e3)}})),d((function(){var t=d("[data-list]");if(0!==t.length){var e=t.offset().top-10,n=d(".panel__panel").height();d(window).on("scroll load",(function(){var a=this.pageYOffset;if(v.matches)a>e&&(t.addClass("disease-page__container--hidden"),d(".panel__list").addClass("panel__list--scroll")),a+n<e&&(t.removeClass("disease-page__container--hidden"),d(".panel__list").removeClass("panel__list--scroll"));else{var i=d(".nav-page-d--mobile").height();a+i+10>e&&(t.addClass("disease-page__container--hidden"),d(".panel__list").addClass("panel__list--scroll")),a+n+i+10<e&&(t.removeClass("disease-page__container--hidden"),d(".panel__list").removeClass("panel__list--scroll"))}}))}})),d((function(){0!==d(".nav-page-d").length&&d("[data-scroll]").on("click",(function(t){t.preventDefault();var e,n=d(this).data("scroll"),a=d(n).offset().top,i=d(".panel").height();0!==d(".panel__list").length?e=i+(d(".panel__list").height()+10):e=i;d("html, body").animate({scrollTop:a-e},700)}))})),d((function(){0!==d(".accordion").length&&window.addEventListener("click",(function(t){var e=d(".accordion"),n=d(t.target).closest(e);if(n.length){n.find(".accordion__head");n.toggleClass("accordion--active")}}))})),d((function(){var t,e=d(".nav-page-d");0!==e.length&&(t=v.matches?e.find(".nav-page-d__item"):d(".nav-page-d--mobile").find(".nav-page-d__item"),d(window).on("scroll",(function(){var e=window.scrollY;d("[data-section]").each((function(n,a){var i,o=a.offsetTop;if(0!==d(".panel__list").length){var s=d(".panel__list").height()+10;i=d(".panel").height()+s}else i=d(".panel").height()+10;o-i<e&&(t.each((function(){d(this).hasClass("nav-page-d__item--active")&&d(this).removeClass("nav-page-d__item--active")})),t.eq(n).addClass("nav-page-d__item--active"))}))})))})),d((function(){var t=d("[data-form]");0!==t.length&&(t.find("[data-form-button]").on("click",(function(t){t.preventDefault();var e=d(this).data("form-button");d("[data-form='".concat(e,"']")).attr("data-form-hidden",""),d("[data-response='".concat(e,"']")).attr("data-response-active","")})),d("[data-response]").find("[data-response-button]").on("click",(function(){var t=d(this).data("response-button");d("[data-form='".concat(t,"']")).removeAttr("data-form-hidden"),d("[data-response='".concat(t,"']")).removeAttr("data-response-active")})))})),d(window).on("load",(function(){var t=d("[data-slider-id]");0!==t.length&&t.each((function(){var t,e,n,i=d(this),o=(i.data("slider-id"),i.data("slider-prev")),s=i.data("slider-next"),r=d('[data-slider-button="'.concat(o,'"]')),c=d('[data-slider-button="'.concat(s,'"]')),l={slidesPerView:"auto",spaceBetween:15,loop:!0,breakpoints:(t={},e=1280,n={spaceBetween:30},e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t)},f=new a.Z(i[0],l);r.on("click",(function(){f.slidePrev()})),c.on("click",(function(){f.slideNext()}))}))})),d((function(){if(0!==d(".file").length){var t=d(".file__input"),e=d(".file__container"),n=[];t.on("change",(function(){for(var a=[],i=0;i<t[0].files.length;i++){var o=t[0].files[i];a.push(o),n.push(o)}a.forEach((function(t){var a=d("<div class=file__item><p class=file__name>".concat(t.name,"</p><div class=file__mark></div></div>"));a.data("fileData",t),e.append(a),a.on("click",(function(t){var e=d(t.target).closest(".file__mark"),a=n.indexOf(d(this).data("fileData"));1===e.length&&(d(this).remove(),n.splice(a,1))}))}))}))}})),d((function(){new o(".b--reviews-slider-main-page")})),d((function(){var t=d(".js--gel-reviews-slider");if(t.length){var e=new a.Z(t[0],{slidesPerView:"auto",spaceBetween:20,loop:!0}),n=d(".js--gel-reviews-btn--prev"),i=d(".js--gel-reviews-btn--next");n.on("click",(function(){return e.slidePrev()})),i.on("click",(function(){return e.slideNext()}))}})),d((function(){var t=d(".disease-page__spray");if(!v.matches&&0!==t.length){var e=t.find(".disease-page__content"),n=t.find(".disease-page__spray-button"),a=!1;function i(){var n=e.height();a?e.css("max-height",""):(260<n&&(t.addClass("disease-page__spray--crop"),e.css("max-height",260)),n<260&&(t.removeClass("disease-page__spray--crop"),e.css("max-height","")))}i(),d(window).one("resize",(function t(){i(),setTimeout((function(){d(window).one("resize",t)}),1e3/60)})),n.on("click",(function(){d(this).find(".button-show__text").toggleText("подробнее","скрыть"),e.toggleClass("disease-page__content--show"),a=!a,i()})),d.fn.extend({toggleText:function(t,e){return this.text(this.text()==e?t:e)}})}})),d((function(){})),d((function(){if(0!==d(".sticky").length)new(r())(".sticky")}));d((function(){d(".product-slider").each((function(){var t=d(this),e=t.find(".product-slider__slide");i(),d(window).on("load",i),d(window).one("resize",(function t(){setTimeout((function(){i(),d(window).one("resize",t)}),1e3/30)}));var n=t.find(".spray-page__tabs-item");if(n.length>1){var a={cur_index:0,clickable:!0};n.on("click",(function(){if(a.clickable){var t=d(this).closest(".product-slider__btns-item").index();if(t!==a.cur_index){e.toggleClass("product-slider__slide--front");var n=e.eq(t),i=n.find(".product-slider__layout");1===t&&n.addClass("product-slider__slide--right"),n.css("width",0),setTimeout((function(){n.css("width","calc(((100vw - (30px * 2)) / 24) * 18)")})),i.css("transform","scale(1.5)"),setTimeout((function(){i.css("transition","0.5s"),i.css("transform","scale(1)")})),a.cur_index=t,a.clickable=!1,setTimeout((function(){a.clickable=!0,n.css("width",""),i.css("transform",""),i.css("transition","")}),500)}}}))}function i(){var n,a=(n=0,e.each((function(){var t=this.offsetHeight;n=t>n?t:n})),n+"px");e.each((function(){d(this).css("height",a)})),t.css("height",a)}}))})),d((function(){var t=d(".panel");if(0!==t.length){var e={id:null,close:function(){d('[data-modal-id="'.concat(this.id,'"]')).removeAttr("data-modal-active"),d('[data-modal-button="'.concat(this.id,'"]')).removeAttr("data-modal-active")},open:function(){d('[data-modal-id="'.concat(this.id,'"]')).attr("data-modal-active",""),d('[data-modal-button="'.concat(this.id,'"]')).attr("data-modal-active","")},update:function(t){this.id=t},change:function(t){this.close(),this.update(t===this.id?null:t),this.open()}};d("[data-modal-button]").on("click",(function(){var n=d(this).data("modal-button");e.change(n),0!==t.find("[data-modal-active]").length?(t.addClass("panel--modal-active"),d(".body").css("overflow","hidden"),d(".row__col--main").css("position","relative"),d(".row__col--main").css("z-index","3")):(t.removeClass("panel--modal-active"),d(".body").css("overflow",""),setTimeout((function(){d(".row__col--main").css("position",""),d(".row__col--main").css("z-index","")}),500))})),d(window).on("click",(function(n){0!==d(n.target).closest(".panel__wrapper").length&&0===d(n.target).closest(".panel__test").length||0!==d(n.target).closest("[data-modal-active]").length||(e.change(null),d(".body").css("overflow",""),setTimeout((function(){d(".row__col--main").css("position",""),d(".row__col--main").css("z-index","")}),500),t.removeClass("panel--modal-active"))}))}})),d((function(){d(".wave").each((function(){console.log("wave");var t=this,e=t.getContext("2d");t.width=window.innerWidth,t.height=window.innerHeight;var n=[[0,307],[26,318],[57,329],[76,335],[103,342],[126,347],[154,352],[172,355],[201,359],[220,361],[240,362],[265,363],[291,364],[319,363],[344,362],[365,361],[384,359],[404,357],[423,354],[444,351],[465,347],[491,342],[570,321],[626,301],[685,272],[742,233],[790,186],[825,135],[842,93],[847,68],[847,50],[843,34],[834,21],[821,11],[807,5],[789,1],[771,0],[753,1],[727,6],[698,15],[662,30],[611,59],[575,85],[550,107],[518,142],[496,178],[487,205],[484,229],[485,250],[489,270],[499,297],[518,327],[539,351],[571,377],[611,401],[653,419],[695,431],[738,439],[773,442],[817,442],[866,438],[902,433],[942,426],[993,415],[1139,373],[1232,343],[1310,320],[1377,304],[1486,289],[1564,288],[1625,291],[1715,303],[1778,318],[1833,337],[1897,369],[1943,402],[1977,435],[2006,475],[2023,507],[2036,545],[2040,567]];n=n.map((function(t){return[t[0]/2,t[1]/2]})),e.beginPath(),e.moveTo.apply(e,f(n[0]));for(var a=1;a<n.length;a++)e.lineTo.apply(e,f(n[a]));e.strokeStyle="red",e.stroke(),e.closePath(),e.beginPath(),e.moveTo.apply(e,f(n[0]));for(var i=1;i<n.length-2;i++){var o=(n[i][0]+n[i+1][0])/2,s=(n[i][1]+n[i+1][1])/2;e.quadraticCurveTo(n[i][0],n[i][1],o,s),console.log(n[i][0],n[i][1],o,s)}e.quadraticCurveTo(n[i][0],n[i][1],n[i+1][0],n[i+1][1]);var r=e.createLinearGradient(0,0,1e3,1e3);function c(t){for(var e=t[0],n=t[0],a=1;a<t.length;a++)t[a][0]<e[0]&&t[a][1]<e[1]&&(e=t[a]),t[a][0]>n[0]&&t[a][1]>n[1]&&(n=t[a]);return[].concat(f(e),f(n))}r.addColorStop(0,"green"),r.addColorStop(1,"red"),e.strokeStyle=r,e.lineWidth=5,e.stroke(),e.closePath(),requestAnimationFrame((function a(){e.clearRect(0,0,t.width,t.height);var i=n.map((function(t){return[t[0],t[1]+10*Math.sin((t[0]+l%800)/800*Math.PI*2)]}));e.beginPath(),e.moveTo.apply(e,f(i[0]));for(var o=1;o<i.length-2;o++){var s=(i[o][0]+i[o+1][0])/2,r=(i[o][1]+i[o+1][1])/2;e.quadraticCurveTo(i[o][0],i[o][1],s,r)}e.quadraticCurveTo(i[o][0],i[o][1],i[o+1][0],i[o+1][1]);var d=e.createLinearGradient(0,0,c(n)[2],c(n)[3]);d.addColorStop(0,"#31aff2"),d.addColorStop(1,"#5553f0"),e.strokeStyle=d,e.lineWidth=1,e.stroke(),e.closePath(),l+=u,requestAnimationFrame(a)}));var l=0,u=5;d(window).on("mousemove",(function(t){var e=Math.abs(t.originalEvent.movementX),n=Math.abs(t.originalEvent.movementY);u=5+5*((e+n)/2),setTimeout((function(){u=5}),100)}))}))})),d((function(){var t=d(".test");0!==t.length&&t.each((function(){var t=d(this).find(".test__label"),e=d(this).find(".test__dot"),n=d(this).find(".test__question"),a=d(this).find(".test__index"),i=d(this).find(".test__container"),o=d(this).find(".test__result"),s=d(this).find(".test__form");t.each((function(){d(this).on("click",(function(){var t=d(this).closest(".test__options"),s=t.next();t.removeClass("test__options--active"),s.addClass("test__options--active"),e.eq(s.index()).addClass("test__dot--active"),a.text(s.index()+1),n.removeClass("test__question--active"),n.eq(s.index()).addClass("test__question--active"),-1===s.index()&&(i.addClass("test__container--hidden"),o.addClass("test__result--active"))}));var t=s.find(".test__form-response"),r=s.find(".form"),c=r.find(".form__input"),l=s.find(".test__form-wrapper"),f=s.find(".test__form-email");d(document).on("submit",r,(function(e){e.preventDefault(),l.addClass("test__form-wrapper--hidden"),t.addClass("test__form-response--active"),f.text(c.val())}))}))}))})),d((function(){if(0!==d("[data-hash]").length)if("#product2"===window.location.hash){var t=d('[data-hash="#product2"]').closest(".block__control-item");d(".block__frame").eq(t.index()).addClass("block__frame--front")}else{var e=d('[data-hash="#product1"]').closest(".block__control-item");window.history.replaceState(null,"","#product1"),d(".block__frame").eq(e.index()).addClass("block__frame--front")}})),d((function(){d(".block").each((function(){var t=d(this),e=t.find(".spray-page__tabs-item");if(e.length>1){var n="#product1"===window.location.hash?0:1,a=!0,i=t.find(".block__frame");t.find(".block__background");e.on("click",(function(){if(a&&!d(this).hasClass("spray-page__tabs-item--active")){a=!1,setTimeout((function(){i.removeClass("block__frame--open"),i.removeClass("block__frame--out"),setTimeout((function(){a=!0}))}),500);var t=1-n;n=t,i.toggleClass("block__frame--front"),i.eq(t).addClass("block__frame--open"),i.eq(t).addClass("block__frame--out");var e=d(this).data("hash");window.history.replaceState(null,"",e)}}))}var o=getComputedStyle(t[0]).minHeight.slice(0,-2),s=t.find(".block__slide");function r(){var e,n;e=function(e){t.css("height","".concat(e,"px")),s.css("height","".concat(e,"px"))},(n=t.clone())[0].style.cssText="\n          position: fixed;\n          top: 0;\n          left: 0;\n          transform: translateY(-100%);\n\n          pointer-events: none;\n\n          opacity: 0;\n        ",d(document.body).append(n),setTimeout((function(){var t=0,a=n.find(".block__slide");a.css("height",""),setTimeout((function(){a.each((function(){this.offsetHeight>t&&(t=this.offsetHeight)})),n.remove(),t=Math.max(t,o),e(t)}))}))}r(),d(window).on("load",r),d(window).one("resize",(function t(){setTimeout((function(){r(),d(window).one("resize",t)}),1e3/15)}))}))})),d((function(){d("form").parsley()})),d((function(){var t=d("[data-parallax]");0!==t.length&&t.each((function(){var t=d(this),e=t.offset().top,n=t.data("parallax"),a=d("[data-parallax-container='".concat(n,"']"));d(window).on("scroll",(function(){var n=this.pageYOffset;if(n<a.offset().top&&n+d(window).height()/2>e){var i=.1*(n+d(window).height()/2-e);requestAnimationFrame((function(){t.css("transform","translateY(".concat(i,"px)"))}))}}))}))})),d((function(){var t=d(".my-sticky");if(0!==t.length&&v.matches){var e=d(".disease-page__spray-row");t.height()<e.height()&&d(window).on("scroll resize load",(function(){var n=d(".panel"),a=e.offset().top,i=this.pageYOffset;i+n.height()>a?t.addClass("my-sticky--fixed"):t.removeClass("my-sticky--fixed"),t.height()+i+n.height()>a+e.height()?t.addClass("my-sticky--bottom"):t.removeClass("my-sticky--bottom")}))}}));var _=100;d((function(){d(".wwave").each((function(){var t=d(this),e=t.find(".wwave__canvas"),n=e[0].getContext("2d"),a=[[0,307],[26,318],[57,329],[76,335],[103,342],[126,347],[154,352],[172,355],[201,359],[220,361],[240,362],[265,363],[291,364],[319,363],[344,362],[365,361],[384,359],[404,357],[423,354],[444,351],[465,347],[491,342],[570,321],[626,301],[685,272],[742,233],[790,186],[825,135],[842,93],[847,68],[847,50],[843,34],[834,21],[821,11],[807,5],[789,1],[771,0],[753,1],[727,6],[698,15],[662,30],[611,59],[575,85],[550,107],[518,142],[496,178],[487,205],[484,229],[485,250],[489,270],[499,297],[518,327],[539,351],[571,377],[611,401],[653,419],[695,431],[738,439],[773,442],[817,442],[866,438],[902,433],[942,426],[993,415],[1139,373],[1232,343],[1310,320],[1377,304],[1486,289],[1564,288],[1625,291],[1715,303],[1778,318],[1833,337],[1897,369],[1943,402],[1977,435],[2006,475],[2023,507],[2036,545],[2040,567]],i=[],o=a[0][0],s=o,r=a[0][1],c=r;a.forEach((function(t){var e=t[0],n=t[1];e<o?o=e:e>s&&(s=e),n<r?r=n:n>c&&(c=n)}));var l=s-o+1,f=c-r+1,u=f/l;function v(){var n=getComputedStyle(e[0]).width.slice(0,-2);e[0].width=n;var a=getComputedStyle(t[0]).width.slice(0,-2);e[0].height=a*u+200}function h(t){n.clearRect(0,0,e[0].width,e[0].height),n.beginPath();var a=e[0].width-200,i=e[0].height-200;function o(t){return _+t*a}function s(t){return _+t*i}n.moveTo(o(t[0][0]),s(t[0][1]));for(var r=1;r<t.length-2;r++){var c=(t[r][0]+t[r+1][0])/2,l=(t[r][1]+t[r+1][1])/2;n.quadraticCurveTo(o(t[r][0]),s(t[r][1]),o(c),s(l))}n.quadraticCurveTo(o(t[r][0]),s(t[r][1]),o(t[r+1][0]),s(t[r+1][1]));var d=n.createLinearGradient(_,0,e[0].width-_,0);d.addColorStop(0,"#31aff2"),d.addColorStop(1,"#5553f0"),n.strokeStyle=d,n.lineWidth=1,n.stroke(),n.closePath()}a.forEach((function(t){var e=[];e[0]=(t[0]-o)/l,e[1]=(t[1]-r)/f,i.push(e)})),v(),d(window).one("resize",(function t(){console.log(123),setTimeout((function(){v(),d(window).one("resize",t)}),200)})),requestAnimationFrame((function(){h(i)})),requestAnimationFrame((function t(){var e=a.map((function(t){return[t[0],t[1]+10*Math.sin((t[0]+m%800)/800*Math.PI*2)]})),n=[],i=e[0][0],o=i,s=e[0][1],r=s;e.forEach((function(t){var e=t[0],n=t[1];e<i?i=e:e>o&&(o=e),n<s?s=n:n>r&&(r=n)}));var c=o-i+1,l=r-s+1;e.forEach((function(t){var e=[];e[0]=(t[0]-i)/c,e[1]=(t[1]-s)/l,n.push(e)})),h(n),m+=5,requestAnimationFrame(t)}));var m=0}))})),d((function(){var t=500,e=d(".b--carousel-slider-desktop");if(0!==e.length){var n=e.find(".b--btn-left-right-slider");e.find(".b__col").each((function(){var a=d(this),i=a.find(".b__container"),o=a.find(".b__title");i.each((function(){var i=d(this),s=i.find(".b__frame");n.on("click",(function(){var n=d(this).data("slider-arrow"),r=i.find(".b__frame--active"),c=a.find(".b__title--active");switch(n){case"prev":if(0!==r.prev().length){s.removeClass("b__frame--right b__frame--left"),o.removeClass("b__title--active"),r.prev().addClass("b__frame--active b__frame--front"),r.addClass("b__frame--right"),setTimeout((function(){c.prev().addClass("b__title--active")}),t),0!==r.next().length?r.next().addClass("b__frame--left"):s.eq(0).addClass("b__frame--left"),setTimeout((function(){r.prev().removeClass("b__frame--front"),r.removeClass("b__frame--active")}),t);break}s.removeClass("b__frame--right b__frame--left"),o.removeClass("b__title--active"),s.eq(s.length-1).addClass("b__frame--active b__frame--front"),r.next().addClass("b__frame--left"),r.addClass("b__frame--right"),setTimeout((function(){o.eq(s.length-1).addClass("b__title--active")}),t),setTimeout((function(){s.eq(s.length-1).removeClass("b__frame--front"),r.removeClass("b__frame--active")}),t);break;case"next":if(0!==r.next().length){s.removeClass("b__frame--right b__frame--left"),o.removeClass("b__title--active"),r.next().addClass("b__frame--active b__frame--front"),r.addClass("b__frame--left"),setTimeout((function(){c.next().addClass("b__title--active")}),t),0!==r.prev().length?r.prev().addClass("b__frame--right"):s.eq(s.length-1).addClass("b__frame--right"),setTimeout((function(){r.next().removeClass("b__frame--front"),r.removeClass("b__frame--active")}),t);break}s.removeClass("b__frame--right b__frame--left"),o.removeClass("b__title--active"),r.addClass("b__frame--left"),r.prev().addClass("b__frame--right"),s.eq(0).addClass("b__frame--active b__frame--front"),setTimeout((function(){o.eq(0).addClass("b__title--active")}),t),setTimeout((function(){s.eq(0).removeClass("b__frame--front"),r.removeClass("b__frame--active")}),t)}e.css("pointer-events","none"),setTimeout((function(){e.css("pointer-events","")}),t)}))}))}))}})),d((function(){var t=d(".video");0!==t.length&&t.each((function(){var t=d(this).find("#video");d(this).find("#play").on("click",(function(){d(this).fadeOut("500"),t.get(0).play(),t.attr("controls","")}))}))})),d(window).on("load",(function(){l().init({once:!0,offset:0,duration:1e3})})),d((function(){var t=d(".reviews-tabs");if(0!==t.length){var e=t.find(".spray-page__slider-item"),n=t.find(".reviews-tabs__item"),a=t.find(".border-link");e.on("click",(function(){var t=d(this).find(".border-link");d(this).hasClass("spray-page__slider-item--active")||(e.removeClass("spray-page__slider-item--active"),a.removeClass("border-link--active"),n.removeClass("reviews-tabs__item--active"),d(this).addClass("spray-page__slider-item--active"),t.addClass("border-link--active"),n.eq(d(this).index()).addClass("reviews-tabs__item--active"))}))}})),d((function(){var t=d(".main-page__reviews");if(0!==t.length){var e=t.find(".product-choice__item"),n=t.find(".main-page__reviews-item"),a=t.find(".product-btn");e.on("click",(function(){var t=d(this).find(".product-btn");d(this).hasClass("product-choice__item--active")||(e.removeClass("product-choice__item--active"),a.removeClass("product-btn--active"),n.removeClass("main-page__reviews-item--active"),d(this).addClass("product-choice__item--active"),t.addClass("product-btn--active"),n.eq(d(this).index()).addClass("main-page__reviews-item--active"))}))}}))},10:function(t,e,n){var a=n(638);a((function(){a(document).on("click","[data-type=option]",(function(t){var e=a(this),n=e.attr("data-url"),i=e.attr("data-op-end"),o=[],s=[],r=[];console.log("check"),a(this).addClass("checkOption"),"end"==i&&a(".checkOption").each((function(){o.push(a(this).attr("data-voz-diag")),s.push(a(this).attr("data-question")),r.push(a(this).find("[data-type=option_value]").text())})),"end"==i&&a.ajax({method:"POST",url:n,data:{vozDiagArr:o}}).done((function(t){arr=t.split("|"),a(document).find("[data-type=voz_diag_name]").text(arr[0]),a(document).find("[data-type=voz_diag_desc]").text(arr[1])}))})),a(document).on("submit","[data-type=js-form-test]",(function(t){console.log("form test"),t.preventDefault();var e=a(this),n=e.attr("data-url"),i=[],o=[],s={};e.find("[data-type=get-field]").each((function(){var t=a(this).attr("data-uf"),e=a(this).val();s[t]=e})),a(".checkOption").each((function(){i.push(a(this).attr("data-question")),o.push(a(this).find("[data-type=option_value]").text())})),s.question=i,s.answer=o,s.test_email="Y",console.log(s),a.ajax({type:"POST",url:n,dataType:"json",data:s,success:function(t){}})})),a(document).on("click","[data-type=show_more_click]",(function(t){var e=a(this),n=e.attr("data-url"),i=[],o=e.attr("data-ids"),s=a(document).find("[data-container=items]");o&&(i=JSON.parse(o)),console.log("show more"),n&&(e.remove(),a.ajax({method:"POST",url:n,data:{ajax:1,ids:i}}).done((function(t){var e=a(t).find("[data-type=show_more_click]"),n=a(t).find("[data-type=item]");s.append(n),e&&s.after(e)})))})),function(){function t(){var t=[],e=a("[data-type=rev-list]");a("[data-type=reviews-filter]").each((function(){a(this).hasClass("border-link--active")&&(t=JSON.parse(a(this).attr("data-ids")))})),console.log(t),a.ajax({method:"POST",url:window.location.href,data:{ajax:1,ids:t}}).done((function(t){e.html(t),console.log(t)}))}a("[data-type=reviews-filter]").on("click",(function(e){e.preventDefault(),a("[data-type=reviews-filter]").each((function(){a(this).removeClass("border-link--active")})),a(this).toggleClass("border-link--active"),t()}))}()}))}},n={};function a(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={exports:{}};return e[t].call(o.exports,o,o.exports,a),o.exports}a.m=e,t=[],a.O=function(e,n,i,o){if(!n){var s=1/0;for(l=0;l<t.length;l++){n=t[l][0],i=t[l][1],o=t[l][2];for(var r=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[c])}))?n.splice(c--,1):(r=!1,o<s&&(s=o));r&&(t.splice(l--,1),e=i())}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,i,o]},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,{a:e}),e},a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={143:0,532:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,o,s=n[0],r=n[1],c=n[2],l=0;for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(c)var d=c(a);for(e&&e(n);l<s.length;l++)o=s[l],a.o(t,o)&&t[o]&&t[o][0](),t[s[l]]=0;return a.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var i=a.O(void 0,[606,532],(function(){return a(905)}));i=a.O(i)}();