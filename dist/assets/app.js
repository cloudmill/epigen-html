!function(){"use strict";var e,t={905:function(e,t,n){var i=n(566);function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$root=document.querySelector(t),this.$root&&(this.$wrapper=this.$root.querySelector(".b__bottom"),this.$slides=this.$root.querySelectorAll(".b__slide"),this.setActive=this.setActive.bind(this),this.init())}var t,n,i;return t=e,(n=[{key:"init",value:function(){var e=this;this.setActive(this.$slides[0]),this.$root.addEventListener("click",(function(t){var n=t.target.closest(".b--btn-left-right-slider");if(n)switch(n.dataset.commandSliderArrow){case"prev":if(e.$active.previousElementSibling){e.setActive(e.$active.previousElementSibling);break}e.setActive(e.$slides[e.$slides.length-1]);break;case"next":if(e.$active.nextElementSibling){e.setActive(e.$active.nextElementSibling);break}e.setActive(e.$slides[0]);break;default:return}})),this.$root.addEventListener("touchstart",(function(t){e.$root.ontouchmove=function(n){e.$root.ontouchend=function(){return t.touches[0].clientX-n.touches[0].clientX<0&&t.touches[0].clientX-n.touches[0].clientX<-75?(e.$active.previousElementSibling?e.setActive(e.$active.previousElementSibling):e.setActive(e.$slides[e.$slides.length-1]),e.$root.ontouchmove=null,void(e.$root.ontouchend=null)):t.touches[0].clientX-n.touches[0].clientX>0&&t.touches[0].clientX-n.touches[0].clientX>75?(e.$active.nextElementSibling?e.setActive(e.$active.nextElementSibling):e.setActive(e.$slides[0]),e.$root.ontouchmove=null,void(e.$root.ontouchend=null)):void 0}}})),window.addEventListener("resize",(function(){e.setActive(e.$active)}))}},{key:"setActive",value:function(e){var t=this;this.$slides.forEach((function(n,i){n!==e?n.classList.remove("active"):(t.$wrapper.style.pointerEvents="none",setTimeout((function(){n.classList.add("active"),t.$active=n,t.$wrapper.style.transform="translateX(-".concat(t.$wrapper.offsetWidth*i,"px)"),t.$wrapper.style.pointerEvents=""}),500))}))}}])&&a(t.prototype,n),i&&a(t,i),e}(),s=n(660),r=n.n(s),c=n(354),l=n.n(c),d=(n(563),n(638));function f(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var v=matchMedia("(min-width: ".concat(1280,"px)"));d((function(){d(".nav-page-d").each((function(){var e=d(this),t={activeItem:e.find(".nav-page-d__item--active"),setActiveItem:function(e){t.activeItem.removeClass("nav-page-d__item--active"),t.activeItem=e,t.activeItem.addClass("nav-page-d__item--active")}};e.find(".nav-page-d__link").on("click",(function(e){e.preventDefault();var n=d(this).closest(".nav-page-d__item");t.setActiveItem(n)}))}))})),d((function(){d(".aside__menu").on("click",(function(){d(this).toggleClass("aside__menu--active")}))})),d((function(){var e=d(".panel"),t=d(window).scrollTop();function n(){var n=d(window).scrollTop();Math.abs(t-n)>=1&&(n>t?e.addClass("panel--hidden"):e.removeClass("panel--hidden")),t=n}d(window).one("scroll",(function e(){n(),setTimeout((function(){n(),d(window).one("scroll",e)}),1e3/60)}))}));var h=1e3;d((function(){var e=d(".cookies");if(0!==e.length){var t=!1,n=e.find(".cookies__btn");d(".main-page").length&&(h+=3e3),setTimeout((function(){e.addClass("cookies--active"),e.on("transitionend",(function(n){n.target===e[0]&&(t?e.addClass("cookies--disabled"):t=!0)})),n.on("click",(function(){t&&e.removeClass("cookies--active")}))}),h)}})),d((function(){var e=d("[data-modal]");0!==e.length&&(d("[data-button]").each((function(){var e=d(this),t=e.data("button");e.on("click",(function(){d("[data-modal='".concat(t,"']")).toggleClass("modal--active"),d(".body").toggleClass("body--hidden")}))})),d(window).on("click",(function(t){t.target==d(".modal--active")[0]&&(e.removeClass("modal--active"),d(".body").removeClass("body--hidden"))})))})),d((function(){d("[data-crop-text]").each((function(){var e=d(this),t=e.text();function n(){var n=v.matches?21:18;if(e.text(t),e.height()>3*n){for(var i=t;e.height()>3*n;)i=i.substring(0,i.length-1).trim(),e.text(i);i=i.substring(0,i.length-5).trim()+"...",e.text(i)}}n(),window.addEventListener("resize",(function e(){n(),setTimeout((function(){n(),window.addEventListener("resize",e,{once:!0})}),1e3)}),{once:!0})}))})),d((function(){var e=[".review-card--modal",".button-modal","[data-mdl-open]"].join(", "),t={isActive:d(".mdl").hasClass("mdl--active")};function n(){d(e).on("click",(function i(){console.log("open click"),d(e).off("click",i),t.isActive=!0,d(".mdl").addClass("mdl--active"),d(".body").addClass("body--hidden"),setTimeout((function(){!function(){function e(i){console.log("click close");var a=d(i.target),o=a.closest(".mdl__close"),s=a.closest(".mdl__content"),r=a.closest(".file__item");(1===o.length||0===s.length&&0===r.length)&&(d(window).off("click",e),t.isActive=!1,d(".mdl").removeClass("mdl--active"),d(".body").removeClass("body--hidden"),setTimeout((function(){n()}),0))}d(window).on("click",e)}()}),0)}))}t.isActive||n(),d(e).on("click",(function(e){e.preventDefault()}))}));d((function(){var e=d(".alert");if(0!==e.length){var t=!1,n=e.find(".button-close");setTimeout((function(){e.addClass("alert--active"),e.on("transitionend",(function(n){n.target===e[0]&&(t?e.addClass("alert--disabled"):t=!0)})),n.on("click",(function(){t&&e.removeClass("alert--active")}))}),1e3)}})),d((function(){var e=d("[data-list]");if(0!==e.length){var t=e.offset().top-10,n=d(".panel__panel").height();d(window).on("scroll load",(function(){var i=this.pageYOffset;if(v.matches)i>t&&(e.addClass("disease-page__container--hidden"),d(".panel__list").addClass("panel__list--scroll")),i+n<t&&(e.removeClass("disease-page__container--hidden"),d(".panel__list").removeClass("panel__list--scroll"));else{var a=d(".nav-page-d--mobile").height();i+a+10>t&&(e.addClass("disease-page__container--hidden"),d(".panel__list").addClass("panel__list--scroll")),i+n+a+10<t&&(e.removeClass("disease-page__container--hidden"),d(".panel__list").removeClass("panel__list--scroll"))}}))}})),d((function(){0!==d(".nav-page-d").length&&d("[data-scroll]").on("click",(function(e){e.preventDefault();var t,n=d(this).data("scroll"),i=d(n).offset().top,a=d(".panel").height();0!==d(".panel__list").length?t=a+(d(".panel__list").height()+10):t=a;d("html, body").animate({scrollTop:i-t},700)}))})),d((function(){0!==d(".accordion").length&&window.addEventListener("click",(function(e){var t=d(".accordion"),n=d(e.target).closest(t);if(n.length){n.find(".accordion__head");n.toggleClass("accordion--active")}}))})),d((function(){var e,t=d(".nav-page-d");0!==t.length&&(e=v.matches?t.find(".nav-page-d__item"):d(".nav-page-d--mobile").find(".nav-page-d__item"),d(window).on("scroll",(function(){var t=window.scrollY;d("[data-section]").each((function(n,i){var a,o=i.offsetTop;if(0!==d(".panel__list").length){var s=d(".panel__list").height()+10;a=d(".panel").height()+s}else a=d(".panel").height()+10;o-a<t&&(e.each((function(){d(this).hasClass("nav-page-d__item--active")&&d(this).removeClass("nav-page-d__item--active")})),e.eq(n).addClass("nav-page-d__item--active"))}))})))})),d((function(){var e=d("[data-form]");0!==e.length&&(e.find("[data-form-button]").on("click",(function(e){e.preventDefault();var t=d(this).data("form-button");d("[data-form='".concat(t,"']")).attr("data-form-hidden",""),d("[data-response='".concat(t,"']")).attr("data-response-active","")})),d("[data-response]").find("[data-response-button]").on("click",(function(){var e=d(this).data("response-button");d("[data-form='".concat(e,"']")).removeAttr("data-form-hidden"),d("[data-response='".concat(e,"']")).removeAttr("data-response-active")})))})),d(window).on("load",(function(){var e=d("[data-slider-id]");0!==e.length&&e.each((function(){var e,t,n,a=d(this),o=(a.data("slider-id"),a.data("slider-prev")),s=a.data("slider-next"),r=d('[data-slider-button="'.concat(o,'"]')),c=d('[data-slider-button="'.concat(s,'"]')),l={slidesPerView:"auto",spaceBetween:15,breakpoints:(e={},t=1280,n={spaceBetween:30},t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e)},f=new i.Z(a[0],l);r.on("click",(function(){f.slidePrev()})),c.on("click",(function(){f.slideNext()}))}))})),d((function(){if(0!==d(".file").length){var e=d(".file__input"),t=d(".file__container"),n=[];e.on("change",(function(){for(var i=[],a=0;a<e[0].files.length;a++){var o=e[0].files[a];i.push(o),n.push(o)}i.forEach((function(e){var i=d("<div class=file__item><p class=file__name>".concat(e.name,"</p><div class=file__mark></div></div>"));i.data("fileData",e),t.append(i),i.on("click",(function(e){var t=d(e.target).closest(".file__mark"),i=n.indexOf(d(this).data("fileData"));1===t.length&&(d(this).remove(),n.splice(i,1))}))}))}))}})),d((function(){new o(".b--reviews-slider-main-page")})),d((function(){var e=d(".js--gel-reviews-slider");if(e.length){var t=new i.Z(e[0],{slidesPerView:"auto",spaceBetween:20,loop:!0}),n=d(".js--gel-reviews-btn--prev"),a=d(".js--gel-reviews-btn--next");n.on("click",(function(){return t.slidePrev()})),a.on("click",(function(){return t.slideNext()}))}})),d((function(){var e=d(".disease-page__spray");if(!v.matches&&0!==e.length){var t=e.find(".disease-page__content"),n=e.find(".disease-page__spray-button"),i=!1;function a(){var n=t.height();i?t.css("max-height",""):(260<n&&(e.addClass("disease-page__spray--crop"),t.css("max-height",260)),n<260&&(e.removeClass("disease-page__spray--crop"),t.css("max-height","")))}a(),d(window).one("resize",(function e(){a(),setTimeout((function(){d(window).one("resize",e)}),1e3/60)})),n.on("click",(function(){d(this).find(".button-show__text").toggleText("подробнее","скрыть"),t.toggleClass("disease-page__content--show"),i=!i,a()})),d.fn.extend({toggleText:function(e,t){return this.text(this.text()==t?e:t)}})}})),d((function(){})),d((function(){if(0!==d(".sticky").length)new(r())(".sticky")}));d((function(){d(".product-slider").each((function(){var e=d(this),t=e.find(".product-slider__slide");a(),d(window).on("load",a),d(window).one("resize",(function e(){setTimeout((function(){a(),d(window).one("resize",e)}),1e3/30)}));var n=e.find(".spray-page__tabs-item");if(n.length>1){var i={cur_index:0,clickable:!0};n.on("click",(function(){if(i.clickable){var e=d(this).closest(".product-slider__btns-item").index();if(e!==i.cur_index){t.toggleClass("product-slider__slide--front");var n=t.eq(e),a=n.find(".product-slider__layout");1===e&&n.addClass("product-slider__slide--right"),n.css("width",0),setTimeout((function(){n.css("width","calc(((100vw - (30px * 2)) / 24) * 18)")})),a.css("transform","scale(1.5)"),setTimeout((function(){a.css("transition","0.5s"),a.css("transform","scale(1)")})),i.cur_index=e,i.clickable=!1,setTimeout((function(){i.clickable=!0,n.css("width",""),a.css("transform",""),a.css("transition","")}),500)}}}))}function a(){var n,i=(n=0,t.each((function(){var e=this.offsetHeight;n=e>n?e:n})),n+"px");t.each((function(){d(this).css("height",i)})),e.css("height",i)}}))})),d((function(){var e=d(".panel");if(0!==e.length){var t={id:null,close:function(){d('[data-modal-id="'.concat(this.id,'"]')).removeAttr("data-modal-active"),d('[data-modal-button="'.concat(this.id,'"]')).removeAttr("data-modal-active")},open:function(){d('[data-modal-id="'.concat(this.id,'"]')).attr("data-modal-active",""),d('[data-modal-button="'.concat(this.id,'"]')).attr("data-modal-active","")},update:function(e){this.id=e},change:function(e){this.close(),this.update(e===this.id?null:e),this.open()}};d("[data-modal-button]").on("click",(function(){var n=d(this).data("modal-button");t.change(n),0!==e.find("[data-modal-active]").length?(e.addClass("panel--modal-active"),d(".body").css("overflow","hidden"),d(".row__col--main").css("position","relative"),d(".row__col--main").css("z-index","3")):(e.removeClass("panel--modal-active"),d(".body").css("overflow",""),setTimeout((function(){d(".row__col--main").css("position",""),d(".row__col--main").css("z-index","")}),500))})),d(window).on("click",(function(n){0!==d(n.target).closest(".panel__wrapper").length&&0===d(n.target).closest(".panel__test").length||0!==d(n.target).closest("[data-modal-active]").length||(t.change(null),d(".body").css("overflow",""),setTimeout((function(){d(".row__col--main").css("position",""),d(".row__col--main").css("z-index","")}),500),e.removeClass("panel--modal-active"))}))}})),d((function(){d(".wave").each((function(){console.log("wave");var e=this,t=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight;var n=[[0,307],[26,318],[57,329],[76,335],[103,342],[126,347],[154,352],[172,355],[201,359],[220,361],[240,362],[265,363],[291,364],[319,363],[344,362],[365,361],[384,359],[404,357],[423,354],[444,351],[465,347],[491,342],[570,321],[626,301],[685,272],[742,233],[790,186],[825,135],[842,93],[847,68],[847,50],[843,34],[834,21],[821,11],[807,5],[789,1],[771,0],[753,1],[727,6],[698,15],[662,30],[611,59],[575,85],[550,107],[518,142],[496,178],[487,205],[484,229],[485,250],[489,270],[499,297],[518,327],[539,351],[571,377],[611,401],[653,419],[695,431],[738,439],[773,442],[817,442],[866,438],[902,433],[942,426],[993,415],[1139,373],[1232,343],[1310,320],[1377,304],[1486,289],[1564,288],[1625,291],[1715,303],[1778,318],[1833,337],[1897,369],[1943,402],[1977,435],[2006,475],[2023,507],[2036,545],[2040,567]];n=n.map((function(e){return[e[0]/2,e[1]/2]})),t.beginPath(),t.moveTo.apply(t,f(n[0]));for(var i=1;i<n.length;i++)t.lineTo.apply(t,f(n[i]));t.strokeStyle="red",t.stroke(),t.closePath(),t.beginPath(),t.moveTo.apply(t,f(n[0]));for(var a=1;a<n.length-2;a++){var o=(n[a][0]+n[a+1][0])/2,s=(n[a][1]+n[a+1][1])/2;t.quadraticCurveTo(n[a][0],n[a][1],o,s),console.log(n[a][0],n[a][1],o,s)}t.quadraticCurveTo(n[a][0],n[a][1],n[a+1][0],n[a+1][1]);var r=t.createLinearGradient(0,0,1e3,1e3);function c(e){for(var t=e[0],n=e[0],i=1;i<e.length;i++)e[i][0]<t[0]&&e[i][1]<t[1]&&(t=e[i]),e[i][0]>n[0]&&e[i][1]>n[1]&&(n=e[i]);return[].concat(f(t),f(n))}r.addColorStop(0,"green"),r.addColorStop(1,"red"),t.strokeStyle=r,t.lineWidth=5,t.stroke(),t.closePath(),requestAnimationFrame((function i(){t.clearRect(0,0,e.width,e.height);var a=n.map((function(e){return[e[0],e[1]+10*Math.sin((e[0]+l%800)/800*Math.PI*2)]}));t.beginPath(),t.moveTo.apply(t,f(a[0]));for(var o=1;o<a.length-2;o++){var s=(a[o][0]+a[o+1][0])/2,r=(a[o][1]+a[o+1][1])/2;t.quadraticCurveTo(a[o][0],a[o][1],s,r)}t.quadraticCurveTo(a[o][0],a[o][1],a[o+1][0],a[o+1][1]);var d=t.createLinearGradient(0,0,c(n)[2],c(n)[3]);d.addColorStop(0,"#31aff2"),d.addColorStop(1,"#5553f0"),t.strokeStyle=d,t.lineWidth=1,t.stroke(),t.closePath(),l+=u,requestAnimationFrame(i)}));var l=0,u=5;d(window).on("mousemove",(function(e){var t=Math.abs(e.originalEvent.movementX),n=Math.abs(e.originalEvent.movementY);u=5+5*((t+n)/2),setTimeout((function(){u=5}),100)}))}))})),d((function(){var e=d(".test");0!==e.length&&e.each((function(){var e=d(this).find(".test__label"),t=d(this).find(".test__dot"),n=d(this).find(".test__question"),i=d(this).find(".test__index"),a=d(this).find(".test__container"),o=d(this).find(".test__result"),s=d(this).find(".test__form");e.each((function(){d(this).on("click",(function(){var e=d(this).closest(".test__options"),s=e.next();e.removeClass("test__options--active"),s.addClass("test__options--active"),t.eq(s.index()).addClass("test__dot--active"),i.text(s.index()+1),n.removeClass("test__question--active"),n.eq(s.index()).addClass("test__question--active"),-1===s.index()&&(a.addClass("test__container--hidden"),o.addClass("test__result--active"))}));var e=s.find(".test__form-response"),r=s.find(".form"),c=r.find(".form__input"),l=s.find(".test__form-wrapper"),f=s.find(".test__form-email");d(document).on("submit",r,(function(t){t.preventDefault(),l.addClass("test__form-wrapper--hidden"),e.addClass("test__form-response--active"),f.text(c.val())}))}))}))})),d((function(){if(0!==d("[data-hash]").length)if("#product2"===window.location.hash){var e=d('[data-hash="#product2"]').closest(".block__control-item");d(".block__frame").eq(e.index()).addClass("block__frame--front")}else{var t=d('[data-hash="#product1"]').closest(".block__control-item");window.history.replaceState(null,"","#product1"),d(".block__frame").eq(t.index()).addClass("block__frame--front")}})),d((function(){d(".block").each((function(){var e=d(this),t=e.find(".spray-page__tabs-item");if(t.length>1){var n="#product1"===window.location.hash?0:1,i=!0,a=e.find(".block__frame");e.find(".block__background");t.on("click",(function(){if(i&&!d(this).hasClass("spray-page__tabs-item--active")){i=!1,setTimeout((function(){a.removeClass("block__frame--open"),a.removeClass("block__frame--out"),setTimeout((function(){i=!0}))}),500);var e=1-n;n=e,a.toggleClass("block__frame--front"),a.eq(e).addClass("block__frame--open"),a.eq(e).addClass("block__frame--out");var t=d(this).data("hash");window.history.replaceState(null,"",t)}}))}var o=getComputedStyle(e[0]).minHeight.slice(0,-2),s=e.find(".block__slide");function r(){var t,n;t=function(t){e.css("height","".concat(t,"px")),s.css("height","".concat(t,"px"))},(n=e.clone())[0].style.cssText="\n          position: fixed;\n          top: 0;\n          left: 0;\n          transform: translateY(-100%);\n\n          pointer-events: none;\n\n          opacity: 0;\n        ",d(document.body).append(n),setTimeout((function(){var e=0,i=n.find(".block__slide");i.css("height",""),setTimeout((function(){i.each((function(){this.offsetHeight>e&&(e=this.offsetHeight)})),n.remove(),e=Math.max(e,o),t(e)}))}))}r(),d(window).on("load",r),d(window).one("resize",(function e(){setTimeout((function(){r(),d(window).one("resize",e)}),1e3/15)}))}))})),d((function(){d("form").parsley()})),d((function(){var e=d("[data-parallax]");0!==e.length&&e.each((function(){var e=d(this),t=e.offset().top,n=e.data("parallax"),i=d("[data-parallax-container='".concat(n,"']"));d(window).on("scroll",(function(){var n=this.pageYOffset;if(n<i.offset().top&&n+d(window).height()/2>t){var a=.1*(n+d(window).height()/2-t);requestAnimationFrame((function(){e.css("transform","translateY(".concat(a,"px)"))}))}}))}))})),d((function(){var e=d(".my-sticky");if(0!==e.length&&v.matches){var t=d(".disease-page__spray-row");e.height()<t.height()&&d(window).on("scroll resize load",(function(){var n=d(".panel"),i=t.offset().top,a=this.pageYOffset;a+n.height()>i?e.addClass("my-sticky--fixed"):e.removeClass("my-sticky--fixed"),e.height()+a+n.height()>i+t.height()?e.addClass("my-sticky--bottom"):e.removeClass("my-sticky--bottom")}))}}));var _=100;d((function(){d(".wwave").each((function(){var e=d(this),t=e.find(".wwave__canvas"),n=t[0].getContext("2d"),i=[[0,307],[26,318],[57,329],[76,335],[103,342],[126,347],[154,352],[172,355],[201,359],[220,361],[240,362],[265,363],[291,364],[319,363],[344,362],[365,361],[384,359],[404,357],[423,354],[444,351],[465,347],[491,342],[570,321],[626,301],[685,272],[742,233],[790,186],[825,135],[842,93],[847,68],[847,50],[843,34],[834,21],[821,11],[807,5],[789,1],[771,0],[753,1],[727,6],[698,15],[662,30],[611,59],[575,85],[550,107],[518,142],[496,178],[487,205],[484,229],[485,250],[489,270],[499,297],[518,327],[539,351],[571,377],[611,401],[653,419],[695,431],[738,439],[773,442],[817,442],[866,438],[902,433],[942,426],[993,415],[1139,373],[1232,343],[1310,320],[1377,304],[1486,289],[1564,288],[1625,291],[1715,303],[1778,318],[1833,337],[1897,369],[1943,402],[1977,435],[2006,475],[2023,507],[2036,545],[2040,567]],a=[],o=i[0][0],s=o,r=i[0][1],c=r;i.forEach((function(e){var t=e[0],n=e[1];t<o?o=t:t>s&&(s=t),n<r?r=n:n>c&&(c=n)}));var l=s-o+1,f=c-r+1,u=f/l;function v(){var n=getComputedStyle(t[0]).width.slice(0,-2);t[0].width=n;var i=getComputedStyle(e[0]).width.slice(0,-2);t[0].height=i*u+200}i.forEach((function(e){var t=[];t[0]=(e[0]-o)/l,t[1]=(e[1]-r)/f,a.push(t)})),v(),d(window).one("resize",(function e(){console.log(123),setTimeout((function(){v(),d(window).one("resize",e)}),200)}));!function e(){!function(e){n.clearRect(0,0,t[0].width,t[0].height),n.beginPath();var i=t[0].width-200,a=t[0].height-200;function o(e){return _+e*i}function s(e){return _+e*a}n.moveTo(o(e[0][0]),s(e[0][1]));for(var r=1;r<e.length-2;r++){var c=(e[r][0]+e[r+1][0])/2,l=(e[r][1]+e[r+1][1])/2;n.quadraticCurveTo(o(e[r][0]),s(e[r][1]),o(c),s(l))}n.quadraticCurveTo(o(e[r][0]),s(e[r][1]),o(e[r+1][0]),s(e[r+1][1]));var d=n.createLinearGradient(_,0,t[0].width-_,0);d.addColorStop(0,"#31aff2"),d.addColorStop(1,"#5553f0"),n.strokeStyle=d,n.lineWidth=1,n.stroke(),n.closePath()}(),5,requestAnimationFrame(e)}()}))})),d((function(){var e=500,t=d(".b--carousel-slider-desktop");if(0!==t.length){var n=t.find(".b--btn-left-right-slider");t.find(".b__col").each((function(){var i=d(this),a=i.find(".b__container"),o=i.find(".b__title");a.each((function(){var a=d(this),s=a.find(".b__frame");n.on("click",(function(){var n=d(this).data("slider-arrow"),r=a.find(".b__frame--active"),c=i.find(".b__title--active");switch(n){case"prev":if(0!==r.prev().length){s.removeClass("b__frame--right b__frame--left"),o.removeClass("b__title--active"),r.prev().addClass("b__frame--active b__frame--front"),r.addClass("b__frame--right"),setTimeout((function(){c.prev().addClass("b__title--active")}),e),0!==r.next().length?r.next().addClass("b__frame--left"):s.eq(0).addClass("b__frame--left"),setTimeout((function(){r.prev().removeClass("b__frame--front"),r.removeClass("b__frame--active")}),e);break}s.removeClass("b__frame--right b__frame--left"),o.removeClass("b__title--active"),s.eq(s.length-1).addClass("b__frame--active b__frame--front"),r.next().addClass("b__frame--left"),r.addClass("b__frame--right"),setTimeout((function(){o.eq(s.length-1).addClass("b__title--active")}),e),setTimeout((function(){s.eq(s.length-1).removeClass("b__frame--front"),r.removeClass("b__frame--active")}),e);break;case"next":if(0!==r.next().length){s.removeClass("b__frame--right b__frame--left"),o.removeClass("b__title--active"),r.next().addClass("b__frame--active b__frame--front"),r.addClass("b__frame--left"),setTimeout((function(){c.next().addClass("b__title--active")}),e),0!==r.prev().length?r.prev().addClass("b__frame--right"):s.eq(s.length-1).addClass("b__frame--right"),setTimeout((function(){r.next().removeClass("b__frame--front"),r.removeClass("b__frame--active")}),e);break}s.removeClass("b__frame--right b__frame--left"),o.removeClass("b__title--active"),r.addClass("b__frame--left"),r.prev().addClass("b__frame--right"),s.eq(0).addClass("b__frame--active b__frame--front"),setTimeout((function(){o.eq(0).addClass("b__title--active")}),e),setTimeout((function(){s.eq(0).removeClass("b__frame--front"),r.removeClass("b__frame--active")}),e)}t.css("pointer-events","none"),setTimeout((function(){t.css("pointer-events","")}),e)}))}))}))}})),d((function(){var e=d(".video");0!==e.length&&e.each((function(){var e=d(this).find("#video");d(this).find("#play").on("click",(function(){d(this).fadeOut("500"),e.get(0).play(),e.attr("controls","")}))}))})),d(window).on("load",(function(){l().init({once:!0,offset:0,duration:1e3})})),d((function(){var e=d(".reviews-tabs");if(0!==e.length){var t=e.find(".spray-page__slider-item"),n=e.find(".border-link"),i=e.find(".reviews-tabs__item");t.on("click",(function(){var e=d(this).find(".border-link");d(this).hasClass("spray-page__slider-item--active")||(t.removeClass("spray-page__slider-item--active"),n.removeClass("border-link--active"),i.removeClass("reviews-tabs__item--active"),d(this).addClass("spray-page__slider-item--active"),e.addClass("border-link--active"),i.eq(d(this).index()).addClass("reviews-tabs__item--active"))}))}}))}},n={};function i(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,i),o.exports}i.m=t,e=[],i.O=function(t,n,a,o){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],a=e[l][1],o=e[l][2];for(var r=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(r=!1,o<s&&(s=o));r&&(e.splice(l--,1),t=a())}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,a,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={143:0,532:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,s=n[0],r=n[1],c=n[2],l=0;for(a in r)i.o(r,a)&&(i.m[a]=r[a]);if(c)var d=c(i);for(t&&t(n);l<s.length;l++)o=s[l],i.o(e,o)&&e[o]&&e[o][0](),e[s[l]]=0;return i.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=i.O(void 0,[606,532],(function(){return i(905)}));a=i.O(a)}();