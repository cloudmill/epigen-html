import 'Styles/_app.scss'

import Swiper from 'swiper/bundle';
import Slider from 'scripts/slider.js';
import Sticky from 'sticky-js';
import AOS from 'aos';

// vars
const BREAKPOINT = 1280
const BREAKPOINT_MEDIA = matchMedia(`(min-width: ${BREAKPOINT}px)`)



  // nav-page-d
  ; (() => {
    $(() => {
      const components = $('.nav-page-d')

      components.each(function () {
        const component = $(this)

        const state = {
          activeItem: component.find('.nav-page-d__item--active'),

          setActiveItem: item => {
            state.activeItem.removeClass('nav-page-d__item--active')
            state.activeItem = item
            state.activeItem.addClass('nav-page-d__item--active')
          },
        }

        const links = component.find('.nav-page-d__link')

        links.on('click', function (event) {
          event.preventDefault()

          const link = $(this)
          const item = link.closest('.nav-page-d__item')

          state.setActiveItem(item)
        })
      })
    })
  })()

// burger btn
{
  $(() => {
    $('.aside__menu').on('click', function () {
      $(this).toggleClass('aside__menu--active')
    })
  })
}

// panel
{
  $(() => {
    const panels = $('.panel')

    const fps = 60

    let scrollTop = $(window).scrollTop()

    $(window).one('scroll', scroll)

    function scroll() {
      update()

      setTimeout(() => {
        update()

        $(window).one('scroll', scroll)
      }, 1000 / fps)
    }

    function update() {
      const newScrollTop = $(window).scrollTop()

      if (Math.abs(scrollTop - newScrollTop) >= 1) {
        if (newScrollTop > scrollTop) {
          panels.addClass('panel--hidden')
        } else {
          panels.removeClass('panel--hidden')
        }
      }

      scrollTop = newScrollTop
    }
  })
}

// cookies
{
  const DELAY = 1000

  $(() => {
    const component = $('.cookies')

    if (component.length !== 0) {
      let isActive = false

      const btn = component.find('.cookies__btn')

      setTimeout(() => {
        component.addClass('cookies--active')

        component.on('transitionend', event => {
          if (event.target === component[0]) {
            if (isActive) {
              component.addClass('cookies--disabled')
            } else {
              isActive = true
            }
          }
        })

        btn.on('click', () => {
          if (isActive) {
            component.removeClass('cookies--active')
          }
        })
      }, DELAY)
    }
  })
}

// modal
{
  $(() => {
    const modal = $('[data-modal]');

    if (modal.length !== 0) {
      const buttonModal = $('[data-button]');

      buttonModal.each(function () {
        const button = $(this);
        const buttonId = button.data('button');

        button.on('click', function () {
          $(`[data-modal='${buttonId}']`).toggleClass('modal--active');
        });
      });

      $(window).on('click', function (event) {
        const target = event.target;

        if (target == $('.modal--active')[0]) {
          modal.removeClass('modal--active');
        }
      });
    }
  });
}

// crop text
{
  $(() => {
    $('[data-crop-text]').each(function () {
      const text = $(this)

      const originalText = text.text()

      let lineCount = 3

      const lineHeightM = 18
      const lineHeightD = 21


      function getLineHeight() {
        return BREAKPOINT_MEDIA.matches ? lineHeightD : lineHeightM
      }

      function updateTitle() {
        const lineHeight = getLineHeight()

        text.text(originalText)

        if (text.height() > (lineHeight * lineCount)) {
          let newText = originalText

          while (text.height() > (lineHeight * lineCount)) {
            newText = newText.substring(0, newText.length - 1).trim()

            text.text(newText)
          }

          newText = newText.substring(0, newText.length - 5).trim() + '...'
          text.text(newText)
        }
      }

      updateTitle()

      window.addEventListener('resize', handleResize, {
        once: true,
      })

      function handleResize() {
        updateTitle()

        setTimeout(() => {
          updateTitle()

          window.addEventListener('resize', handleResize, {
            once: true,
          })
        }, 1000)
      }
    })
  });
}

// mdl
{
  $(() => {
    const triggers = [
      '.review-card--modal',
      '.button-modal',
      '[data-mdl-open]',
    ].join(', ')

    const state = {
      isActive: checkActive(),
    }

    if (!state.isActive) {
      waitOpen()
    }

    $(triggers).on('click', event => {
      event.preventDefault()
    })

    function checkActive() {
      return $('.mdl').hasClass('mdl--active')
    }

    function waitOpen() {
      $(triggers).on('click', handleClick)

      function handleClick() {
        console.log('open click');

        $(triggers).off('click', handleClick)

        open()
      }
    }

    function open() {
      state.isActive = true;

      $('.mdl').addClass('mdl--active')

      setTimeout(() => {
        waitClose()
      }, 0)
    }

    function waitClose() {
      $(window).on('click', handleClick)

      function handleClick(event) {
        console.log('click close');

        const clickTarget = $(event.target)

        // const mdlClose = $('.mdl__close')[0]
        const mdlClose = clickTarget.closest('.mdl__close')
        // const mdlContent = $('.mdl__content')[0]
        const mdlContent = clickTarget.closest('.mdl__content')

        if (
          mdlClose.length === 1
          || mdlContent.length === 0
        ) {
          $(window).off('click', handleClick)

          close()
        }
      }
    }

    function close() {
      state.isActive = false

      $('.mdl').removeClass('mdl--active')

      setTimeout(() => {
        waitOpen()
      }, 0)
    }
  })
}

