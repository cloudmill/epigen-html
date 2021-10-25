!function(){"use strict";var e,t={905:function(e,t,a){var n=a(361);function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$root=document.querySelector(t),this.$root&&(this.$wrapper=this.$root.querySelector(".b__bottom"),this.$slides=this.$root.querySelectorAll(".b__slide"),this.setActive=this.setActive.bind(this),this.init())}var t,a,n;return t=e,(a=[{key:"init",value:function(){var e=this;this.setActive(this.$slides[0]),this.$root.addEventListener("click",(function(t){var a=t.target.closest(".b--btn-left-right-slider");if(a)switch(a.dataset.commandSliderArrow){case"prev":if(e.$active.previousElementSibling){e.setActive(e.$active.previousElementSibling);break}e.setActive(e.$slides[e.$slides.length-1]);break;case"next":if(e.$active.nextElementSibling){e.setActive(e.$active.nextElementSibling);break}e.setActive(e.$slides[0]);break;default:return}})),this.$root.addEventListener("touchstart",(function(t){e.$root.ontouchmove=function(a){e.$root.ontouchend=function(){return t.touches[0].clientX-a.touches[0].clientX<0&&t.touches[0].clientX-a.touches[0].clientX<-75?(e.$active.previousElementSibling?e.setActive(e.$active.previousElementSibling):e.setActive(e.$slides[e.$slides.length-1]),e.$root.ontouchmove=null,void(e.$root.ontouchend=null)):t.touches[0].clientX-a.touches[0].clientX>0&&t.touches[0].clientX-a.touches[0].clientX>75?(e.$active.nextElementSibling?e.setActive(e.$active.nextElementSibling):e.setActive(e.$slides[0]),e.$root.ontouchmove=null,void(e.$root.ontouchend=null)):void 0}}})),window.addEventListener("resize",(function(){e.setActive(e.$active)}))}},{key:"setActive",value:function(e){var t=this;this.$slides.forEach((function(a,n){a!==e?a.classList.remove("active"):(t.$wrapper.style.pointerEvents="none",setTimeout((function(){a.classList.add("active"),t.$active=a,t.$wrapper.style.transform="translateX(-".concat(t.$wrapper.offsetWidth*n,"px)"),t.$wrapper.style.pointerEvents=""}),500))}))}}])&&i(t.prototype,a),n&&i(t,n),e}(),s=a(566),r=a.n(s),c=(a(563),a(638));function d(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}c((function(){a(10)}));var f=1280,u=matchMedia("(min-width: ".concat(f,"px)"));c((function(){c(".aside__menu").on("click",(function(){c(this).toggleClass("aside__menu--active")}))})),c((function(){var e=c(".panel"),t=c(window).scrollTop();function a(){var a=c(window).scrollTop();Math.abs(t-a)>=1&&(a>t?e.addClass("panel--hidden"):e.removeClass("panel--hidden")),t<1&&e.removeClass("panel--hidden"),t=a}c(window).one("scroll",(function e(){a(),setTimeout((function(){a(),c(window).one("scroll",e)}),1e3/60)}))}));c(window).on("load",(function(){var e=c(".cookies");if(0!==e.length){var t=!1,a=e.find(".cookies__btn");setTimeout((function(){e.addClass("cookies--active"),e.on("transitionend",(function(a){a.target===e[0]&&(t?e.addClass("cookies--disabled"):t=!0)})),a.on("click",(function(){t&&e.removeClass("cookies--active")}))}),1e3)}})),c((function(){c("[data-crop-text]").each((function(){var e=c(this),t=e.text();function a(){var a=u.matches?21:18;if(e.text(t),e.height()>3*a){for(var n=t;e.height()>3*a;)n=n.substring(0,n.length-1).trim(),e.text(n);n=n.substring(0,n.length-5).trim()+"...",e.text(n)}}a(),window.addEventListener("resize",(function e(){a(),setTimeout((function(){a(),window.addEventListener("resize",e,{once:!0})}),1e3)}),{once:!0})}))})),c((function(){var e=[".review-card--modal",".button-modal","[data-mdl-open]"].join(", "),t={isActive:c(".mdl").hasClass("mdl--active")};function a(){c(e).on("click",(function t(){c(e).off("click",t),n();var a=c(".mdl").find("[data-mdl-container]")[0];a&&setTimeout((function(){a.scrollTo(0,0)}))}))}function n(){t.isActive||(t.isActive=!0,c(".mdl").addClass("mdl--active"),c(".body").addClass("body--hidden"),setTimeout((function(){!function(){function e(n){console.log("click close");var i=c(n.target),o=i.closest(".mdl__close"),s=i.closest(".mdl__content"),r=i.closest(".file__item");(1===o.length||0===s.length&&0===r.length)&&(c(window).off("click",e),t.isActive=!1,c(".mdl").removeClass("mdl--active"),c(".body").removeClass("body--hidden"),setTimeout((function(){a()}),0))}c(window).on("click",e)}()}),0))}t.isActive||a(),c(e).on("click",(function(e){e.preventDefault()})),window.addEventListener("open-modal",(function(){n()}))}));c((function(){var e=c(".alert");if(0!==e.length){var t=!1,a=e.find(".button-close");c(".body").addClass("body--hidden"),setTimeout((function(){e.addClass("alert--active"),e.on("transitionend",(function(a){a.target===e[0]&&(t?(e.addClass("alert--disabled"),c(".body").removeClass("body--hidden")):t=!0)})),a.on("click",(function(){t&&e.removeClass("alert--active")}))}),1e3)}})),c((function(){var e=c("[data-list]");if(0!==e.length){var t=e.offset().top-10,a=c(".panel__panel").height();c(window).on("scroll load",(function(){var n=this.pageYOffset;if(u.matches)n>t&&(e.addClass("disease-page__container--hidden"),c(".panel__list").addClass("panel__list--scroll")),n+a<t&&(e.removeClass("disease-page__container--hidden"),c(".panel__list").removeClass("panel__list--scroll"));else{var i=c(".nav-page-d--mobile").height();n+i+10>t&&(e.addClass("disease-page__container--hidden"),c(".panel__list").addClass("panel__list--scroll")),n+a+i+10<t&&(e.removeClass("disease-page__container--hidden"),c(".panel__list").removeClass("panel__list--scroll"))}}))}})),c((function(){0!==c(".accordion").length&&window.addEventListener("click",(function(e){var t=c(".accordion"),a=c(e.target);a.closest(".accordion__head").length&&a.closest(t).toggleClass("accordion--active")}))})),c(window).on("load",(function(){if(c(".nav-page-d").length){var e,t=window.matchMedia("(min-width: ".concat(f,"px)"));function a(){e=t.matches?c(".nav-page-d--desktop").find(".nav-page-d__link"):c(".nav-page-d--mobile").find(".nav-page-d__link")}a(),t.addListener(a);var n,i=c(".nav-page-d__item"),o=[],s=null,r=e;function d(){o.length=0,c("[data-section]").each((function(){o.push({top:c(this).offset().top,a:r.filter('[data-scroll="#'+c(this).attr("id")+'"]').closest(".nav-page-d__item")})})),o=o.reverse()}if(d(),c(window).one("resize",(function e(){setTimeout((function(){d(),c(window).one("resize",e)}),1e3/60)})),0!==c(".panel__list").length){var l=c(".panel__list").height()+10;n=c(".panel").height()+l}else n=c(".panel").height()+10;function u(){for(var e=c(window).scrollTop(),t=0;t<o.length;t++)if(o[t].top-n<e+n){s!==t&&(s=t,i.removeClass("nav-page-d__item--active"),o[t].a.addClass("nav-page-d__item--active"));break}o[o.length-1].top-n>e+n&&(i.removeClass("nav-page-d__item--active"),o[o.length-1].a.addClass("nav-page-d__item--active"))}u(),c(window).one("scroll",(function e(){setTimeout((function(){u(),c(window).one("scroll",e)}),1e3/60)})),c("[data-scroll]").on("click",(function(e){e.preventDefault();var t=c(this).data("scroll"),a=c(t).offset().top;c("html, body").animate({scrollTop:a-n},700)}))}})),c((function(){var e=c("[data-form]");0!==e.length&&e.each((function(){var e=c(this).find("[data-form-button]").data("form-button");c(this).on("submit",(function(t){t.preventDefault(),c("[data-form='".concat(e,"']")).attr("data-form-hidden",""),c("[data-response='".concat(e,"']")).attr("data-response-active","")}));var t=c("[data-response]").find("[data-response-button]"),a=c(this).find("[data-form-input]"),n=c(this).find("[data-form-checkbox]");t.on("click",(function(){var e=c(this).data("response-button");c("[data-form='".concat(e,"']")).removeAttr("data-form-hidden"),c("[data-response='".concat(e,"']")).removeAttr("data-response-active"),n.prop("checked",!1),a.val("")}))}))})),c(window).on("load",(function(){var e=c("[data-slider-id]");if(0!==e.length){var t=window.matchMedia("(min-width: ".concat(f,"px)")),a=window.matchMedia("(min-width: ".concat(768,"px)"));e.each((function(){var e,i,o,s=c(this),r=s.find(".swiper-slide"),d=(s.data("slider-id"),s.data("slider-prev")),l=s.data("slider-next"),u=c('[data-slider-button="'.concat(d,'"]')),h=c('[data-slider-button="'.concat(l,'"]')),p={slidesPerView:"auto",spaceBetween:15,loop:!0,breakpoints:(e={},i=f,o={spaceBetween:30},i in e?Object.defineProperty(e,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[i]=o,e)},v=t.matches?3:a.matches?2:1;if(r.length<=v)s.closest("[data-slider-section]").addClass("slider-section-hidden");else{var m=new n.Z(s[0],p);u.on("click",(function(){m.slidePrev()})),h.on("click",(function(){m.slideNext()}))}}))}})),c((function(){if(0!==c(".file").length){var e=c(".file__input"),t=c(".file__container"),a=[];e.on("change",(function(){for(var n=[],i=0;i<e[0].files.length;i++){var o=e[0].files[i];n.push(o),a.push(o)}n.forEach((function(e){var n=c("<div class=file__item><p class=file__name>".concat(e.name,"</p><div class=file__mark></div></div>"));n.data("fileData",e),t.append(n),n.on("click",(function(e){var t=c(e.target).closest(".file__mark"),n=a.indexOf(c(this).data("fileData"));1===t.length&&(c(this).remove(),a.splice(n,1))})),c("[data-response-button]").on("click",(function(){a.length=0,n.remove(),console.log(a)}))}))}))}})),c((function(){new o(".b--reviews-slider-main-page")})),c((function(){var e=c(".js--gel-reviews-slider");if(e.length){var t=new n.Z(e[0],{slidesPerView:"auto",spaceBetween:20,loop:!0}),a=c(".js--gel-reviews-btn--prev"),i=c(".js--gel-reviews-btn--next");a.on("click",(function(){return t.slidePrev()})),i.on("click",(function(){return t.slideNext()}))}})),c((function(){var e=c(".disease-page__spray");if(0!==e.length){var t,a=e.find(".disease-page__content"),n=e.find(".disease-page__spray-button"),i=(e.find(".button-show"),window.matchMedia("(min-width: ".concat(f,"px)"))),o=!1;function s(){t=!!i.matches,r()}function r(){if(t)e.removeClass("disease-page__spray--crop"),a.css("max-height","");else{var n=a.height();o?a.css("max-height",""):(260<n&&(e.addClass("disease-page__spray--crop"),a.css("max-height",260)),n<260&&(e.removeClass("disease-page__spray--crop"),a.css("max-height","")))}}s(),i.addListener(s),c(window).one("resize",(function e(){r(),setTimeout((function(){c(window).one("resize",e)}),1e3/60)})),n.on("click",(function(){c(this).find(".button-show__text").toggleText("подробнее","скрыть"),a.toggleClass("disease-page__content--show"),c(this).toggleClass("disease-page__spray-button--show"),o=!o,r()})),c.fn.extend({toggleText:function(e,t){return this.text(this.text()==t?e:t)}})}}));c((function(){c(".product-slider").each((function(){var e=c(this),t=e.find(".product-slider__slide");i(),c(window).on("load",i),c(window).one("resize",(function e(){setTimeout((function(){i(),c(window).one("resize",e)}),1e3/30)}));var a=e.find(".spray-page__tabs-item");if(a.length>1){var n={cur_index:0,clickable:!0};a.on("click",(function(){if(n.clickable){var e=c(this).closest(".product-slider__btns-item").index();if(e!==n.cur_index){t.toggleClass("product-slider__slide--front");var a=t.eq(e),i=a.find(".product-slider__layout");1===e&&a.addClass("product-slider__slide--right"),a.css("width",0),setTimeout((function(){a.css("width","calc(((100vw - (30px * 2)) / 24) * 18)")})),i.css("transform","scale(1.5)"),setTimeout((function(){i.css("transition","0.5s"),i.css("transform","scale(1)")})),n.cur_index=e,n.clickable=!1,setTimeout((function(){n.clickable=!0,a.css("width",""),i.css("transform",""),i.css("transition","")}),500)}}}))}function i(){var a,n=(a=0,t.each((function(){var e=this.offsetHeight;a=e>a?e:a})),a+"px");t.each((function(){c(this).css("height",n)})),e.css("height",n)}}))})),c((function(){var e=c(".panel");if(0!==e.length){var t={id:null,close:function(){c('[data-modal-id="'.concat(this.id,'"]')).removeAttr("data-modal-active"),c('[data-modal-button="'.concat(this.id,'"]')).removeAttr("data-modal-active")},open:function(){c('[data-modal-id="'.concat(this.id,'"]')).attr("data-modal-active",""),c('[data-modal-button="'.concat(this.id,'"]')).attr("data-modal-active","")},update:function(e){this.id=e},change:function(e){this.close(),this.update(e===this.id?null:e),this.open()}};c("[data-modal-button]").on("click",(function(){var a=c(this).data("modal-button");t.change(a),0!==e.find("[data-modal-active]").length?(e.addClass("panel--modal-active"),c(".body").css("overflow","hidden"),c(".row__col--main").css("z-index","3")):(e.removeClass("panel--modal-active"),c(".body").css("overflow",""),setTimeout((function(){c(".row__col--main").css("z-index","")}),500))}));var a=window.matchMedia("(min-width: ".concat(f,"px)"));c(window).on("click",(function(n){var i;function o(){i=a.matches?0!==c(n.target).closest(".panel__wrapper").length&&0===c(n.target).closest(".panel__test").length||0!==c(n.target).closest("[data-modal-active]").length:0!==c(n.target).closest(".header").length||0!==c(n.target).closest("[data-modal-active]").length||0!==c(n.target).closest(".modal-test").length||0!==c(n.target).closest(".mdl").length}o(),a.addListener(o),i||(t.change(null),c(".body").css("overflow",""),setTimeout((function(){c(".row__col--main").css("position",""),c(".row__col--main").css("z-index","")}),500),e.removeClass("panel--modal-active"))}))}})),c((function(){c(".wave").each((function(){console.log("wave");var e=this,t=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight;var a=[[0,307],[26,318],[57,329],[76,335],[103,342],[126,347],[154,352],[172,355],[201,359],[220,361],[240,362],[265,363],[291,364],[319,363],[344,362],[365,361],[384,359],[404,357],[423,354],[444,351],[465,347],[491,342],[570,321],[626,301],[685,272],[742,233],[790,186],[825,135],[842,93],[847,68],[847,50],[843,34],[834,21],[821,11],[807,5],[789,1],[771,0],[753,1],[727,6],[698,15],[662,30],[611,59],[575,85],[550,107],[518,142],[496,178],[487,205],[484,229],[485,250],[489,270],[499,297],[518,327],[539,351],[571,377],[611,401],[653,419],[695,431],[738,439],[773,442],[817,442],[866,438],[902,433],[942,426],[993,415],[1139,373],[1232,343],[1310,320],[1377,304],[1486,289],[1564,288],[1625,291],[1715,303],[1778,318],[1833,337],[1897,369],[1943,402],[1977,435],[2006,475],[2023,507],[2036,545],[2040,567]];a=a.map((function(e){return[e[0]/2,e[1]/2]})),t.beginPath(),t.moveTo.apply(t,d(a[0]));for(var n=1;n<a.length;n++)t.lineTo.apply(t,d(a[n]));t.strokeStyle="red",t.stroke(),t.closePath(),t.beginPath(),t.moveTo.apply(t,d(a[0]));for(var i=1;i<a.length-2;i++){var o=(a[i][0]+a[i+1][0])/2,s=(a[i][1]+a[i+1][1])/2;t.quadraticCurveTo(a[i][0],a[i][1],o,s),console.log(a[i][0],a[i][1],o,s)}t.quadraticCurveTo(a[i][0],a[i][1],a[i+1][0],a[i+1][1]);var r=t.createLinearGradient(0,0,1e3,1e3);function l(e){for(var t=e[0],a=e[0],n=1;n<e.length;n++)e[n][0]<t[0]&&e[n][1]<t[1]&&(t=e[n]),e[n][0]>a[0]&&e[n][1]>a[1]&&(a=e[n]);return[].concat(d(t),d(a))}r.addColorStop(0,"green"),r.addColorStop(1,"red"),t.strokeStyle=r,t.lineWidth=5,t.stroke(),t.closePath(),requestAnimationFrame((function n(){t.clearRect(0,0,e.width,e.height);var i=a.map((function(e){return[e[0],e[1]+10*Math.sin((e[0]+f%800)/800*Math.PI*2)]}));t.beginPath(),t.moveTo.apply(t,d(i[0]));for(var o=1;o<i.length-2;o++){var s=(i[o][0]+i[o+1][0])/2,r=(i[o][1]+i[o+1][1])/2;t.quadraticCurveTo(i[o][0],i[o][1],s,r)}t.quadraticCurveTo(i[o][0],i[o][1],i[o+1][0],i[o+1][1]);var c=t.createLinearGradient(0,0,l(a)[2],l(a)[3]);c.addColorStop(0,"#31aff2"),c.addColorStop(1,"#5553f0"),t.strokeStyle=c,t.lineWidth=1,t.stroke(),t.closePath(),f+=u,requestAnimationFrame(n)}));var f=0,u=5;c(window).on("mousemove",(function(e){var t=Math.abs(e.originalEvent.movementX),a=Math.abs(e.originalEvent.movementY);u=5+5*((t+a)/2),setTimeout((function(){u=5}),100)}))}))})),c((function(){var e=c(".test");if(0!==e.length){var t={update:function(e,t,a){e.removeClass(a),e.eq(t).addClass(a)},toggleResult:function(e,t,a){!1===a?(e.addClass("test__container--hidden"),t.addClass("test__result--active")):(e.removeClass("test__container--hidden"),t.removeClass("test__result--active"))},responseHandler:function(e){e.find("[data-form]").removeAttr("data-form-hidden"),e.find("[data-response]").removeAttr("data-response-active")}};e.each((function(){var e=this,a=c(this),n=a.find(".test__label"),i=a.find(".test__dot"),o=a.find(".test__question"),s=a.find(".test__index"),r=a.find(".test__container"),d=a.find(".test__result"),l=a.find(".test__form");n.each((function(){c(this).on("click",(function(){var e=c(this).closest(".test__options"),a=e.next();e.removeClass("test__options--active"),a.addClass("test__options--active"),i.eq(a.index()).addClass("test__dot--active"),s.text(a.index()+1),t.update(o,a.index(),"test__question--active"),-1===a.index()&&t.toggleResult(r,d,!1)}))}));var f=l.find(".form"),u=f.find(".form__input"),h=l.find(".test__form-email");f.on("submit",(function(e){e.preventDefault(),h.text(u.val())})),d.find(".test__result-btn").on("click",(function(){t.toggleResult(r,d,!0),t.update(i,0,"test__dot--active"),o.eq(0).addClass("test__question--active"),s.text(1),c(e).find(".test__options").eq(0).addClass("test__options--active"),u.val(""),t.responseHandler(c(e))}))}))}})),c((function(){if(0!==c("[data-hash]").length)if("#product2"===window.location.hash){var e=c('[data-hash="#product2"]').closest(".block__control-item");c(".block__frame").eq(e.index()).addClass("block__frame--front")}else{var t=c('[data-hash="#product1"]').closest(".block__control-item");window.history.replaceState(null,"","#product1"),c(".block__frame").eq(t.index()).addClass("block__frame--front")}})),c((function(){c(".block").each((function(){var e,t=c(this),a=t.find(".spray-page__tabs-item");if(a.length>1){var n="#product1"===window.location.hash?0:1;c(".block__control-item").eq(n).find(".spray-page__tabs-item").addClass("spray-page__tabs-item--active"),console.log(n);var i=!0;e=t.find(".block__frame--front").height(),t.css("height","".concat(e,"px"));var o=t.find(".block__frame");t.find(".block__background");a.on("click",(function(){if(i&&!c(this).hasClass("spray-page__tabs-item--active")){i=!1,a.removeClass("spray-page__tabs-item--active"),c(this).addClass("spray-page__tabs-item--active"),setTimeout((function(){o.removeClass("block__frame--open"),o.removeClass("block__frame--out"),o.removeClass("block__frame--close"),setTimeout((function(){i=!0}))}),500),o.eq(n).addClass("block__frame--close");var e=1-n;n=e;var s=o.eq(e);console.log(e),s.height()>t.find(".block__frame--front").height()?t.css("height","".concat(s.height(),"px")):setTimeout((function(){t.css("height","".concat(s.height(),"px"))}),500),o.toggleClass("block__frame--front"),s.addClass("block__frame--open"),s.addClass("block__frame--out");var r=c(this).data("hash");window.history.replaceState(null,"",r)}}))}getComputedStyle(t[0]).minHeight.slice(0,-2);var s=t.find(".block__slide");function r(){var e,a;e=function(e){s.each((function(t){c(this).css("height","".concat(e[t]))}))},(a=t.clone())[0].style.cssText="\n          position: fixed;\n          top: 0;\n          left: 0;\n          transform: translateY(-100%);\n\n          pointer-events: none;\n\n          opacity: 0;\n        ",c(document.body).append(a),setTimeout((function(){var t=[],n=a.find(".block__slide");n.css("height",""),setTimeout((function(){n.each((function(){t.push(c(this).height())})),a.remove(),e(t)}))}))}r(),c(window).on("load",r),c(window).one("resize",(function e(){setTimeout((function(){r(),c(window).one("resize",e)}),1e3/15)}))}))})),c((function(){c("form").parsley(),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение.",type:{email:"Введите адрес электронной почты.",url:"Введите URL адрес.",number:"Введите число.",integer:"Введите целое число.",digits:"Введите только цифры.",alphanum:"Введите буквенно-цифровое значение."},notblank:"Это поле должно быть заполнено.",required:"Поле заполнено неверно",pattern:"Это значение некорректно.",min:"Это значение должно быть не менее чем %s.",max:"Это значение должно быть не более чем %s.",range:"Это значение должно быть от %s до %s.",minlength:"Это значение должно содержать не менее %s символов.",maxlength:"Это значение должно содержать не более %s символов.",length:"Это значение должно содержать от %s до %s символов.",mincheck:"Выберите не менее %s значений.",maxcheck:"Выберите не более %s значений.",check:"Выберите от %s до %s значений.",equalto:"Это значение должно совпадать."}),Parsley.setLocale("ru")})),c((function(){var e=c("[data-parallax]");0!==e.length&&e.each((function(){var e=c(this),t=e.offset().top,a=e.data("parallax"),n=c("[data-parallax-container='".concat(a,"']"));c(window).on("scroll",(function(){var a=this.pageYOffset;if(a<n.offset().top&&a+c(window).height()/2>t){var i=.1*(a+c(window).height()/2-t);requestAnimationFrame((function(){e.css("transform","translateY(".concat(i,"px)"))}))}}))}))})),c((function(){var e,t=c("[data-parallax-main]");0!==t.length&&(e=navigator.userAgent.toLowerCase().match(/mac/)?c(window).height():c(window).height()/2,t.each((function(){var t=c(this),a=t.offset().top,n=t.data("parallax-main"),i=c("[data-parallax-container-main]");c(window).on("scroll",(function(){var o=this.pageYOffset;if(o<i.offset().top&&o+e>a){var s;switch(n){case"left":s=-.1*(o+e-a);break;case"right":s=.1*(o+e-a)}requestAnimationFrame((function(){t.css("transform","translateX(".concat(s,"px)"))}))}}))})))})),c((function(){var e=c(".my-sticky");if(0!==e.length){var t,a=window.matchMedia("(min-width: ".concat(f,"px)"));function n(){t=!!a.matches}n(),a.addListener(n);var i=c(".disease-page__spray-row");e.height()<i.height()&&c(window).on("scroll resize load",(function(){if(t){var a=c(".panel"),n=i.offset().top,o=this.pageYOffset;o+a.height()>n?e.addClass("my-sticky--fixed"):e.removeClass("my-sticky--fixed"),e.height()+o+a.height()>n+i.height()?e.addClass("my-sticky--bottom"):e.removeClass("my-sticky--bottom")}else e.removeClass("my-sticky--bottom"),e.removeClass("my-sticky--fixed")}))}}));var h=100;c((function(){c(".wwave").each((function(){var e=c(this),t=e.find(".wwave__canvas"),a=t[0].getContext("2d"),n=[[0,307],[26,318],[57,329],[76,335],[103,342],[126,347],[154,352],[172,355],[201,359],[220,361],[240,362],[265,363],[291,364],[319,363],[344,362],[365,361],[384,359],[404,357],[423,354],[444,351],[465,347],[491,342],[570,321],[626,301],[685,272],[742,233],[790,186],[825,135],[842,93],[847,68],[847,50],[843,34],[834,21],[821,11],[807,5],[789,1],[771,0],[753,1],[727,6],[698,15],[662,30],[611,59],[575,85],[550,107],[518,142],[496,178],[487,205],[484,229],[485,250],[489,270],[499,297],[518,327],[539,351],[571,377],[611,401],[653,419],[695,431],[738,439],[773,442],[817,442],[866,438],[902,433],[942,426],[993,415],[1139,373],[1232,343],[1310,320],[1377,304],[1486,289],[1564,288],[1625,291],[1715,303],[1778,318],[1833,337],[1897,369],[1943,402],[1977,435],[2006,475],[2023,507],[2036,545],[2040,567]],i=[],o=n[0][0],s=o,r=n[0][1],d=r;n.forEach((function(e){var t=e[0],a=e[1];t<o?o=t:t>s&&(s=t),a<r?r=a:a>d&&(d=a)}));var l=s-o+1,f=d-r+1,u=f/l;function p(){var a=getComputedStyle(t[0]).width.slice(0,-2);t[0].width=a;var n=getComputedStyle(e[0]).width.slice(0,-2);t[0].height=n*u+200,e.css("height",n*u+"px")}function v(e){a.clearRect(0,0,t[0].width,t[0].height),a.beginPath();var n=t[0].width-200,i=t[0].height-200;function o(e){return h+e*n}function s(e){return h+e*i}a.moveTo(o(e[0][0]),s(e[0][1]));for(var r=1;r<e.length-2;r++){var c=(e[r][0]+e[r+1][0])/2,d=(e[r][1]+e[r+1][1])/2;a.quadraticCurveTo(o(e[r][0]),s(e[r][1]),o(c),s(d))}a.quadraticCurveTo(o(e[r][0]),s(e[r][1]),o(e[r+1][0]),s(e[r+1][1]));var l=a.createLinearGradient(h,0,t[0].width-h,0);l.addColorStop(0,"#31aff2"),l.addColorStop(1,"#5553f0"),a.strokeStyle=l,a.lineWidth=1,a.stroke(),a.closePath()}n.forEach((function(e){var t=[];t[0]=(e[0]-o)/l,t[1]=(e[1]-r)/f,i.push(t)})),p(),c(window).one("resize",(function e(){setTimeout((function(){p(),c(window).one("resize",e)}),200)})),requestAnimationFrame((function(){v(i)})),requestAnimationFrame((function e(){var t=800,a=n.map((function(e){return[e[0],e[1]+10*Math.sin((e[0]+m%t)/t*Math.PI*2)]})),i=[],o=a[0][0],s=o,r=a[0][1],d=r;a.forEach((function(e){var t=e[0],a=e[1];t<o?o=t:t>s&&(s=t),a<r?r=a:a>d&&(d=a)}));var l=s-o+1,f=d-r+1;a.forEach((function(e){var t=[];t[0]=(e[0]-o)/l,t[1]=(e[1]-r)/f,i.push(t)})),v(i);var u=10*Math.sin(m%t/t*Math.PI*2);c(".wwave__star").css("transform","translateY(".concat(u,"px)")),m+=5,requestAnimationFrame(e)}));var m=0}))})),c((function(){var e={before:{active:0},after:{}},t=c(".b--carousel-slider-desktop");if(0!==t.length){var a=t.find(".b--btn-left-right-slider"),n=t.find(".b__col"),i=t.find(".template"),o=i.find(".b__frame"),s=i.find(".b__title");n.each((function(n){var i=c(this),r=i.find(".b__wrapper");r.append(s.eq(n).clone().addClass("b__title--active"));var d=i.find(".b__container");d.append(o.eq(n).clone().addClass("b__frame--active"));var l=0;a.on("click",(function(){var a,f=c(this).data("slider-arrow"),u=d.find(".b__frame--active");function h(e,t){return(t+e)%t}e.before.active=h(n+l,o.length),e.before.left=h(e.before.active-1,o.length),e.before.right=h(e.before.active+1,o.length),"prev"===f?(l--,a=-1,d.prepend(o.eq(e.before.left).clone().addClass("b__frame--left"))):(a=1,l++,d.append(o.eq(e.before.right).clone().addClass("b__frame--right"))),e.after.active=h(e.before.active+a,o.length),t.css("pointer-events","none"),r.append(s.eq(e.after.active).clone());var p=i.find(".b__title"),v=d.find(".b__frame");p.removeClass("b__title--active"),setTimeout((function(){v.removeClass("b__frame--left b__frame--right"),v.eq(u.index()+a).addClass("b__frame--active b__frame--front")})),setTimeout((function(){p.eq(1).addClass("b__title--active"),p.eq(0).remove(),v.eq(u.index()+a).removeClass("b__frame--front"),v.eq(u.index()).remove(),t.css("pointer-events","")}),500)}))}))}})),c((function(){var e=c(".video");0!==e.length&&e.each((function(){var e=c(this).find("#video");c(this).find("#play").on("click",(function(){c(this).fadeOut("500"),e.get(0).play(),e.attr("controls","")}))}))})),c("body").css("overflow","hidden"),c(window).on("load",(function(){c(".main-page").length&&c(".loader").addClass("loader--hidden"),c("body").css("overflow",""),r().init({once:!0,offset:0,duration:1e3})})),c((function(){var e=c(".reviews-tabs");if(0!==e.length){var t=e.find(".spray-page__slider-item"),a=e.find(".reviews-tabs__item"),n=e.find(".border-link");t.on("click",(function(){var e=c(this).find(".border-link");c(this).hasClass("spray-page__slider-item--active")||(t.removeClass("spray-page__slider-item--active"),n.removeClass("border-link--active"),a.removeClass("reviews-tabs__item--active"),c(this).addClass("spray-page__slider-item--active"),e.addClass("border-link--active"),a.eq(c(this).index()).addClass("reviews-tabs__item--active"))}))}})),c((function(){var e=c(".main-page__reviews");if(0!==e.length)e.find(".product-choice__item"),e.find(".main-page__reviews-item"),e.find(".product-btn")})),c((function(){var e=c(".modal-mobile");0!==e.length&&e.find(".modal-mobile__choice-button").on("click",(function(){var e=c(this).closest(".modal-mobile__choice");e.hasClass("modal-mobile__choice--active")?(e.find(".modal-mobile__choice-dropdown").slideUp(500),e.removeClass("modal-mobile__choice--active")):(c(".modal-mobile__choice--active").find(".modal-mobile__choice-dropdown").slideUp(650),c(".modal-mobile__choice--active").removeClass("modal-mobile__choice--active"),e.find(".modal-mobile__choice-dropdown").slideDown(500),e.addClass("modal-mobile__choice--active"))}))}));var p=c(".buy-page__map-iframe");if(p.length){var v=c(".buy-page__map");function m(){if(c(window).innerWidth()<355){var e=p.innerHeight()*(c(window).innerWidth()/354);v.css("height",e+"px")}else v.css("height","")}c(window).on("load",m),c(window).one("resize",(function e(){setTimeout((function(){m(),c(window).one("resize",e)}),1e3/15)}))}},10:function(e,t,a){a.r(t);var n=a(205),i=a(638);i((function(){i(document).on("click","[data-type=option]",(function(e){var t=i(this),a=t.parents("[data-type=container]"),n=t.attr("data-url"),o=t.attr("data-op-end"),s=[];i(this).addClass("checkOption"),"end"==o&&i(".checkOption").each((function(){s.push(i(this).attr("data-voz-diag"))})),"end"==o&&i.ajax({type:"POST",url:n,dataType:"json",data:{vozDiagArr:s},success:function(e){!0===e.success&&(a.find("[data-type=first-part]").html(e.response["first-part"]),e.response["second-part"]?a.find("[data-type=second-part]").html(e.response["second-part"]):a.find("[data-type=second-part-class]").css("display","none"))},error:function(){}})})),i(document).on("submit","[data-type=js-form-test]",(function(e){console.log("form test"),e.preventDefault();var t=i(this),a=t.attr("data-url"),n=[],o=[],s={};t.find("[data-type=get-field]").each((function(){var e=i(this).attr("data-uf"),t=i(this).val();s[e]=t})),i(".checkOption").each((function(){n.push(i(this).attr("data-question")),o.push(i(this).find("[data-type=option_value]").text())})),s.question=n,s.answer=o,s.test_email="Y",console.log(s),i.ajax({type:"POST",url:a,dataType:"json",data:s,success:function(e){i(document).find("[data-type=response-test]").text(e.message)}})})),i(document).on("click","[data-type=show_more_click]",(function(e){var t=i(document).find("[data-type=show_more_click]"),a=t.attr("data-url"),n=[];i("[data-type=reviews-filter]").each((function(){i(this).hasClass("border-link--active")&&(n=JSON.parse(i(this).attr("data-ids")))})),console.log("show more"),a&&(t.remove(),i.ajax({method:"GET",url:a,data:{ajax:1,ids:n}}).done((function(e){var t=i(e).find("[data-type=show_more_click]"),a=i(e).find("[data-type=item]"),n=i(document).find("[data-container=items]");n.append(a),console.log(t),t&&n.after(t)})))})),function(){function e(){var e=[],t=i("[data-type=rev-list]");i("[data-type=reviews-filter]").each((function(){i(this).hasClass("border-link--active")&&(e=JSON.parse(i(this).attr("data-ids")))})),console.log(e),i.ajax({method:"POST",url:window.location.href,data:{ajax:1,ids:e}}).done((function(e){t.html(e),console.log(e)}))}i("[data-type=reviews-filter]").on("click",(function(t){t.preventDefault(),i("[data-type=reviews-filter]").each((function(){i(this).removeClass("border-link--active")})),i(this).toggleClass("border-link--active"),e()}))}(),i(document).on("submit","[data-type=js-form]",(function(e){console.log("form subscribe"),e.preventDefault();var t=i(this),a=t.attr("data-url"),n={};t.find("[data-type=get-field]").each((function(){var e=i(this).attr("data-uf"),t=i(this).val();n[e]=t})),console.log(n),i.ajax({type:"POST",url:a,dataType:"json",data:n,success:function(e){console.log(e),"exist"==e?i(document).find("[data-type=after-subscribe]").text("Данный E-mail уже подписан"):!0===e.success&&i(document).find("[data-type=after-subscribe]").text("Подписка успешно оформлена")}})})),i("form").submit((function(e){e.preventDefault();var t=i(this),a=t.attr("action")?t.attr("action"):"/local/templates/main/include/ajax/forms.php",n=t.parents("[data-type=form-container]"),o=n.find("[data-form]"),s=n.find("[data-type=form-response]"),r=s.find("[data-type=response-message]"),c=!!n.find("[data-type=file]").length&&n.find("[data-type=file]"),d=!c&&"application/x-www-form-urlencoded; charset=UTF-8",l=!c,f=c?new FormData:{};c&&(i.each(c.files,(function(e,t){f.append("file[]",t)})),f.append("file",c[0].files[0])),n.find("[data-type=get-field]").each((function(){var e=i(this).data("field"),t=i(this).val();c?f.append(e,t):f[e]=t})),o.attr("data-form-hidden",!0),s.attr("data-response-active",!0),i.ajax({type:"POST",url:a,dataType:"json",data:f,contentType:d,processData:l,success:function(e){r.text(e.message)},error:function(){r.text("Ошибка")}})})),i(document).on("click","[data-type=search-submit]",(function(){console.log("click");var e=i(this).parents("[data-type=search-container]"),t=e.find("[data-container=items]"),a=e.siblings().filter("[data-type=show_more_click]"),n=e.find("[data-type=search-data]").val();i.ajax({type:"GET",url:window.location.pathname,dataType:"html",data:{searchAjax:!0,searchData:n},success:function(n){t.empty(),a.remove(),t.append(i(n).filter("[data-container=items]").children()),e.after(i(n).filter("[data-type=show_more_click]"))}})})),i(document).on("click","[data-type=filter]",(function(e){e.preventDefault();var t=i(this),a=t.parents("body"),n=a.find("[data-container=items]"),o=a.find("[data-type=show_more_click");a.find("[data-type=filter]").filter(".border-link--active").removeClass("border-link--active"),t.addClass("border-link--active"),i.ajax({type:"GET",url:window.location.pathname,dataType:"html",data:t.data("filter"),success:function(e){n.empty(),o.remove(),n.append(i(e).find("[data-container=items]").children()),n.after(i(e).find("[data-type=show_more_click]"))}})})),i(document).on("click","[data-type=buy-tab]",(function(e){e.preventDefault();var t=i(this).parents("[data-type=buy-container]"),a=i(this).data("id"),n=t.find("[data-type=iframe-container]");t.find("[data-type=buy-tab]").filter(".product-btn--active").removeClass("product-btn--active"),i(this).addClass("product-btn--active"),n.empty(),n.append('<iframe class="buy-page__map-iframe" allow="geolocation" src="https://widget.uteka.ru/widgets/full/?productId='+a+'" data-type="iframe-uteka"></iframe>')})),i(document).on("click","[data-type=cookies-btn-agr]",(function(e){var t=i(this).attr("data-url"),a=i(this).attr("data-cookies");console.log("cookies agr yes"),"spec_yes"==a&&i(document).find("[data-type=alert_block]").removeClass("alert--active"),i.ajax({method:"POST",url:t,data:{cookies:a}}).done((function(e){}))})),i(document).on("click","[data-type=tab-filter]",(function(e){e.preventDefault();var t=i(this),a=t.parents("[data-type=container]"),o=a.find("[data-type=items-container]"),s=a.find("[data-type=tab-filter]"),r=a.find("[data-type=tab-container]");s.toggleClass("product-btn--active"),r.toggleClass("main-page__reviews-item--active"),a.attr("init-slider")||(o.empty(),i.ajax({type:"GET",url:window.location.pathname,dataType:"html",data:t.data("filter"),success:function(e){o.append(i(e));var t=new n.Z(a.find("[data-type=review-slider]")[0],{slidesPerView:"auto",spaceBetween:20,loop:!0});console.log(1),a.find("[data-type=btn-prev]").on("click",(function(){return t.slidePrev()})),a.find("[data-type=btn-next]").on("click",(function(){return t.slideNext()})),a.attr("init-slider",1)}}))})),i(document).on("click","[data-type=clear-test]",(function(e){console.log("clear test "),i(".checkOption").each((function(){i(this).removeClass("checkOption")}))})),i(document).on("click","[data-type=rev-modal]",(function(e){e.preventDefault();var t=i(this).parents("body"),a=i(this).data("modal");t.find("[data-type=rev-modal-name").text(a.name),t.find("[data-type=rev-modal-img").attr("src",a.img),t.find("[data-type=rev-modal-text").html(a.text),t.find("[data-type=rev-modal-post").text(a.position),t.find("[data-type=rev-modal-sub").text(a.title),window.dispatchEvent(new CustomEvent("open-modal"))}))}))}},a={};function n(e){var i=a[e];if(void 0!==i)return i.exports;var o=a[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,a,i,o){if(!a){var s=1/0;for(d=0;d<e.length;d++){a=e[d][0],i=e[d][1],o=e[d][2];for(var r=!0,c=0;c<a.length;c++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(r=!1,o<s&&(s=o));r&&(e.splice(d--,1),t=i())}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,i,o]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={143:0,532:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,s=a[0],r=a[1],c=a[2],d=0;for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(c)var l=c(n);for(t&&t(a);d<s.length;d++)o=s[d],n.o(e,o)&&e[o]&&e[o][0](),e[s[d]]=0;return n.O(l)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var i=n.O(void 0,[512,532],(function(){return n(905)}));i=n.O(i)}();