!function(){var t,e={905:function(t,e,a){"use strict";var n=a(566);function i(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$root=document.querySelector(e),this.$root&&(this.$wrapper=this.$root.querySelector(".b__bottom"),this.$slides=this.$root.querySelectorAll(".b__slide"),this.setActive=this.setActive.bind(this),this.init())}var e,a,n;return e=t,(a=[{key:"init",value:function(){var t=this;this.setActive(this.$slides[0]),this.$root.addEventListener("click",(function(e){var a=e.target.closest(".b--btn-left-right-slider");if(a)switch(a.dataset.commandSliderArrow){case"prev":if(t.$active.previousElementSibling){t.setActive(t.$active.previousElementSibling);break}t.setActive(t.$slides[t.$slides.length-1]);break;case"next":if(t.$active.nextElementSibling){t.setActive(t.$active.nextElementSibling);break}t.setActive(t.$slides[0]);break;default:return}})),this.$root.addEventListener("touchstart",(function(e){t.$root.ontouchmove=function(a){t.$root.ontouchend=function(){return e.touches[0].clientX-a.touches[0].clientX<0&&e.touches[0].clientX-a.touches[0].clientX<-75?(t.$active.previousElementSibling?t.setActive(t.$active.previousElementSibling):t.setActive(t.$slides[t.$slides.length-1]),t.$root.ontouchmove=null,void(t.$root.ontouchend=null)):e.touches[0].clientX-a.touches[0].clientX>0&&e.touches[0].clientX-a.touches[0].clientX>75?(t.$active.nextElementSibling?t.setActive(t.$active.nextElementSibling):t.setActive(t.$slides[0]),t.$root.ontouchmove=null,void(t.$root.ontouchend=null)):void 0}}})),window.addEventListener("resize",(function(){t.setActive(t.$active)}))}},{key:"setActive",value:function(t){var e=this;this.$slides.forEach((function(a,n){a!==t?a.classList.remove("active"):(e.$wrapper.style.pointerEvents="none",setTimeout((function(){a.classList.add("active"),e.$active=a,e.$wrapper.style.transform="translateX(-".concat(e.$wrapper.offsetWidth*n,"px)"),e.$wrapper.style.pointerEvents=""}),500))}))}}])&&i(e.prototype,a),n&&i(e,n),t}(),s=a(354),r=a.n(s),c=(a(563),a(638));function l(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}c((function(){a(10)}));var f=1280,u=matchMedia("(min-width: ".concat(f,"px)"));c((function(){c(".aside__menu").on("click",(function(){c(this).toggleClass("aside__menu--active")}))})),c((function(){var t=c(".panel"),e=c(window).scrollTop();function a(){var a=c(window).scrollTop();Math.abs(e-a)>=1&&(a>e?t.addClass("panel--hidden"):t.removeClass("panel--hidden")),e<1&&t.removeClass("panel--hidden"),e=a}c(window).one("scroll",(function t(){a(),setTimeout((function(){a(),c(window).one("scroll",t)}),1e3/60)}))}));c(window).on("load",(function(){var t=c(".cookies");if(0!==t.length){var e=!1,a=t.find(".cookies__btn");setTimeout((function(){t.addClass("cookies--active"),t.on("transitionend",(function(a){a.target===t[0]&&(e?t.addClass("cookies--disabled"):e=!0)})),a.on("click",(function(){e&&t.removeClass("cookies--active")}))}),1e3)}})),c((function(){var t=c("[data-modal]");0!==t.length&&(window.addEventListener("click",(function(t){c("[data-button]").each((function(){var e=c(this),a=e.data("button");c(t.target).closest(e).length&&(c("[data-modal='".concat(a,"']")).toggleClass("modal--active"),c(".body").toggleClass("body--hidden"))}))})),c(window).on("click",(function(e){e.target==c(".modal--active")[0]&&(t.removeClass("modal--active"),c(".body").removeClass("body--hidden"))})))})),c((function(){c("[data-crop-text]").each((function(){var t=c(this),e=t.text();function a(){var a=u.matches?21:18;if(t.text(e),t.height()>3*a){for(var n=e;t.height()>3*a;)n=n.substring(0,n.length-1).trim(),t.text(n);n=n.substring(0,n.length-5).trim()+"...",t.text(n)}}a(),window.addEventListener("resize",(function t(){a(),setTimeout((function(){a(),window.addEventListener("resize",t,{once:!0})}),1e3)}),{once:!0})}))})),c((function(){var t=[".review-card--modal",".button-modal","[data-mdl-open]"].join(", "),e={isActive:c(".mdl").hasClass("mdl--active")};function a(){c(t).on("click",(function n(){console.log("open click"),c(t).off("click",n),e.isActive=!0,c(".mdl").addClass("mdl--active"),c(".body").addClass("body--hidden"),setTimeout((function(){!function(){function t(n){console.log("click close");var i=c(n.target),o=i.closest(".mdl__close"),s=i.closest(".mdl__content"),r=i.closest(".file__item");(1===o.length||0===s.length&&0===r.length)&&(c(window).off("click",t),e.isActive=!1,c(".mdl").removeClass("mdl--active"),c(".body").removeClass("body--hidden"),setTimeout((function(){a()}),0))}c(window).on("click",t)}()}),0)}))}e.isActive||a(),c(t).on("click",(function(t){t.preventDefault()}))}));c((function(){var t=c(".alert");if(0!==t.length){var e=!1,a=t.find(".button-close");c(".body").addClass("body--hidden"),setTimeout((function(){t.addClass("alert--active"),t.on("transitionend",(function(a){a.target===t[0]&&(e?(t.addClass("alert--disabled"),c(".body").removeClass("body--hidden")):e=!0)})),a.on("click",(function(){e&&t.removeClass("alert--active")}))}),1e3)}})),c((function(){var t=c("[data-list]");if(0!==t.length){var e=t.offset().top-10,a=c(".panel__panel").height();c(window).on("scroll load",(function(){var n=this.pageYOffset;if(u.matches)n>e&&(t.addClass("disease-page__container--hidden"),c(".panel__list").addClass("panel__list--scroll")),n+a<e&&(t.removeClass("disease-page__container--hidden"),c(".panel__list").removeClass("panel__list--scroll"));else{var i=c(".nav-page-d--mobile").height();n+i+10>e&&(t.addClass("disease-page__container--hidden"),c(".panel__list").addClass("panel__list--scroll")),n+a+i+10<e&&(t.removeClass("disease-page__container--hidden"),c(".panel__list").removeClass("panel__list--scroll"))}}))}})),c((function(){0!==c(".accordion").length&&window.addEventListener("click",(function(t){var e=c(".accordion"),a=c(t.target);a.closest(".accordion__head").length&&a.closest(e).toggleClass("accordion--active")}))})),c(window).on("load",(function(){if(c(".nav-page-d").length){var t,e=window.matchMedia("(min-width: ".concat(f,"px)"));function a(){t=e.matches?c(".nav-page-d--desktop").find(".nav-page-d__link"):c(".nav-page-d--mobile").find(".nav-page-d__link")}a(),e.addListener(a);var n,i=c(".nav-page-d__item"),o=[],s=null,r=t;function l(){o.length=0,c("[data-section]").each((function(){o.push({top:c(this).offset().top,a:r.filter('[data-scroll="#'+c(this).attr("id")+'"]').closest(".nav-page-d__item")})})),o=o.reverse()}if(l(),c(window).one("resize",(function t(){setTimeout((function(){l(),c(window).one("resize",t)}),1e3/60)})),0!==c(".panel__list").length){var d=c(".panel__list").height()+10;n=c(".panel").height()+d}else n=c(".panel").height()+10;function u(){for(var t=c(window).scrollTop(),e=0;e<o.length;e++)if(o[e].top-n<t+n){s!==e&&(s=e,i.removeClass("nav-page-d__item--active"),o[e].a.addClass("nav-page-d__item--active"));break}o[o.length-1].top-n>t+n&&(i.removeClass("nav-page-d__item--active"),o[o.length-1].a.addClass("nav-page-d__item--active"))}u(),c(window).one("scroll",(function t(){setTimeout((function(){u(),c(window).one("scroll",t)}),1e3/60)})),c("[data-scroll]").on("click",(function(t){t.preventDefault();var e=c(this).data("scroll"),a=c(e).offset().top;c("html, body").animate({scrollTop:a-n},700)}))}})),c((function(){var t=c("[data-form]");0!==t.length&&(t.each((function(){var t=c(this).find("[data-form-button]").data("form-button");c(this).on("submit",(function(e){e.preventDefault(),c("[data-form='".concat(t,"']")).attr("data-form-hidden",""),c("[data-response='".concat(t,"']")).attr("data-response-active","")}))})),c("[data-response]").find("[data-response-button]").on("click",(function(){var t=c(this).data("response-button");c("[data-form='".concat(t,"']")).removeAttr("data-form-hidden"),c("[data-response='".concat(t,"']")).removeAttr("data-response-active")})))})),c(window).on("load",(function(){var t=c("[data-slider-id]");0!==t.length&&t.each((function(){var t,e,a,i=c(this),o=(i.data("slider-id"),i.data("slider-prev")),s=i.data("slider-next"),r=c('[data-slider-button="'.concat(o,'"]')),l=c('[data-slider-button="'.concat(s,'"]')),d={slidesPerView:"auto",spaceBetween:15,loop:!0,breakpoints:(t={},e=f,a={spaceBetween:30},e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t)},u=new n.Z(i[0],d);r.on("click",(function(){u.slidePrev()})),l.on("click",(function(){u.slideNext()}))}))})),c((function(){if(0!==c(".file").length){var t=c(".file__input"),e=c(".file__container"),a=[];t.on("change",(function(){for(var n=[],i=0;i<t[0].files.length;i++){var o=t[0].files[i];n.push(o),a.push(o)}n.forEach((function(t){var n=c("<div class=file__item><p class=file__name>".concat(t.name,"</p><div class=file__mark></div></div>"));n.data("fileData",t),e.append(n),n.on("click",(function(t){var e=c(t.target).closest(".file__mark"),n=a.indexOf(c(this).data("fileData"));1===e.length&&(c(this).remove(),a.splice(n,1))}))}))}))}})),c((function(){new o(".b--reviews-slider-main-page")})),c((function(){var t=c(".js--gel-reviews-slider");if(t.length){var e=new n.Z(t[0],{slidesPerView:"auto",spaceBetween:20,loop:!0}),a=c(".js--gel-reviews-btn--prev"),i=c(".js--gel-reviews-btn--next");a.on("click",(function(){return e.slidePrev()})),i.on("click",(function(){return e.slideNext()}))}})),c((function(){var t=c(".disease-page__spray");if(0!==t.length){var e,a=t.find(".disease-page__content"),n=t.find(".disease-page__spray-button"),i=(t.find(".button-show"),window.matchMedia("(min-width: ".concat(f,"px)"))),o=!1;function s(){e=!!i.matches,r()}function r(){if(e)t.removeClass("disease-page__spray--crop"),a.css("max-height","");else{var n=a.height();o?a.css("max-height",""):(260<n&&(t.addClass("disease-page__spray--crop"),a.css("max-height",260)),n<260&&(t.removeClass("disease-page__spray--crop"),a.css("max-height","")))}}s(),i.addListener(s),c(window).one("resize",(function t(){r(),setTimeout((function(){c(window).one("resize",t)}),1e3/60)})),n.on("click",(function(){c(this).find(".button-show__text").toggleText("подробнее","скрыть"),a.toggleClass("disease-page__content--show"),c(this).toggleClass("disease-page__spray-button--show"),o=!o,r()})),c.fn.extend({toggleText:function(t,e){return this.text(this.text()==e?t:e)}})}}));c((function(){c(".product-slider").each((function(){var t=c(this),e=t.find(".product-slider__slide");i(),c(window).on("load",i),c(window).one("resize",(function t(){setTimeout((function(){i(),c(window).one("resize",t)}),1e3/30)}));var a=t.find(".spray-page__tabs-item");if(a.length>1){var n={cur_index:0,clickable:!0};a.on("click",(function(){if(n.clickable){var t=c(this).closest(".product-slider__btns-item").index();if(t!==n.cur_index){e.toggleClass("product-slider__slide--front");var a=e.eq(t),i=a.find(".product-slider__layout");1===t&&a.addClass("product-slider__slide--right"),a.css("width",0),setTimeout((function(){a.css("width","calc(((100vw - (30px * 2)) / 24) * 18)")})),i.css("transform","scale(1.5)"),setTimeout((function(){i.css("transition","0.5s"),i.css("transform","scale(1)")})),n.cur_index=t,n.clickable=!1,setTimeout((function(){n.clickable=!0,a.css("width",""),i.css("transform",""),i.css("transition","")}),500)}}}))}function i(){var a,n=(a=0,e.each((function(){var t=this.offsetHeight;a=t>a?t:a})),a+"px");e.each((function(){c(this).css("height",n)})),t.css("height",n)}}))})),c((function(){var t=c(".panel");if(0!==t.length){var e={id:null,close:function(){c('[data-modal-id="'.concat(this.id,'"]')).removeAttr("data-modal-active"),c('[data-modal-button="'.concat(this.id,'"]')).removeAttr("data-modal-active")},open:function(){c('[data-modal-id="'.concat(this.id,'"]')).attr("data-modal-active",""),c('[data-modal-button="'.concat(this.id,'"]')).attr("data-modal-active","")},update:function(t){this.id=t},change:function(t){this.close(),this.update(t===this.id?null:t),this.open()}};c("[data-modal-button]").on("click",(function(){var a=c(this).data("modal-button");e.change(a),0!==t.find("[data-modal-active]").length?(t.addClass("panel--modal-active"),c(".body").css("overflow","hidden"),c(".row__col--main").css("z-index","3")):(t.removeClass("panel--modal-active"),c(".body").css("overflow",""),setTimeout((function(){c(".row__col--main").css("z-index","")}),500))}));var a=window.matchMedia("(min-width: ".concat(f,"px)"));c(window).on("click",(function(n){var i;function o(){i=a.matches?0!==c(n.target).closest(".panel__wrapper").length&&0===c(n.target).closest(".panel__test").length||0!==c(n.target).closest("[data-modal-active]").length:0!==c(n.target).closest(".header").length||0!==c(n.target).closest("[data-modal-active]").length||0!==c(n.target).closest(".modal-test").length||0!==c(n.target).closest(".mdl").length}o(),a.addListener(o),i||(e.change(null),c(".body").css("overflow",""),setTimeout((function(){c(".row__col--main").css("position",""),c(".row__col--main").css("z-index","")}),500),t.removeClass("panel--modal-active"))}))}})),c((function(){c(".wave").each((function(){console.log("wave");var t=this,e=t.getContext("2d");t.width=window.innerWidth,t.height=window.innerHeight;var a=[[0,307],[26,318],[57,329],[76,335],[103,342],[126,347],[154,352],[172,355],[201,359],[220,361],[240,362],[265,363],[291,364],[319,363],[344,362],[365,361],[384,359],[404,357],[423,354],[444,351],[465,347],[491,342],[570,321],[626,301],[685,272],[742,233],[790,186],[825,135],[842,93],[847,68],[847,50],[843,34],[834,21],[821,11],[807,5],[789,1],[771,0],[753,1],[727,6],[698,15],[662,30],[611,59],[575,85],[550,107],[518,142],[496,178],[487,205],[484,229],[485,250],[489,270],[499,297],[518,327],[539,351],[571,377],[611,401],[653,419],[695,431],[738,439],[773,442],[817,442],[866,438],[902,433],[942,426],[993,415],[1139,373],[1232,343],[1310,320],[1377,304],[1486,289],[1564,288],[1625,291],[1715,303],[1778,318],[1833,337],[1897,369],[1943,402],[1977,435],[2006,475],[2023,507],[2036,545],[2040,567]];a=a.map((function(t){return[t[0]/2,t[1]/2]})),e.beginPath(),e.moveTo.apply(e,l(a[0]));for(var n=1;n<a.length;n++)e.lineTo.apply(e,l(a[n]));e.strokeStyle="red",e.stroke(),e.closePath(),e.beginPath(),e.moveTo.apply(e,l(a[0]));for(var i=1;i<a.length-2;i++){var o=(a[i][0]+a[i+1][0])/2,s=(a[i][1]+a[i+1][1])/2;e.quadraticCurveTo(a[i][0],a[i][1],o,s),console.log(a[i][0],a[i][1],o,s)}e.quadraticCurveTo(a[i][0],a[i][1],a[i+1][0],a[i+1][1]);var r=e.createLinearGradient(0,0,1e3,1e3);function d(t){for(var e=t[0],a=t[0],n=1;n<t.length;n++)t[n][0]<e[0]&&t[n][1]<e[1]&&(e=t[n]),t[n][0]>a[0]&&t[n][1]>a[1]&&(a=t[n]);return[].concat(l(e),l(a))}r.addColorStop(0,"green"),r.addColorStop(1,"red"),e.strokeStyle=r,e.lineWidth=5,e.stroke(),e.closePath(),requestAnimationFrame((function n(){e.clearRect(0,0,t.width,t.height);var i=a.map((function(t){return[t[0],t[1]+10*Math.sin((t[0]+f%800)/800*Math.PI*2)]}));e.beginPath(),e.moveTo.apply(e,l(i[0]));for(var o=1;o<i.length-2;o++){var s=(i[o][0]+i[o+1][0])/2,r=(i[o][1]+i[o+1][1])/2;e.quadraticCurveTo(i[o][0],i[o][1],s,r)}e.quadraticCurveTo(i[o][0],i[o][1],i[o+1][0],i[o+1][1]);var c=e.createLinearGradient(0,0,d(a)[2],d(a)[3]);c.addColorStop(0,"#31aff2"),c.addColorStop(1,"#5553f0"),e.strokeStyle=c,e.lineWidth=1,e.stroke(),e.closePath(),f+=u,requestAnimationFrame(n)}));var f=0,u=5;c(window).on("mousemove",(function(t){var e=Math.abs(t.originalEvent.movementX),a=Math.abs(t.originalEvent.movementY);u=5+5*((e+a)/2),setTimeout((function(){u=5}),100)}))}))})),c((function(){var t=c(".test");if(0!==t.length){var e={update:function(t,e,a){t.removeClass(a),t.eq(e).addClass(a)},toggleResult:function(t,e,a){!1===a?(t.addClass("test__container--hidden"),e.addClass("test__result--active")):(t.removeClass("test__container--hidden"),e.removeClass("test__result--active"))},responseHandler:function(t){t.find("[data-form]").removeAttr("data-form-hidden"),t.find("[data-response]").removeAttr("data-response-active")}};t.each((function(){var t=this,a=c(this).find(".test__label"),n=c(this).find(".test__dot"),i=c(this).find(".test__question"),o=c(this).find(".test__index"),s=c(this).find(".test__container"),r=c(this).find(".test__result"),l=c(this).find(".test__form");a.each((function(){c(this).on("click",(function(){var t=c(this).closest(".test__options"),a=t.next();t.removeClass("test__options--active"),a.addClass("test__options--active"),n.eq(a.index()).addClass("test__dot--active"),o.text(a.index()+1),e.update(i,a.index(),"test__question--active"),-1===a.index()&&e.toggleResult(s,r,!1)}))}));var d=l.find(".form"),f=d.find(".form__input"),u=l.find(".test__form-email");d.on("submit",(function(t){t.preventDefault(),u.text(f.val())})),r.find(".test__result-btn").on("click",(function(){e.toggleResult(s,r,!0),e.update(n,0,"test__dot--active"),i.eq(0).addClass("test__question--active"),o.text(1),c(t).find(".test__options").eq(0).addClass("test__options--active"),e.responseHandler(c(t))}))}))}})),c((function(){if(0!==c("[data-hash]").length)if("#product2"===window.location.hash){var t=c('[data-hash="#product2"]').closest(".block__control-item");c(".block__frame").eq(t.index()).addClass("block__frame--front")}else{var e=c('[data-hash="#product1"]').closest(".block__control-item");window.history.replaceState(null,"","#product1"),c(".block__frame").eq(e.index()).addClass("block__frame--front")}})),c((function(){c(".block").each((function(){var t,e=c(this),a=e.find(".spray-page__tabs-item");if(a.length>1){var n="#product1"===window.location.hash?0:1,i=!0;t=e.find(".block__frame--front").height(),e.css("height","".concat(t,"px"));var o=e.find(".block__frame");e.find(".block__background");a.on("click",(function(){if(i&&!c(this).hasClass("spray-page__tabs-item--active")){i=!1,setTimeout((function(){o.removeClass("block__frame--open"),o.removeClass("block__frame--out"),o.removeClass("block__frame--close"),setTimeout((function(){i=!0}))}),500),o.eq(n).addClass("block__frame--close");var t=1-n;n=t;var a=o.eq(t);a.height()>e.find(".block__frame--front").height()?e.css("height","".concat(a.height(),"px")):setTimeout((function(){e.css("height","".concat(a.height(),"px"))}),500),o.toggleClass("block__frame--front"),a.addClass("block__frame--open"),a.addClass("block__frame--out");var s=c(this).data("hash");window.history.replaceState(null,"",s)}}))}getComputedStyle(e[0]).minHeight.slice(0,-2);var s=e.find(".block__slide");function r(){var t,a;t=function(t){s.each((function(e){c(this).css("height","".concat(t[e]))}))},(a=e.clone())[0].style.cssText="\n          position: fixed;\n          top: 0;\n          left: 0;\n          transform: translateY(-100%);\n\n          pointer-events: none;\n\n          opacity: 0;\n        ",c(document.body).append(a),setTimeout((function(){var e=[],n=a.find(".block__slide");n.css("height",""),setTimeout((function(){n.each((function(){e.push(c(this).height())})),a.remove(),t(e)}))}))}r(),c(window).on("load",r),c(window).one("resize",(function t(){setTimeout((function(){r(),c(window).one("resize",t)}),1e3/15)}))}))})),c((function(){c("form").parsley()})),c((function(){var t=c("[data-parallax]");0!==t.length&&t.each((function(){var t=c(this),e=t.offset().top,a=t.data("parallax"),n=c("[data-parallax-container='".concat(a,"']"));c(window).on("scroll",(function(){var a=this.pageYOffset;if(a<n.offset().top&&a+c(window).height()/2>e){var i=.1*(a+c(window).height()/2-e);requestAnimationFrame((function(){t.css("transform","translateY(".concat(i,"px)"))}))}}))}))})),c((function(){var t=c("[data-parallax-main]");0!==t.length&&t.each((function(){var t=c(this),e=t.offset().top,a=t.data("parallax-main"),n=c("[data-parallax-container-main]");c(window).on("scroll",(function(){var i=this.pageYOffset;if(i<n.offset().top&&i+c(window).height()/2>e){var o;switch(a){case"left":o=-.1*(i+c(window).height()/2-e);break;case"right":o=.1*(i+c(window).height()/2-e)}requestAnimationFrame((function(){t.css("transform","translateX(".concat(o,"px)"))}))}}))}))})),c((function(){var t=c(".my-sticky");if(0!==t.length){var e,a=window.matchMedia("(min-width: ".concat(f,"px)"));function n(){e=!!a.matches}n(),a.addListener(n);var i=c(".disease-page__spray-row");t.height()<i.height()&&c(window).on("scroll resize load",(function(){if(e){var a=c(".panel"),n=i.offset().top,o=this.pageYOffset;o+a.height()>n?t.addClass("my-sticky--fixed"):t.removeClass("my-sticky--fixed"),t.height()+o+a.height()>n+i.height()?t.addClass("my-sticky--bottom"):t.removeClass("my-sticky--bottom")}else t.removeClass("my-sticky--bottom"),t.removeClass("my-sticky--fixed")}))}}));var h=100;c((function(){c(".wwave").each((function(){var t=c(this),e=t.find(".wwave__canvas"),a=e[0].getContext("2d"),n=[[0,307],[26,318],[57,329],[76,335],[103,342],[126,347],[154,352],[172,355],[201,359],[220,361],[240,362],[265,363],[291,364],[319,363],[344,362],[365,361],[384,359],[404,357],[423,354],[444,351],[465,347],[491,342],[570,321],[626,301],[685,272],[742,233],[790,186],[825,135],[842,93],[847,68],[847,50],[843,34],[834,21],[821,11],[807,5],[789,1],[771,0],[753,1],[727,6],[698,15],[662,30],[611,59],[575,85],[550,107],[518,142],[496,178],[487,205],[484,229],[485,250],[489,270],[499,297],[518,327],[539,351],[571,377],[611,401],[653,419],[695,431],[738,439],[773,442],[817,442],[866,438],[902,433],[942,426],[993,415],[1139,373],[1232,343],[1310,320],[1377,304],[1486,289],[1564,288],[1625,291],[1715,303],[1778,318],[1833,337],[1897,369],[1943,402],[1977,435],[2006,475],[2023,507],[2036,545],[2040,567]],i=[],o=n[0][0],s=o,r=n[0][1],l=r;n.forEach((function(t){var e=t[0],a=t[1];e<o?o=e:e>s&&(s=e),a<r?r=a:a>l&&(l=a)}));var d=s-o+1,f=l-r+1,u=f/d;function v(){var a=getComputedStyle(e[0]).width.slice(0,-2);e[0].width=a;var n=getComputedStyle(t[0]).width.slice(0,-2);e[0].height=n*u+200,t.css("height",n*u+"px")}function m(t){a.clearRect(0,0,e[0].width,e[0].height),a.beginPath();var n=e[0].width-200,i=e[0].height-200;function o(t){return h+t*n}function s(t){return h+t*i}a.moveTo(o(t[0][0]),s(t[0][1]));for(var r=1;r<t.length-2;r++){var c=(t[r][0]+t[r+1][0])/2,l=(t[r][1]+t[r+1][1])/2;a.quadraticCurveTo(o(t[r][0]),s(t[r][1]),o(c),s(l))}a.quadraticCurveTo(o(t[r][0]),s(t[r][1]),o(t[r+1][0]),s(t[r+1][1]));var d=a.createLinearGradient(h,0,e[0].width-h,0);d.addColorStop(0,"#31aff2"),d.addColorStop(1,"#5553f0"),a.strokeStyle=d,a.lineWidth=1,a.stroke(),a.closePath()}n.forEach((function(t){var e=[];e[0]=(t[0]-o)/d,e[1]=(t[1]-r)/f,i.push(e)})),v(),c(window).one("resize",(function t(){setTimeout((function(){v(),c(window).one("resize",t)}),200)})),requestAnimationFrame((function(){m(i)})),requestAnimationFrame((function t(){var e=800,a=n.map((function(t){return[t[0],t[1]+10*Math.sin((t[0]+p%e)/e*Math.PI*2)]})),i=[],o=a[0][0],s=o,r=a[0][1],l=r;a.forEach((function(t){var e=t[0],a=t[1];e<o?o=e:e>s&&(s=e),a<r?r=a:a>l&&(l=a)}));var d=s-o+1,f=l-r+1;a.forEach((function(t){var e=[];e[0]=(t[0]-o)/d,e[1]=(t[1]-r)/f,i.push(e)})),m(i);var u=10*Math.sin(p%e/e*Math.PI*2);c(".wwave__star").css("transform","translateY(".concat(u,"px)")),p+=5,requestAnimationFrame(t)}));var p=0}))})),c((function(){var t=c(".b--carousel-slider-desktop");if(0!==t.length){var e=t.find(".b--btn-left-right-slider");t.find(".b__col").each((function(){var a=c(this),n=a.find(".b__container"),i=a.find(".b__title");n.each((function(){var a=c(this),n=a.find(".b__frame");e.on("click",(function(){var e,o=c(this).data("slider-arrow"),s=a.find(".b__frame--active");e="prev"===o?-1:1;var r={before:{},after:{}};function l(t,e){return(e+t)%e}r.before.active=s.index(),r.before.left=l(r.before.active-1,n.length),r.before.right=l(r.before.active+1,n.length),r.after.active=l(r.before.active+e,n.length),r.after.left=l(r.after.active-1,n.length),r.after.right=l(r.after.active+1,n.length),n.removeClass("b__frame--left b__frame--right"),i.removeClass("b__title--active"),n.eq(r.after.left).addClass("b__frame--left"),n.eq(r.after.right).addClass("b__frame--right"),n.eq(r.after.active).addClass("b__frame--active b__frame--front"),t.css("pointer-events","none"),setTimeout((function(){i.eq(r.after.active).addClass("b__title--active"),n.eq(r.before.active).removeClass("b__frame--active"),n.eq(r.after.active).removeClass("b__frame--front"),t.css("pointer-events","")}),500)}))}))}))}})),c((function(){var t=c(".video");0!==t.length&&t.each((function(){var t=c(this).find("#video");c(this).find("#play").on("click",(function(){c(this).fadeOut("500"),t.get(0).play(),t.attr("controls","")}))}))})),c("body").css("overflow","hidden"),c(window).on("load",(function(){c(".main-page").length&&c(".loader").addClass("loader--hidden"),c("body").css("overflow",""),r().init({once:!0,offset:0,duration:1e3})})),c((function(){var t=c(".reviews-tabs");if(0!==t.length){var e=t.find(".spray-page__slider-item"),a=t.find(".reviews-tabs__item"),n=t.find(".border-link");e.on("click",(function(){var t=c(this).find(".border-link");c(this).hasClass("spray-page__slider-item--active")||(e.removeClass("spray-page__slider-item--active"),n.removeClass("border-link--active"),a.removeClass("reviews-tabs__item--active"),c(this).addClass("spray-page__slider-item--active"),t.addClass("border-link--active"),a.eq(c(this).index()).addClass("reviews-tabs__item--active"))}))}})),c((function(){var t=c(".main-page__reviews");if(0!==t.length){var e=t.find(".product-choice__item"),a=t.find(".main-page__reviews-item"),i=t.find(".product-btn"),o=!1;e.on("click",(function(){var t=c(this).find(".product-btn");if(c(this).hasClass("product-choice__item--active")||(e.removeClass("product-choice__item--active"),i.removeClass("product-btn--active"),a.removeClass("main-page__reviews-item--active"),c(this).addClass("product-choice__item--active"),t.addClass("product-btn--active"),a.eq(c(this).index()).addClass("main-page__reviews-item--active")),c(this).hasClass("js--slider-init")&&!o){var s=c(".js--main-reviews-slider"),r=new n.Z(s[0],{slidesPerView:"auto",spaceBetween:20,loop:!0});console.log(1);var l=c(".js--gel-reviews-btn--prev"),d=c(".js--gel-reviews-btn--next");l.on("click",(function(){return r.slidePrev()})),d.on("click",(function(){return r.slideNext()})),o=!0}}))}})),c((function(){var t=c(".modal-mobile");0!==t.length&&t.find(".modal-mobile__choice-button").on("click",(function(){var t=c(this).closest(".modal-mobile__choice");t.hasClass("modal-mobile__choice--active")?(t.find(".modal-mobile__choice-dropdown").slideUp(500),t.removeClass("modal-mobile__choice--active")):(c(".modal-mobile__choice--active").find(".modal-mobile__choice-dropdown").slideUp(650),c(".modal-mobile__choice--active").removeClass("modal-mobile__choice--active"),t.find(".modal-mobile__choice-dropdown").slideDown(500),t.addClass("modal-mobile__choice--active"))}))}));var v=c(".buy-page__map-iframe");if(v.length){var m=c(".buy-page__map");function p(){if(c(window).innerWidth()<355){var t=v.innerHeight()*(c(window).innerWidth()/354);m.css("height",t+"px")}else m.css("height","")}c(window).on("load",p),c(window).one("resize",(function t(){setTimeout((function(){p(),c(window).one("resize",t)}),1e3/15)}))}},10:function(t,e,a){var n=a(638);n((function(){n(document).on("click","[data-type=option]",(function(t){var e=n(this),a=e.attr("data-url"),i=e.attr("data-op-end"),o=[],s=[],r=[];console.log("check"),n(this).addClass("checkOption"),"end"==i&&n(".checkOption").each((function(){o.push(n(this).attr("data-voz-diag")),s.push(n(this).attr("data-question")),r.push(n(this).find("[data-type=option_value]").text())})),"end"==i&&n.ajax({method:"POST",url:a,data:{vozDiagArr:o}}).done((function(t){arr=t.split("|"),n(document).find("[data-type=voz_diag_name]").text(arr[0]),n(document).find("[data-type=voz_diag_desc]").text(arr[1])}))})),n(document).on("submit","[data-type=js-form-test]",(function(t){console.log("form test"),t.preventDefault();var e=n(this),a=e.attr("data-url"),i=[],o=[],s={};e.find("[data-type=get-field]").each((function(){var t=n(this).attr("data-uf"),e=n(this).val();s[t]=e})),n(".checkOption").each((function(){i.push(n(this).attr("data-question")),o.push(n(this).find("[data-type=option_value]").text())})),s.question=i,s.answer=o,s.test_email="Y",console.log(s),n.ajax({type:"POST",url:a,dataType:"json",data:s,success:function(t){}})})),n(document).on("click","[data-type=show_more_click]",(function(t){var e=n(this),a=e.attr("data-url"),i=[];n("[data-type=reviews-filter]").each((function(){n(this).hasClass("border-link--active")&&(i=JSON.parse(n(this).attr("data-ids")))})),console.log("show more"),a&&(e.remove(),n.ajax({method:"GET",url:a,data:{ajax:1,ids:i}}).done((function(t){var e=n(t).find("[data-type=show_more_click]"),a=n(t).find("[data-type=item]"),i=n(document).find("[data-container=items]");i.append(a),console.log(e),e&&i.after(e)})))})),function(){function t(){var t=[],e=n("[data-type=rev-list]");n("[data-type=reviews-filter]").each((function(){n(this).hasClass("border-link--active")&&(t=JSON.parse(n(this).attr("data-ids")))})),console.log(t),n.ajax({method:"POST",url:window.location.href,data:{ajax:1,ids:t}}).done((function(t){e.html(t),console.log(t)}))}n("[data-type=reviews-filter]").on("click",(function(e){e.preventDefault(),n("[data-type=reviews-filter]").each((function(){n(this).removeClass("border-link--active")})),n(this).toggleClass("border-link--active"),t()}))}(),n(document).on("click","[data-type=rev-modal]",(function(t){t.preventDefault(),console.log("click revModal");var e=n(this),a=e.attr("data-name"),i=e.attr("data-text"),o=e.attr("data-img"),s=e.attr("data-post"),r=e.attr("data-sub");n(document).find("[data-type=rev-modal-img]").attr("src",o),n(document).find("[data-type=rev-modal-name]").text(a),n(document).find("[data-type=rev-modal-text]").html(i),n(document).find("[data-type=rev-modal-post]").text(s),n(document).find("[data-type=rev-modal-sub]").text(r)})),n(document).on("click","[data-type=spec-alert-no]",(function(t){t.preventDefault();var e=n(this).attr("data-url"),a="yes";console.log("click spec alert no"),n.ajax({method:"POST",url:e,data:{ajax:1,alert:a}}).done((function(t){console.log(n(t)),window.location.href="/"}))})),n(document).on("click","[data-type=spec-alert-yes]",(function(t){t.preventDefault();var e=n(this).attr("data-url"),a="no";console.log("click spec alert yes"),n.ajax({method:"POST",url:e,data:{ajax:1,alert:a}}).done((function(t){console.log(n(t))})),n("[data-type=spec-alert-close]").click()})),n(document).on("submit","[data-type=js-form]",(function(t){console.log("form subscribe"),t.preventDefault();var e=n(this),a=(e.siblings("[data-type=form-response]"),e.attr("data-url")),i={};e.find("[data-type=get-field]").each((function(){var t=n(this).attr("data-uf"),e=n(this).val();i[t]=e})),console.log(i),n.ajax({type:"POST",url:a,dataType:"json",data:i,success:function(t){console.log(t),"exist"==t?n(document).find("[data-type=after-subscribe]").text("Данный E-mail уже подписан"):!0===t.success&&n(document).find("[data-type=after-subscribe]").text("Подписка успешно оформлена")}})})),n(document).on("click","[data-type=submit]",(function(){var t=n(this).parents("[data-type=form-container]"),e="application/x-www-form-urlencoded; charset=UTF-8",a=!0,i={},o=t.find("[data-type=file]").length>0&&t.find("[data-type=file]");o&&(e=!1,a=!1,(i=new FormData).append("file",o[0].files[0])),t.find("[data-type=get-field]").each((function(){var t=n(this).data("field"),e=n(this).val();o?i.append(t,e):i[t]=e})),n.ajax({type:"POST",url:"/local/templates/main/include/ajax/forms.php",dataType:"json",data:i,contentType:e,processData:a,success:function(e){!0===e.success?(t.find("[data-type=request-form-container]").attr("data-form-hidden",!0),t.find("[data-type=form-response]").attr("data-response-active",!0)):console.log(e.errors)}})})),n(document).on("click","[data-type=search-submit]",(function(){console.log("click");var t=n(this).parents("[data-type=search-container]"),e=t.find("[data-container=items]"),a=t.siblings().filter("[data-type=show_more_click]"),i=t.find("[data-type=search-data]").val();n.ajax({type:"GET",url:window.location.pathname,dataType:"html",data:{searchAjax:!0,searchData:i},success:function(i){e.empty(),a.remove(),e.append(n(i).filter("[data-container=items]").children()),t.after(n(i).filter("[data-type=show_more_click]"))}})})),n(document).on("click","[data-type=filter]",(function(t){t.preventDefault();var e=n(this),a=e.parents("body"),i=a.find("[data-container=items]"),o=a.find("[data-type=show_more_click");a.find("[data-type=filter]").filter(".border-link--active").removeClass("border-link--active"),e.addClass("border-link--active"),n.ajax({type:"GET",url:window.location.pathname,dataType:"html",data:e.data("filter"),success:function(t){i.empty(),o.remove(),i.append(n(t).find("[data-container=items]").children()),i.after(n(t).find("[data-type=show_more_click]"))}})})),n(document).on("click","[data-type=buy-tab]",(function(t){t.preventDefault();var e=n(this).parents("[data-type=buy-container]"),a=n(this).data("id"),i=e.find("[data-type=iframe-container]");e.find("[data-type=buy-tab]").filter(".product-btn--active").removeClass("product-btn--active"),n(this).addClass("product-btn--active"),i.empty(),i.append('<iframe class="buy-page__map-iframe" allow="geolocation" src="https://widget.uteka.ru/widgets/full/?productId='+a+'" data-type="iframe-uteka"></iframe>')}))}))}},a={};function n(t){var i=a[t];if(void 0!==i)return i.exports;var o=a[t]={exports:{}};return e[t].call(o.exports,o,o.exports,n),o.exports}n.m=e,t=[],n.O=function(e,a,i,o){if(!a){var s=1/0;for(l=0;l<t.length;l++){a=t[l][0],i=t[l][1],o=t[l][2];for(var r=!0,c=0;c<a.length;c++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(r=!1,o<s&&(s=o));r&&(t.splice(l--,1),e=i())}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[a,i,o]},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={143:0,532:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,o,s=a[0],r=a[1],c=a[2],l=0;for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(c)var d=c(n);for(e&&e(a);l<s.length;l++)o=s[l],n.o(t,o)&&t[o]&&t[o][0](),t[s[l]]=0;return n.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var i=n.O(void 0,[923,532],(function(){return n(905)}));i=n.O(i)}();