// alert specialists page
{
  const DELAY = 1000

  $(() => {
    const alert = $('.alert');

    if (alert.length !== 0) {
      let isActive = false

      const btn = alert.find('.button-close')

      setTimeout(() => {
        alert.addClass('alert--active');

        alert.on('transitionend', event => {
          if (event.target === alert[0]) {
            if (isActive) {
              alert.addClass('alert--disabled')
            } else {
              isActive = true
            }
          }
        })

        btn.on('click', () => {
          if (isActive) {
            alert.removeClass('alert--active')
          }
        })
      }, DELAY)
    }
  });
}

// disease page scroll
{
  $(() => {
    const list = $('[data-list]');

    if (list.length !== 0 && BREAKPOINT_MEDIA.matches) {
      const listOffset = list.offset().top - 10;
      const panelHeight = $('.panel__panel').height();

      $(window).on('scroll', function () {
        const scrollPos = this.pageYOffset;

        if (scrollPos > listOffset) {
          list.addClass('disease-page__container--hidden')
          $('.panel__list').addClass('panel__list--scroll');
        }

        if ((scrollPos + panelHeight) < listOffset) {
          list.removeClass('disease-page__container--hidden')
          $('.panel__list').removeClass('panel__list--scroll')
        }
      });
    }
  })
}

// anchor links
{
  $(() => {
    if ($('.nav-page-d').length !== 0) {

      $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        const elementId = $(this).data('scroll');
        const elementOffset = $(elementId).offset().top;

        let windowOffset;
        const headerHeight = $('.panel').height();

        if ($('.panel__list').length !== 0) {
          const panelHeight = $('.panel__list').height() + 10;

          windowOffset = headerHeight + panelHeight;
        } else {
          windowOffset = headerHeight;
        }

        $('html, body').animate({
          scrollTop: elementOffset - windowOffset,
        }, 700);
      });
    }
  });
}

// accordion
{
  $(() => {

    $('.accordion').each(function () {
      const accordion = $(this);
      const accordionButton = accordion.find('.accordion__head');

      accordionButton.on('click', function () {
        accordion.toggleClass('accordion--active');
      });
    });
  });
}


// nav links
{
  $(() => {
    const nav = $('.nav-page-d')

    if (nav.length !== 0) {

      let navLink;

      if (BREAKPOINT_MEDIA.matches) {
        navLink = nav.find('.nav-page-d__item')
      } else {
        navLink = $('.nav-page-d--mobile').find('.nav-page-d__item')
      }

      $(window).on('scroll', () => {
        const scrollPos = window.scrollY;

        const scrollSection = $('[data-section]');

        scrollSection.each(function (i, el) {
          const elemOffset = el.offsetTop;

          let windowOffset;

          if ($('.panel__list').length !== 0) {
            const panelHeight = $('.panel__list').height() + 10;

            windowOffset = $('.panel').height() + panelHeight;
          } else {
            windowOffset = $('.panel').height() + 10;
          }

          if (elemOffset - windowOffset < scrollPos) {
            navLink.each(function () {
              if ($(this).hasClass('nav-page-d__item--active')) {
                $(this).removeClass('nav-page-d__item--active')
              }
            });

            navLink.eq(i).addClass('nav-page-d__item--active');
          }
        });
      });
    }
  });
}

// form response
{
  $(() => {
    const form = $('[data-form]');

    if (form.length !== 0) {
      const formButton = form.find('[data-form-button]');

      formButton.on('click', function (event) {
        event.preventDefault();

        const formButtonId = $(this).data('form-button');

        $(`[data-form='${formButtonId}']`).attr('data-form-hidden', '');
        $(`[data-response='${formButtonId}']`).attr('data-response-active', '');
      });

      const response = $('[data-response]');
      const responseButton = response.find('[data-response-button]');

      responseButton.on('click', function () {
        const responseButtonId = $(this).data('response-button');

        $(`[data-form='${responseButtonId}']`).removeAttr('data-form-hidden');
        $(`[data-response='${responseButtonId}']`).removeAttr('data-response-active');
      });
    }
  });
}

// spray page tabs
{
  $(() => {
    const tabs = $('[data-tab]');

    if (tabs.length !== 0) {
      tabs.each(function () {
        const tab = $(this);
        const tabId = tab.data('tab');
        const slides = $('[data-slide]');
        const slide = $(`[data-slide='${tabId}']`);

        tab.on('click', function () {

          if (!slide.hasClass('spray-page__slider-slide--active')) {
            removeActive();
            slide.addClass('spray-page__slider-slide--active');
            slide.css('z-index', '1');
            setTimeout(() => {
              slide.css('z-index', '0');
            }, 700)
          }

          function removeActive() {
            setTimeout(() => {
              slides.not(slide).removeClass('spray-page__slider-slide--active');
            }, 500)
          }
        });
      });
    }
  });
}


// slider
{
  $(window).on('load', () => { // ?
    const slider = $('[data-slider-id]');

    if (slider.length !== 0) {
      slider.each(function () {
        const slider_el = $(this);
        const slider_id = slider_el.data('slider-id');
        const slider_prev_id = slider_el.data('slider-prev');
        const slider_next_id = slider_el.data('slider-next');
        const slider_prev = $(`[data-slider-button="${slider_prev_id}"]`);
        const slider_next = $(`[data-slider-button="${slider_next_id}"]`);

        let slider_options = {
          slidesPerView: 'auto',

          spaceBetween: 15,

          breakpoints: {
            [BREAKPOINT]: {
              spaceBetween: 30,
            },
          },
        };

        // switch (slider_id) {
        //   case 1:
        //     slider_options = {
        //       ...slider_options,

        //       breakpoints: {
        //         [BREAKPOINT]: {
        //           spaceBetween: 60,
        //         },
        //       },
        //     }
        //     break;

        // }

        const slider_swiper = new Swiper(slider_el[0], slider_options);

        slider_prev.on('click', () => {
          slider_swiper.slidePrev();
        });
        slider_next.on('click', () => {
          slider_swiper.slideNext();
        });
      });
    }
  });
}

// input file
{
  $(() => {
    if ($('.file').length !== 0) {
      const inputFile = $('.file__input');
      const filesContainer = $('.file__container');
      let files = [];

      inputFile.on('change', function() {
        const newFiles = [];

        for(let index = 0; index < inputFile[0].files.length; index++) {
          const file = inputFile[0].files[index];
          newFiles.push(file);
          files.push(file);
        }

        newFiles.forEach(file => {
          const fileElement = $(
            `<div class=file__item><p class=file__name>${file.name}</p><div class=file__mark></div></div>`
            );
          fileElement.data('fileData', file);
          filesContainer.append(fileElement);

          fileElement.on('click', function(event) {
            const target = $(event.target);
            const fileMark = target.closest('.file__mark')
            const indexToRemove = files.indexOf($(this).data('fileData'));

            if (fileMark.length === 1) {
              $(this).remove();
              files.splice(indexToRemove, 1);
            }
          });
        });
      });
    }
  });
}

// review slider
{
  $(() => {
    const slider = new Slider(".page-consultation__expert-slider");
  })
}

// spray-article text crop
{
  $(() => {
    const section = $('.disease-page__spray');

    if (!BREAKPOINT_MEDIA.matches && section.length !== 0) {
      const height = 260;
      const sectionContent = section.find('.disease-page__content');
      const sectionButton = section.find('.disease-page__spray-button');

      let isClicked = false;

      update();

      function update() {
        const sectionContentHeight = sectionContent.height();

        if (!isClicked) {
          if (height < sectionContentHeight) {
            section.addClass('disease-page__spray--crop');
            sectionContent.css('max-height', height);
          }

          if (sectionContentHeight < height) {
            section.removeClass('disease-page__spray--crop');
            sectionContent.css('max-height', '');
          }
        } else {
          sectionContent.css('max-height', '');
        }
      }

      function resize() {
        update();

        setTimeout(() => {
          $(window).one('resize', resize)
        }, 1000 / 60)
      }

      $(window).one('resize', resize)


      sectionButton.on('click', function() {
        const buttonText = $(this).find('.button-show__text');

        buttonText.toggleText('подробнее', 'скрыть');
        sectionContent.toggleClass('disease-page__content--show');

        (!isClicked) ? isClicked = true : isClicked = false;

        update();
      });

      $.fn.extend({
        toggleText: function(a, b) {
          return this.text(this.text() == b ? a : b);
        }
      });
    }
  });
}

// AOS
{
  $(() => {
    AOS.init({
      once: true, // whether animation should happen only once - while scrolling down
      offset: 0,
      duration: 1000,
    });

    window.addEventListener('scroll', aosRefresh);

    function aosRefresh() {
      const timeout = setTimeout( () => {
        clearTimeout(timeout)
        AOS.refresh();
        window.addEventListener('scroll', aosRefresh);
      },1000);

      window.removeEventListener('scroll', aosRefresh);
    }
  });
}

// sticky
{
  $(() => {
    if ($('.sticky').length !== 0) {
      const sticky = new Sticky('.sticky');

    }
  });
}
