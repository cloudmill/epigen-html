import 'Styles/_app.scss'

import Swiper from 'swiper/bundle';
import Slider from 'scripts/slider.js';
import AOS from 'aos';
import 'parsleyjs';

$(() => {
  require("assets/scripts/backend");
});

// vars
const BREAKPOINT = 1280
const BREAKPOINT_TABLE = 768
const BREAKPOINT_MEDIA = matchMedia(`(min-width: ${BREAKPOINT}px)`)



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

      if (scrollTop < 1) {
        panels.removeClass('panel--hidden')
      }

      scrollTop = newScrollTop
    }
  })
}

// cookies
{
  let DELAY = 1000

  $(window).on('load', () => {
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

      window.addEventListener('click', (e) => {
        const buttonModal = $('[data-button]');

        buttonModal.each(function () {
          const button = $(this);
          const buttonId = button.data('button');

          if ($(e.target).closest(button).length) {
            $(`[data-modal='${buttonId}']`).toggleClass('modal--active');
            $('.body').toggleClass('body--hidden')

            const container = $(`[data-modal='${buttonId}']`).find('[data-mdl-container]')[0]

            if (container) {
              setTimeout(() => {
                container.scrollTo(0, 0)
              });
            }

            if ($('.video-page').length) {
              modal.find('#video')[0].pause()
            }
          }
        });

        const target = e.target;

        if (target == $('.modal--active')[0]) {
          modal.removeClass('modal--active');
          $('.body').removeClass('body--hidden')

          const video = $(target).find('#video')[0]

          if (video) {
            video.pause()
          }
        }
      })
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
// {
//   $(() => {
//     const triggers = [
//       '.review-card--modal',
//       '.button-modal',
//       '[data-mdl-open]',
//     ].join(', ')

//     const state = {
//       isActive: checkActive(),
//     }

//     if (!state.isActive) {
//       waitOpen()
//     }

//     $(triggers).on('click', event => {
//       event.preventDefault()
//     })

//     function checkActive() {
//       return $('.mdl').hasClass('mdl--active')
//     }

//     function waitOpen() {
//       $(triggers).on('click', handleClick)

//       function handleClick() {

//         $(triggers).off('click', handleClick)

//         open()

//         const container = $('.mdl').find('[data-mdl-container]')[0]
//         if (container) {
//           setTimeout(() => {
//             container.scrollTo(0, 0)
//           });
//         }
//       }
//     }

//     function open() {
//       if (!state.isActive) {
//         state.isActive = true;
//         $('.mdl').addClass('mdl--active')
//         $('.body').addClass('body--hidden')

//         setTimeout(() => {
//           waitClose()
//         }, 0)
//       }
//     }

//     window.addEventListener('open-modal', function () {
//       open();
//     });

//     function waitClose() {
//       $(window).on('click', handleClick)

//       function handleClick(event) {
//         console.log('click close');

//         const clickTarget = $(event.target)

//         const mdlClose = clickTarget.closest('.mdl__close')
//         const mdlContent = clickTarget.closest('.mdl__content')
//         const mdlFile = clickTarget.closest('.file__item')

//         if (
//           mdlClose.length === 1
//           || mdlContent.length === 0 && mdlFile.length === 0
//         ) {
//           $(window).off('click', handleClick)

//           close()
//         }
//       }
//     }

//     function close() {
//       state.isActive = false

//       $('.mdl').removeClass('mdl--active')
//       $('.body').removeClass('body--hidden')

//       setTimeout(() => {
//         waitOpen()
//       }, 0)
//     }
//   })
// }

// alert specialists page
{
  const DELAY = 1000

  $(() => {
    const alert = $('.alert');

    if (alert.length !== 0) {
      let isActive = false
      const btn = alert.find('.button-close')

      $('.body').addClass('body--hidden')

      setTimeout(() => {
        alert.addClass('alert--active');

        alert.on('transitionend', event => {
          if (event.target === alert[0]) {
            if (isActive) {
              alert.addClass('alert--disabled')
              $('.body').removeClass('body--hidden')
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

// disease/symptoms fixed list
{
  $(() => {
    const list = $('[data-list]');

    if (list.length !== 0) {
      const item = list.find('.disease-page__list-item').height() + 5
      let isCroped = true
      let isMatches

      const mediaQuery = window.matchMedia(`(min-width: ${BREAKPOINT}px)`)

      function mediaQueryChange() {

        if (mediaQuery.matches) {
          isMatches = true
          const lists = $('.disease-page__list')

          checkHeight()

          function checkHeight() {

            if (item * 2 < lists.height()) {
    
              $('[data-list-button]').addClass('showed')
              lists.css('height', `${item * 2}px`)
            }
          }
        } else {
          isMatches = false
          $('.disease-page__list').css('height', 'auto')
          $('[data-list]').find('.button-show__text').text('???????????????? ??????')
          isCroped = true
        }
      }

      cloneList()
      mediaQueryChange()
      mediaQuery.addListener(mediaQueryChange)

      $(window).on('click', (e) => {
        if (isMatches) {

          const target = $(e.target).closest('[data-list-button]')
          
          if (target.length) {
            const lists = $('.disease-page__list')
            const buttonText = $('[data-list]').find('.button-show__text')

            if (isCroped) {
              lists.css('height', 'auto')
              buttonText.text('????????????')
            } else {
              lists.css('height', `${item * 2}px`)
              buttonText.text('???????????????? ??????')
            }
            isCroped = !isCroped
          }
        }
      })

      function cloneList() {
        const panelList = $('.panel__list')
        const clone = list.clone()

        panelList.append(clone)
      }

      const listOffset = list.offset().top - 10;
      const panelHeight = $('.panel__panel').height();

      $(window).on('scroll load', function () {
        const scrollPos = this.pageYOffset;

        if (BREAKPOINT_MEDIA.matches) {
          if (scrollPos > listOffset) {
            if (!isCroped) {
              isCroped = !isCroped
              $('.disease-page__list').css('height', `${item * 2}px`)
              $('[data-list]').find('.button-show__text').text('???????????????? ??????')
            }
            list.addClass('disease-page__container--hidden')
            $('.panel__list').addClass('panel__list--scroll');
          }

          if ((scrollPos + panelHeight) < listOffset) {
            list.removeClass('disease-page__container--hidden')
            $('.panel__list').removeClass('panel__list--scroll')
          }
        } else {
          const navHeight = $('.nav-page-d--mobile').height()

          if ((scrollPos + navHeight + 10) > listOffset) {
            list.addClass('disease-page__container--hidden')
            $('.panel__list').addClass('panel__list--scroll');
          }

          if ((scrollPos + panelHeight + navHeight + 10) < listOffset) {
            list.removeClass('disease-page__container--hidden')
            $('.panel__list').removeClass('panel__list--scroll')
          }

        }
      });
    }
  })
}

// accordion
{
  $(() => {

    if ($('.accordion').length !== 0) {
      window.addEventListener('click', (e) => {
        const accordion = $('.accordion')
        const target = $(e.target)

        if (target.closest('.accordion__head').length) {

          target.closest(accordion).toggleClass('accordion--active');
        }
      })
    }
  })
}

// nav links
{
  $(window).on('load', () => {
    if ($('.nav-page-d').length) {
      const FPS = 60

      let navLink;

      const mediaQuery = window.matchMedia(`(min-width: ${BREAKPOINT}px)`)

      function mediaQueryChange() {
        if (mediaQuery.matches) {
          // desktop
          navLink = $('.nav-page-d--desktop').find('.nav-page-d__link')
        } else {
          // mobile
          navLink = $('.nav-page-d--mobile').find('.nav-page-d__link')
        }
      }

      mediaQueryChange()
      mediaQuery.addListener(mediaQueryChange)

      const items = $('.nav-page-d__item')

      let positions = [],
        currentActive = null,
        links = navLink;


      // update offset
      upadateOffset()
      $(window).one('resize', handleResize)

      function upadateOffset() {
        positions.length = 0
        $('[data-section]').each(function () {
          positions.push({
            top: $(this).offset().top,
            a: links.filter('[data-scroll="#' + $(this).attr('id') + '"]').closest('.nav-page-d__item')
          });
        });

        positions = positions.reverse();
      }

      function handleResize() {
        setTimeout(() => {
          upadateOffset()

          $(window).one('resize', handleResize)
        }, 1000 / FPS);
      }

      // header offset + panel list(disease page)
      let windowOffset

      if ($('.panel__list').length !== 0) {
        const panelHeight = $('.panel__list').height() + 10;

        windowOffset = $('.panel').height() + panelHeight;
      } else {
        windowOffset = $('.panel').height() + 10;
      }

      // scroll active change
      updateActive()
      $(window).one('scroll', scrollHandler)

      function updateActive() {
        const winTop = $(window).scrollTop()

        for (let i = 0; i < positions.length; i++) {
          if (positions[i].top - windowOffset < winTop + windowOffset) {
            if (currentActive !== i) {
              currentActive = i;
              items.removeClass('nav-page-d__item--active');
              positions[i].a.addClass('nav-page-d__item--active');
            }
            break;
          }
        }

        if (positions[positions.length - 1].top - windowOffset > winTop + windowOffset) {
          items.removeClass('nav-page-d__item--active');
          positions[positions.length - 1].a.addClass('nav-page-d__item--active')
        }
      }

      function scrollHandler() {
        setTimeout(() => {
          updateActive()

          $(window).one('scroll', scrollHandler)
        }, 1000 / FPS);
      }

      // anchor scroll
      $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        const elementId = $(this).data('scroll');
        const elementOffset = $(elementId).offset().top;

        $('html, body').animate({
          scrollTop: elementOffset - windowOffset
        }, 700);
      })
    }
  })
}

// form response
{
  $(() => {
    const form = $('[data-form]');

    if (form.length !== 0) {

      form.each(function () {
        const formButton = $(this).find('[data-form-button]');
        const formButtonId = formButton.data('form-button');

        $(this).on('submit', (e) => {
          e.preventDefault()

          $(`[data-form='${formButtonId}']`).attr('data-form-hidden', '');
          $(`[data-response='${formButtonId}']`).attr('data-response-active', '');
        })

        const response = $('[data-response]');
        const responseButton = response.find('[data-response-button]');
        const formInput = $(this).find('[data-form-input]')
        const formCheckbox = $(this).find('[data-form-checkbox]')

        responseButton.on('click', function () {
          const responseButtonId = $(this).data('response-button');

          $(`[data-form='${responseButtonId}']`).removeAttr('data-form-hidden');
          $(`[data-response='${responseButtonId}']`).removeAttr('data-response-active');
          formCheckbox.prop('checked', false)
          formInput.val('')
        });
      })
    }
  });
}

// slider
{
  $(window).on('load', () => { // ?
    const slider = $('[data-slider-id]');

    if (slider.length !== 0) {
      const mediaQuery = window.matchMedia(`(min-width: ${BREAKPOINT}px)`);
      const mediaQueryTable = window.matchMedia(`(min-width: ${BREAKPOINT_TABLE}px)`);

      slider.each(function () {
        const slider_el = $(this);
        const slider_slides = slider_el.find('.swiper-slide');
        const slider_id = slider_el.data('slider-id');
        const slider_prev_id = slider_el.data('slider-prev');
        const slider_next_id = slider_el.data('slider-next');
        const slider_prev = $(`[data-slider-button="${slider_prev_id}"]`);
        const slider_next = $(`[data-slider-button="${slider_next_id}"]`);

        let slider_options = {
          slidesPerView: 'auto',

          spaceBetween: 15,
          loop: true,

          breakpoints: {
            [BREAKPOINT]: {
              spaceBetween: 30,
            },
          },
        };

        let slidesMaxLength = (mediaQuery.matches) ? 3 : (mediaQueryTable.matches) ? 2 : 1;

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

        if (slider_slides.length <= slidesMaxLength) {
          slider_el.closest('[data-slider-section]').addClass('slider-section-hidden')
        } else {
          const slider_swiper = new Swiper(slider_el[0], slider_options);

          slider_prev.on('click', () => {
            slider_swiper.slidePrev();
          });
          slider_next.on('click', () => {
            slider_swiper.slideNext();
          });
        }
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

      inputFile.on('change', function () {
        const newFiles = [];

        for (let index = 0; index < inputFile[0].files.length; index++) {
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

          fileElement.on('click', function (event) {
            const target = $(event.target);
            const fileMark = target.closest('.file__mark')
            const indexToRemove = files.indexOf($(this).data('fileData'));

            if (fileMark.length === 1) {
              $(this).remove();
              files.splice(indexToRemove, 1);
            }
          });

          $('[data-response-button]').on('click', function () {
            files.length = 0
            fileElement.remove()
            console.log(files);
          })
        });
      });
    }
  });
}

// review slider
{
  $(() => {
    // const slider = new Slider(".page-consultation__expert-slider");
    const slider = new Slider(".b--reviews-slider-main-page");
  })
}

// gel reviews slider
{
  $(() => {
    const swiperContainer = $('.js--gel-reviews-slider')

    if (swiperContainer.length) {
      const swiper = new Swiper(swiperContainer[0], {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
      })

      const btnPrev = $('.js--gel-reviews-btn--prev')
      const btnNext = $('.js--gel-reviews-btn--next')

      btnPrev.on('click', () => swiper.slidePrev())
      btnNext.on('click', () => swiper.slideNext())
    }
  })
}

// spray-article text crop
{
  $(() => {
    const section = $('.disease-page__spray');

    if (section.length !== 0) {
      const height = 260;
      const sectionContent = section.find('.disease-page__content');
      const sectionButton = section.find('.disease-page__spray-button');
      const btn = section.find('.button-show')

      const mediaQuery = window.matchMedia(`(min-width: ${BREAKPOINT}px)`);
      let isClicked = false;
      let isMatches

      function mediaQueryChange() {
        (mediaQuery.matches) ? isMatches = true : isMatches = false
        update();
      }
      mediaQueryChange();
      mediaQuery.addListener(mediaQueryChange);

      function update() {
        if (!isMatches) {
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
        } else {
          section.removeClass('disease-page__spray--crop');
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

      sectionButton.on('click', function () {
        const buttonText = $(this).find('.button-show__text');

        buttonText.toggleText('??????????????????', '????????????');
        sectionContent.toggleClass('disease-page__content--show');
        $(this).toggleClass('disease-page__spray-button--show');

        (!isClicked) ? isClicked = true : isClicked = false;

        update();
      });

      $.fn.extend({
        toggleText: function (a, b) {
          return this.text(this.text() == b ? a : b);
        }
      });
    }
  });
}

// product slider
{
  const FPS = 30
  const DURATION = 500

  $(() => {
    const sliders = $('.product-slider')

    sliders.each(function () {
      const slider = $(this)
      const slides = slider.find('.product-slider__slide')

      updateSliderHeight()
      $(window).on('load', updateSliderHeight)
      $(window).one('resize', handleWindowResize)

      const btns = slider.find('.spray-page__tabs-item')

      if (btns.length > 1) {
        const state = {
          cur_index: 0,
          clickable: true,
        }

        btns.on('click', function () {
          if (state.clickable) {
            const new_index = $(this).closest('.product-slider__btns-item').index()

            if (new_index !== state.cur_index) {
              slides.toggleClass('product-slider__slide--front')

              const newSlide = slides.eq(new_index)
              const layout = newSlide.find('.product-slider__layout')

              if (new_index === 1) {
                newSlide.addClass('product-slider__slide--right')
              }

              newSlide.css('width', 0)
              setTimeout(() => {
                newSlide.css('width', 'calc(((100vw - (30px * 2)) / 24) * 18)')
              })

              layout.css('transform', `scale(1.5)`)
              setTimeout(() => {
                layout.css('transition', '0.5s')
                layout.css('transform', `scale(1)`)
              })

              state.cur_index = new_index
              state.clickable = false

              setTimeout(() => {
                state.clickable = true
                newSlide.css('width', '')
                layout.css('transform', '')
                layout.css('transition', '')
              }, DURATION)
            }
          }
        })
      }

      function getSlideMaxHeight() {
        let maxHeight = 0

        slides.each(function () {
          const currentHeight = this.offsetHeight

          maxHeight = currentHeight > maxHeight ? currentHeight : maxHeight
        })

        return maxHeight
      }
      function updateSliderHeight() {
        const maxSlidesHeight = getSlideMaxHeight() + 'px'

        slides.each(function () {
          $(this).css('height', maxSlidesHeight)
        })

        slider.css('height', maxSlidesHeight)
      }
      function handleWindowResize() {
        setTimeout(() => {
          updateSliderHeight()

          $(window).one('resize', handleWindowResize)
        }, 1000 / FPS)
      }
    })
  })
}

// header-modal
{
  $(() => {
    const panel = $('.panel');

    if (panel.length !== 0) {
      // modal
      {
        const state = {
          id: null,
          close: function () {
            $(`[data-modal-id="${this.id}"]`).removeAttr('data-modal-active');
            $(`[data-modal-button="${this.id}"]`).removeAttr('data-modal-active');
          },
          open: function () {
            $(`[data-modal-id="${this.id}"]`).attr('data-modal-active', '');
            $(`[data-modal-button="${this.id}"]`).attr('data-modal-active', '');
          },
          update: function (id) {
            this.id = id;
          },
          change: function (id) {
            this.close();
            this.update(id === this.id ? null : id);
            this.open();
          }
        };

        const delay = 500;

        const btn = $('[data-modal-button]');
        btn.on('click', function () {
          const id = $(this).data('modal-button');
          state.change(id);

          const modalActive = panel.find('[data-modal-active]');
          if (modalActive.length !== 0) {
            panel.addClass('panel--modal-active')
            $('.body').css('overflow', 'hidden')
            $('html').css('overflow', 'hidden')
            $('.row__col--main').css('z-index', '3')
          } else {
            panel.removeClass('panel--modal-active')
            $('html').css('overflow', '')
            $('.body').css('overflow', '')

            setTimeout(() => {
              $('.row__col--main').css('z-index', '')
            }, delay)
          }
        });

        const mediaQuery = window.matchMedia(`(min-width: ${BREAKPOINT}px)`);

        $(window).on('click', event => {

          // const isClickArea = (
          //   // ????-???? panel
          //   $(event.target).closest('.panel__wrapper').length !== 0
          //   && $(event.target).closest('.panel__test').length === 0
          //   // ?????????????????? ????????
          //   || $(event.target).closest('[data-modal-active]').length !== 0
          // );
          let isClickArea

          function mediaQueryChange() {
            if (mediaQuery.matches) {
              isClickArea = (
                // ????-???? panel
                $(event.target).closest('.panel__wrapper').length !== 0
                && $(event.target).closest('.panel__test').length === 0
                // ?????????????????? ????????
                || $(event.target).closest('[data-modal-active]').length !== 0
              );
            } else {
              isClickArea = (
                // ????-???? panel
                $(event.target).closest('.header').length !== 0
                // ?????????????????? ????????
                || $(event.target).closest('[data-modal-active]').length !== 0
                // ?????????????? ???????????? ????????
                || $(event.target).closest('.modal-test').length !== 0
                || $(event.target).closest('.mdl').length !== 0
              );
            }
          }
          mediaQueryChange();
          mediaQuery.addListener(mediaQueryChange);

          if (!isClickArea) {
            state.change(null);
            $('.body').css('overflow', '')
            $('html').css('overflow', '')

            setTimeout(() => {
              $('.row__col--main').css('position', '')
              $('.row__col--main').css('z-index', '')
            }, delay)

            panel.removeClass('panel--modal-active')
          }
        });
      }
    }
  });
}

// wave
{
  $(() => {
    $('.wave').each(function () {
      console.log('wave')

      const canvas = this
      const ctx = canvas.getContext('2d')

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      let points = [
        [0, 307],
        [26, 318],
        [57, 329],
        [76, 335],
        [103, 342],
        [126, 347],
        [154, 352],
        [172, 355],
        [201, 359],
        [220, 361],
        [240, 362],
        [265, 363],
        [291, 364],
        [319, 363],
        [344, 362],
        [365, 361],
        [384, 359],
        [404, 357],
        [423, 354],
        [444, 351],
        [465, 347],
        [491, 342],
        [570, 321],
        [626, 301],
        [685, 272],
        [742, 233],
        [790, 186],
        [825, 135],
        [842, 93],
        [847, 68],
        [847, 50],
        [843, 34],
        [834, 21],
        [821, 11],
        [807, 5],
        [789, 1],
        [771, 0],
        [753, 1],
        [727, 6],
        [698, 15],
        [662, 30],
        [611, 59],
        [575, 85],
        [550, 107],
        [518, 142],
        [496, 178],
        [487, 205],
        [484, 229],
        [485, 250],
        [489, 270],
        [499, 297],
        [518, 327],
        [539, 351],
        [571, 377],
        [611, 401],
        [653, 419],
        [695, 431],
        [738, 439],
        [773, 442],
        [817, 442],
        [866, 438],
        [902, 433],
        [942, 426],
        [993, 415],
        [1139, 373],
        [1232, 343],
        [1310, 320],
        [1377, 304],
        [1486, 289],
        [1564, 288],
        [1625, 291],
        [1715, 303],
        [1778, 318],
        [1833, 337],
        [1897, 369],
        [1943, 402],
        [1977, 435],
        [2006, 475],
        [2023, 507],
        [2036, 545],
        [2040, 567],
      ]



      points = points.map(item => [item[0] / 2, item[1] / 2])

      // 1
      ctx.beginPath()

      ctx.moveTo(...points[0])

      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(...points[i])
      }

      ctx.strokeStyle = 'red'
      ctx.stroke()

      ctx.closePath()

      // 2
      ctx.beginPath()

      ctx.moveTo(...points[0])

      for (var i = 1; i < points.length - 2; i++) {
        const xc = (points[i][0] + points[i + 1][0]) / 2;
        const yc = (points[i][1] + points[i + 1][1]) / 2;
        ctx.quadraticCurveTo(points[i][0], points[i][1], xc, yc);

        console.log(points[i][0], points[i][1], xc, yc);
      }

      ctx.quadraticCurveTo(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1])

      const gradient = ctx.createLinearGradient(0, 0, 1000, 1000)
      gradient.addColorStop(0, 'green')
      gradient.addColorStop(1, 'red')

      ctx.strokeStyle = gradient
      ctx.lineWidth = 5
      ctx.stroke()

      ctx.closePath()

      function getRect(points) {
        let tl = points[0]
        let br = points[0]

        for (let i = 1; i < points.length; i++) {
          if (points[i][0] < tl[0] && points[i][1] < tl[1]) {
            tl = points[i]
          }
          if (points[i][0] > br[0] && points[i][1] > br[1]) {
            br = points[i]
          }
        }

        return [...tl, ...br]
      }

      // 3
      requestAnimationFrame(render)

      let progress = 0
      const PROGRESS_DELTA = 5
      const PROGRESS_DELTA_X = 1
      let progress_delta = PROGRESS_DELTA

      $(window).on('mousemove', event => {
        const delta_x = Math.abs(event.originalEvent.movementX)
        const delta_y = Math.abs(event.originalEvent.movementY)

        const delta = (delta_x + delta_y) / 2

        progress_delta = PROGRESS_DELTA + PROGRESS_DELTA * PROGRESS_DELTA_X * delta

        setTimeout(() => {
          progress_delta = PROGRESS_DELTA
        }, 100)
      })

      function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const DIST = 800

        const points_cur = points.map(item => [item[0], item[1] + 10 * Math.sin(((item[0] + progress % DIST) / DIST) * Math.PI * 2)])

        ctx.beginPath()

        ctx.moveTo(...points_cur[0])

        for (var i = 1; i < points_cur.length - 2; i++) {
          const xc = (points_cur[i][0] + points_cur[i + 1][0]) / 2;
          const yc = (points_cur[i][1] + points_cur[i + 1][1]) / 2;
          ctx.quadraticCurveTo(points_cur[i][0], points_cur[i][1], xc, yc);
        }

        ctx.quadraticCurveTo(points_cur[i][0], points_cur[i][1], points_cur[i + 1][0], points_cur[i + 1][1])

        const gradient = ctx.createLinearGradient(0, 0, getRect(points)[2], getRect(points)[3])
        gradient.addColorStop(0, '#31aff2')
        gradient.addColorStop(1, '#5553f0')

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.stroke()

        ctx.closePath()

        progress += progress_delta

        requestAnimationFrame(render)
      }
    })
  })
}

// test
{
  $(() => {
    const test = $('.test');

    if (test.length !== 0) {

      const state = {
        update: function (selector, id, name) {
          selector.removeClass(name)
          selector.eq(id).addClass(name)
        },
        toggleResult: function (container, result, isResult) {
          if (isResult === false) {
            container.addClass('test__container--hidden')
            result.addClass('test__result--active')
          } else {
            container.removeClass('test__container--hidden')
            result.removeClass('test__result--active')
          }
        },
        responseHandler: function (selector) {
          selector.find('[data-form]').removeAttr('data-form-hidden')
          selector.find('[data-response]').removeAttr('data-response-active')
        }
      }

      test.each(function () {
        const ths = $(this)
        const testStep = ths.find('.test__label')
        const dot = ths.find('.test__dot')
        const question = ths.find('.test__question')
        const index = ths.find('.test__index')

        const testContainer = ths.find('.test__container')
        const testResult = ths.find('.test__result')
        const result = ths.find('.test__form')
        // const results = ths.find('.test__result-results')
        // const resultFirst = ths.find('.test__result-first')
        // const resultSecond = ths.find('.test__result-second')
        // const combination = []

        // function resultFirstMessage() {
        //   const root = combination.slice(0, 1).join('')
        //   const resultsMessage = results.find('.test__result-text')

        //   const clone = resultsMessage.eq(root - 1).clone()

        //   resultFirst.append(clone)
        // }

        // function resultSecondMessage() {
        //   const root = combination.slice(0, 2).join('')
        //   const resultMessage = ths.find(`[data-result*="${root}"]`)
        //   const clone = resultMessage.clone()

        //   resultSecond.append(clone)
        // }

        // options change
        testStep.each(function () {

          $(this).on('click', function () {
            const step = $(this).closest('.test__options')
            const stepNext = step.next()

            // combination.push($(this).index() + 1)

            step.removeClass('test__options--active')
            stepNext.addClass('test__options--active')

            dot.eq(stepNext.index()).addClass('test__dot--active')
            index.text(stepNext.index() + 1)
            state.update(question, stepNext.index(), 'test__question--active')

            if (stepNext.index() === -1) {
              state.toggleResult(testContainer, testResult, false)
              // resultSecondMessage()
              // resultFirstMessage()
            }
          });
        })

        // result response
        const form = result.find('.form')
        const formInput = form.find('.form__input')
        const resultEmail = result.find('.test__form-email')

        form.on('submit', function (event) {
          event.preventDefault()

          resultEmail.text(formInput.val())
        })

        // test again
        testResult.find('.test__result-btn').on('click', () => {
          state.toggleResult(testContainer, testResult, true)
          state.update(dot, 0, 'test__dot--active')

          // resultFirst.html('')
          // resultSecond.html('')
          // combination.length = 0

          question.eq(0).addClass('test__question--active')
          index.text(1)
          $(this).find('.test__options').eq(0).addClass('test__options--active')
          formInput.val('')
          state.responseHandler($(this))
        })
      })
    }
  });
}

// spray slider hash change
{
  $(() => {
    const buttons = $('[data-hash]')

    if (buttons.length !== 0) {
      if (window.location.hash === '#product2') {
        let product = $('[data-hash="#product2"]')
        let item = product.closest('.block__control-item')

        $('.block__frame').eq(item.index()).addClass('block__frame--front')
      } else {
        let product = $('[data-hash="#product1"]')
        let item = product.closest('.block__control-item')

        window.history.replaceState(null, '', '#product1')
        $('.block__frame').eq(item.index()).addClass('block__frame--front')
      }
    }
  })
}

// block
{
  $(() => {
    const blocks = $('.block')

    blocks.each(function () {
      const block = $(this)

      // control
      const DURATION = 500

      const btn = block.find('.spray-page__tabs-item')

      if (btn.length > 1) {
        // let cur_index = 0
        let cur_index = window.location.hash === '#product1' ? 0 : 1

        $('.block__control-item').eq(cur_index).find('.spray-page__tabs-item').addClass('spray-page__tabs-item--active')

        console.log(cur_index);
        let clickable = true

        updateBlock()

        function updateBlock() {
          const activeFrame = block.find('.block__frame--front').height()

          block.css('height', `${activeFrame}px`)
        }

        const frame = block.find('.block__frame')
        const background = block.find('.block__background')

        btn.on('click', function () {
          if (clickable) {
            if (!$(this).hasClass('spray-page__tabs-item--active')) {
              clickable = false
              btn.removeClass('spray-page__tabs-item--active')
              $(this).addClass('spray-page__tabs-item--active')

              setTimeout(() => {
                frame.removeClass('block__frame--open')
                frame.removeClass('block__frame--out')
                frame.removeClass('block__frame--close')

                setTimeout(() => {
                  clickable = true
                })
              }, DURATION)

              frame.eq(cur_index).addClass('block__frame--close')

              const new_index = 1 - cur_index
              cur_index = new_index

              const newFrame = frame.eq(new_index)
              console.log(new_index);

              if (newFrame.height() > block.find('.block__frame--front').height()) {
                block.css('height', `${newFrame.height()}px`)
              } else {
                setTimeout(() => {
                  block.css('height', `${newFrame.height()}px`)
                }, DURATION)
              }

              frame.toggleClass('block__frame--front')
              newFrame.addClass('block__frame--open')
              newFrame.addClass('block__frame--out')

              // hash
              const hash = $(this).data('hash')

              window.history.replaceState(null, '', hash)
            }
          }
        })
      }

      // height
      const FPS = 15
      const MIN_HEIGHT = getComputedStyle(block[0]).minHeight.slice(0, -2)

      const slide = block.find('.block__slide')

      updateHeight()
      $(window).on('load', updateHeight)
      $(window).one('resize', handleResize)

      function getMaxHeight(callback) {
        const blockClone = block.clone()

        blockClone[0].style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          transform: translateY(-100%);

          pointer-events: none;

          opacity: 0;
        `

        $(document.body).append(blockClone)

        setTimeout(() => {
          let maxHeight = 0
          let minHeight = null

          const slideClone = blockClone.find('.block__slide')

          slideClone.css('height', '')

          setTimeout(() => {
            slideClone.each(function () {
              if (this.offsetHeight > maxHeight) {
                maxHeight = this.offsetHeight
              }
              if (minHeight === null || this.offsetHeight < minHeight) {
                minHeight = this.offsetHeight
              }
            })

            blockClone.remove()

            maxHeight = Math.max(maxHeight, MIN_HEIGHT)

            callback(maxHeight)
          })
        })
      }
      function getHeight(callback) {
        const blockClone = block.clone()

        blockClone[0].style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          transform: translateY(-100%);

          pointer-events: none;

          opacity: 0;
        `

        $(document.body).append(blockClone)

        setTimeout(() => {
          const arr = []

          const slideClone = blockClone.find('.block__slide')

          slideClone.css('height', '')

          setTimeout(() => {
            slideClone.each(function () {
              arr.push($(this).height())
            })

            blockClone.remove()

            // maxHeight = Math.max(maxHeight, MIN_HEIGHT)
            callback(arr)
          })
        })
      }
      // function updateHeight() {
      //   getMaxHeight(maxHeight => {
      //     block.css('height', `${maxHeight}px`)
      //     slide.css('height', `${maxHeight}px`)
      //   })
      // }
      function updateHeight() {
        getHeight(arr => {
          slide.each(function (i) {
            $(this).css('height', `${arr[i]}`)
          })
        })
      }
      function handleResize() {
        setTimeout(() => {
          updateHeight()

          $(window).one('resize', handleResize)
        }, 1000 / FPS)
      }
    })
  })
}

// parsley
{
  $(() => {
    $("form").parsley();

    Parsley.addMessages('ru', {
      defaultMessage: "???????????????????????? ????????????????.",
      type: {
        email: "?????????????? ?????????? ?????????????????????? ??????????.",
        url: "?????????????? URL ??????????.",
        number: "?????????????? ??????????.",
        integer: "?????????????? ?????????? ??????????.",
        digits: "?????????????? ???????????? ??????????.",
        alphanum: "?????????????? ????????????????-???????????????? ????????????????."
      },
      notblank: "?????? ???????? ???????????? ???????? ??????????????????.",
      required: "???????? ?????????????????? ??????????????",
      pattern: "?????? ???????????????? ??????????????????????.",
      min: "?????? ???????????????? ???????????? ???????? ???? ?????????? ?????? %s.",
      max: "?????? ???????????????? ???????????? ???????? ???? ?????????? ?????? %s.",
      range: "?????? ???????????????? ???????????? ???????? ???? %s ???? %s.",
      minlength: "?????? ???????????????? ???????????? ?????????????????? ???? ?????????? %s ????????????????.",
      maxlength: "?????? ???????????????? ???????????? ?????????????????? ???? ?????????? %s ????????????????.",
      length: "?????? ???????????????? ???????????? ?????????????????? ???? %s ???? %s ????????????????.",
      mincheck: "???????????????? ???? ?????????? %s ????????????????.",
      maxcheck: "???????????????? ???? ?????????? %s ????????????????.",
      check: "???????????????? ???? %s ???? %s ????????????????.",
      equalto: "?????? ???????????????? ???????????? ??????????????????."
    });

    Parsley.setLocale('ru');
  });
}

// parallax
{
  $(() => {
    const parallaxItem = $('[data-parallax]');

    if (parallaxItem.length !== 0) {

      parallaxItem.each(function () {
        const parallaxElem = $(this);
        const parallaxElemOffset = parallaxElem.offset().top;
        const parallaxId = parallaxElem.data('parallax');
        const parallaxContainer = $(`[data-parallax-container='${parallaxId}']`)

        $(window).on('scroll', function () {
          const scrollPos = this.pageYOffset;

          if (scrollPos < parallaxContainer.offset().top &&
            (scrollPos + $(window).height() / 2) > parallaxElemOffset) {
            const parallax = ((scrollPos + $(window).height() / 2) - parallaxElemOffset) * 0.1;

            requestAnimationFrame(() => {
              parallaxElem.css('transform', `translateY(${parallax}px)`);
            })
          }
        });
      });
    };
  });
}

// parallax main page star/moon
{
  $(() => {
    const parallaxItem = $('[data-parallax-main]')

    if (parallaxItem.length !== 0) {
      let parallaxStart

      if (navigator.userAgent.toLowerCase().match(/mac/)) {
        parallaxStart = $(window).height()
      } else {
        parallaxStart = $(window).height() / 2
      }

      parallaxItem.each(function () {
        const ths = $(this);
        const parallaxElemOffset = ths.offset().top;
        const parallaxId = ths.data('parallax-main')
        const parallaxContainer = $('[data-parallax-container-main]')

        $(window).on('scroll', function () {
          const scrollPos = this.pageYOffset;


          if (scrollPos < parallaxContainer.offset().top &&
            (scrollPos + parallaxStart) > parallaxElemOffset) {
            let parallax

            switch (parallaxId) {
              case 'left':
                parallax = ((scrollPos + parallaxStart) - parallaxElemOffset) * -0.1;
                break

              case 'right':
                parallax = ((scrollPos + parallaxStart) - parallaxElemOffset) * 0.1;
                break
            }

            requestAnimationFrame(() => {
              ths.css('transform', `translateX(${parallax}px)`);
            })
          }
        });
      })
    }
  })
}

// my sticky
{
  $(() => {
    const sticky = $('.my-sticky')

    if (sticky.length !== 0) {
      const mediaQuery = window.matchMedia(`(min-width: ${BREAKPOINT}px)`);
      let isMatches

      function mediaQueryChange() {
        (mediaQuery.matches) ? isMatches = true : isMatches = false
      }
      mediaQueryChange();
      mediaQuery.addListener(mediaQueryChange);
      const container = $('.disease-page__spray-row')
      if (sticky.height() < container.height()) {
        $(window).on('scroll resize load', function () {

          if (isMatches) {
            const panel = $('.panel')
            const containerOffset = container.offset().top
            const scrollPos = this.pageYOffset;

            if ((scrollPos + panel.height()) > containerOffset) {
              sticky.addClass('my-sticky--fixed')
            } else {
              sticky.removeClass('my-sticky--fixed')
            }

            if ((sticky.height() + scrollPos + panel.height()) > (containerOffset + container.height())) {
              sticky.addClass('my-sticky--bottom')
            } else {
              sticky.removeClass('my-sticky--bottom')
            }
          } else {
            sticky.removeClass('my-sticky--bottom')
            sticky.removeClass('my-sticky--fixed')
          }
        })
      }
    }
  });
}

// wwave
{
  const OFFSET = 100
  const FPS = 5 // test
  const ANIMATION_SPEED = 5
  const ANIMATION_PHASE = 800
  const ANIMATION_Y_OFFSET = 100

  $(() => {
    $('.wwave').each(function () {
      const wwave = $(this)

      const canvas = wwave.find('.wwave__canvas')
      const ctx = canvas[0].getContext('2d')

      const points = [
        [0, 307],
        [26, 318],
        [57, 329],
        [76, 335],
        [103, 342],
        [126, 347],
        [154, 352],
        [172, 355],
        [201, 359],
        [220, 361],
        [240, 362],
        [265, 363],
        [291, 364],
        [319, 363],
        [344, 362],
        [365, 361],
        [384, 359],
        [404, 357],
        [423, 354],
        [444, 351],
        [465, 347],
        [491, 342],
        [570, 321],
        [626, 301],
        [685, 272],
        [742, 233],
        [790, 186],
        [825, 135],
        [842, 93],
        [847, 68],
        [847, 50],
        [843, 34],
        [834, 21],
        [821, 11],
        [807, 5],
        [789, 1],
        [771, 0],
        [753, 1],
        [727, 6],
        [698, 15],
        [662, 30],
        [611, 59],
        [575, 85],
        [550, 107],
        [518, 142],
        [496, 178],
        [487, 205],
        [484, 229],
        [485, 250],
        [489, 270],
        [499, 297],
        [518, 327],
        [539, 351],
        [571, 377],
        [611, 401],
        [653, 419],
        [695, 431],
        [738, 439],
        [773, 442],
        [817, 442],
        [866, 438],
        [902, 433],
        [942, 426],
        [993, 415],
        [1139, 373],
        [1232, 343],
        [1310, 320],
        [1377, 304],
        [1486, 289],
        [1564, 288],
        [1625, 291],
        [1715, 303],
        [1778, 318],
        [1833, 337],
        [1897, 369],
        [1943, 402],
        [1977, 435],
        [2006, 475],
        [2023, 507],
        [2036, 545],
        [2040, 567],
      ]

      const points_norm = []

      let min_x = points[0][0]
      let max_x = min_x

      let min_y = points[0][1]
      let max_y = min_y

      points.forEach(point => {
        const cur_x = point[0]
        const cur_y = point[1]

        if (cur_x < min_x) {
          min_x = cur_x
        } else if (cur_x > max_x) {
          max_x = cur_x
        }

        if (cur_y < min_y) {
          min_y = cur_y
        } else if (cur_y > max_y) {
          max_y = cur_y
        }
      })

      const rect_width = max_x - min_x + 1
      const rect_height = max_y - min_y + 1

      const aspect = rect_height / rect_width

      points.forEach(point => {
        const point_norm = []

        point_norm[0] = (point[0] - min_x) / rect_width
        point_norm[1] = (point[1] - min_y) / rect_height

        points_norm.push(point_norm)
      })

      function updateCanvasHeight() {
        const canvasComputedStyle = getComputedStyle(canvas[0])
        const canvasWidth = canvasComputedStyle.width.slice(0, -2)

        canvas[0].width = canvasWidth

        const wwaveComputedStyle = getComputedStyle(wwave[0])
        const wwaveWidth = wwaveComputedStyle.width.slice(0, -2)

        canvas[0].height = wwaveWidth * aspect + OFFSET * 2
        wwave.css('height', wwaveWidth * aspect + 'px')
        // console.log(canvas[0].height);
        // console.log(wwaveWidth * aspect);
      }

      updateCanvasHeight()

      function handleResize() {

        setTimeout(() => {
          updateCanvasHeight()

          // requestAnimationFrame(() => {
          //   paint(points_norm)
          // })

          $(window).one('resize', handleResize)
        }, 1000 / FPS)
      }

      $(window).one('resize', handleResize)

      requestAnimationFrame(() => {
        paint(points_norm)
      })

      function paint(points) {
        ctx.clearRect(0, 0, canvas[0].width, canvas[0].height)

        ctx.beginPath()

        const width = canvas[0].width - OFFSET * 2
        const height = canvas[0].height - OFFSET * 2

        function getX(norm_x) {
          return OFFSET + norm_x * width
        }
        function getY(norm_y) {
          return OFFSET + norm_y * height
        }

        ctx.moveTo(getX(points[0][0]), getY(points[0][1]))

        for (var i = 1; i < points.length - 2; i++) {
          const xc = (points[i][0] + points[i + 1][0]) / 2
          const yc = (points[i][1] + points[i + 1][1]) / 2
          ctx.quadraticCurveTo(getX(points[i][0]), getY(points[i][1]), getX(xc), getY(yc))
        }

        ctx.quadraticCurveTo(getX(points[i][0]), getY(points[i][1]), getX(points[i + 1][0]), getY(points[i + 1][1]))

        const gradient = ctx.createLinearGradient(OFFSET, 0, canvas[0].width - OFFSET, 0)
        gradient.addColorStop(0, '#31aff2')
        gradient.addColorStop(1, '#5553f0')

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.stroke()

        ctx.closePath()
      }

      // animation

      requestAnimationFrame(render)

      let progress = 0
      const PROGRESS_DELTA = 5
      let progress_delta = PROGRESS_DELTA

      function render() {
        const DIST = 800

        const points_cur = points.map(item => [item[0], item[1] + 10 * Math.sin(((item[0] + progress % DIST) / DIST) * Math.PI * 2)])

        const points_norm = []

        let min_x = points_cur[0][0]
        let max_x = min_x

        let min_y = points_cur[0][1]
        let max_y = min_y

        points_cur.forEach(point => {
          const cur_x = point[0]
          const cur_y = point[1]

          if (cur_x < min_x) {
            min_x = cur_x
          } else if (cur_x > max_x) {
            max_x = cur_x
          }

          if (cur_y < min_y) {
            min_y = cur_y
          } else if (cur_y > max_y) {
            max_y = cur_y
          }
        })

        const rect_width = max_x - min_x + 1
        const rect_height = max_y - min_y + 1

        points_cur.forEach(point => {
          const point_norm = []

          point_norm[0] = (point[0] - min_x) / rect_width
          point_norm[1] = (point[1] - min_y) / rect_height

          points_norm.push(point_norm)
        })

        paint(points_norm)

        // star
        const ANIMATION_STAR = 10 * Math.sin(((progress % DIST) / DIST) * Math.PI * 2)
        $('.wwave__star').css('transform', `translateY(${ANIMATION_STAR}px)`)

        progress += progress_delta

        requestAnimationFrame(render)
      }

    })
  })
}

// main page slider
{
  $(() => {
    const index = {
      before: {
        active: 0,
      },
      after: {}
    }
    const DELAY = 500

    const slider = $('.b--carousel-slider-desktop')

    if (slider.length !== 0) {
      const sliderControl = slider.find('.b--btn-left-right-slider')
      const sliderCol = slider.find('.b__col')
      const template = slider.find('.template')
      const templateSlide = template.find('.b__frame')
      const templateTitle = template.find('.b__title')

      sliderCol.each(function (i) {
        const col = $(this)
        const wrapper = col.find('.b__wrapper')
        wrapper.append(templateTitle.eq(i).clone().addClass('b__title--active'))
        const container = col.find('.b__container')
        container.append(templateSlide.eq(i).clone().addClass('b__frame--active'))

        let num = 0

        sliderControl.on('click', function () {
          const dataTarget = $(this).data('slider-arrow')
          const slidesActive = container.find('.b__frame--active')

          index.before.active = getRealIndex(i + num, templateSlide.length)
          index.before.left = getRealIndex(index.before.active - 1, templateSlide.length)
          index.before.right = getRealIndex(index.before.active + 1, templateSlide.length)

          function getRealIndex(index, length) {
            return (length + index) % length
          }
          let delta

          if (dataTarget === 'prev') {
            num--
            delta = -1
            container.prepend(templateSlide.eq(index.before.left).clone().addClass('b__frame--left'))
          } else {
            delta = 1
            num++
            container.append(templateSlide.eq(index.before.right).clone().addClass('b__frame--right'))
          }

          index.after.active = getRealIndex(index.before.active + delta, templateSlide.length)

          slider.css('pointer-events', 'none')
          wrapper.append(templateTitle.eq(index.after.active).clone())

          const slidesTitle = col.find('.b__title')
          const slides = container.find('.b__frame')

          slidesTitle.removeClass('b__title--active')

          setTimeout(() => {
            slides.removeClass('b__frame--left b__frame--right')
            slides.eq(slidesActive.index() + delta).addClass('b__frame--active b__frame--front')
          })

          setTimeout(() => {
            slidesTitle.eq(1).addClass('b__title--active')
            slidesTitle.eq(0).remove()
            slides.eq(slidesActive.index() + delta).removeClass('b__frame--front')
            slides.eq(slidesActive.index()).remove()
            slider.css('pointer-events', '')
          }, DELAY)
        })
      })
    }
  });
}

// video
{
  $(() => {
    const videoContainer = $('.video')

    if (videoContainer.length !== 0) {
      videoContainer.each(function () {
        const video = $(this).find('#video')
        const play = $(this).find('#play')

        play.on('click', function () {
          $(this).fadeOut('500')
          video.get(0).play()
          video.attr('controls', '')
        })
      })
    }
  })
}

// loader
{
  $('body').css('overflow', 'hidden')
  $(window).on('load', function () {
    if ($('.main-page').length) {
      $('.loader').addClass('loader--hidden')
    }
    $('body').css('overflow', '')
    AOS.init({
      once: true,
      offset: 0,
      duration: 1000,
    });

  })
}

// spray/gel page reviews tabs
{
  $(() => {
    const reviewsTabs = $('.reviews-tabs')

    if (reviewsTabs.length !== 0) {
      const buttons = reviewsTabs.find('.spray-page__slider-item')
      const tabs = reviewsTabs.find('.reviews-tabs__item')
      const link = reviewsTabs.find('.border-link')

      buttons.on('click', function () {
        const buttonLink = $(this).find('.border-link')
        if (!$(this).hasClass('spray-page__slider-item--active')) {
          buttons.removeClass('spray-page__slider-item--active')
          link.removeClass('border-link--active')
          tabs.removeClass('reviews-tabs__item--active')

          $(this).addClass('spray-page__slider-item--active')
          buttonLink.addClass('border-link--active')
          tabs.eq($(this).index()).addClass('reviews-tabs__item--active')
        }
      })
    }
  })
}

// main page reviews tabs
{
  $(() => {
    const reviews = $('.main-page__reviews')

    if (reviews.length !== 0) {
      const buttons = reviews.find('.product-choice__item')
      const tabs = reviews.find('.main-page__reviews-item')
      const link = reviews.find('.product-btn')
      let isInit = false

      // buttons.on('click', function() {
      //   const buttonLink = $(this).find('.product-btn')
      //   if (!$(this).hasClass('product-choice__item--active')) {
      //     buttons.removeClass('product-choice__item--active')
      //     link.removeClass('product-btn--active')
      //     tabs.removeClass('main-page__reviews-item--active')
      //
      //     $(this).addClass('product-choice__item--active')
      //     buttonLink.addClass('product-btn--active')
      //     tabs.eq($(this).index()).addClass('main-page__reviews-item--active')
      //   }
      //
      //   if ($(this).hasClass('js--slider-init')) {
      //     if (!isInit) {
      //       const swiperContainer = $('.js--main-reviews-slider')
      //
      //       const swiper = new Swiper(swiperContainer[0], {
      //         slidesPerView: 'auto',
      //         spaceBetween: 20,
      //         loop: true,
      //       })
      //       console.log(1);
      //
      //       const btnPrev = $('.js--gel-reviews-btn--prev')
      //       const btnNext = $('.js--gel-reviews-btn--next')
      //
      //       btnPrev.on('click', () => swiper.slidePrev())
      //       btnNext.on('click', () => swiper.slideNext())
      //
      //       isInit = true
      //     }
      //   }
      // })
    }
  })
}

// accordion mobile menu
{
  $(() => {
    const menu = $('.modal-mobile')

    if (menu.length !== 0) {
      const menuButton = menu.find('.modal-mobile__choice-button')

      menuButton.on('click', function () {
        const menuSectionClicked = $(this).closest('.modal-mobile__choice')

        if (menuSectionClicked.hasClass('modal-mobile__choice--active')) {
          menuSectionClicked.find('.modal-mobile__choice-dropdown').slideUp(500)
          menuSectionClicked.removeClass('modal-mobile__choice--active')
        } else {
          $('.modal-mobile__choice--active').find('.modal-mobile__choice-dropdown').slideUp(650)
          $('.modal-mobile__choice--active').removeClass('modal-mobile__choice--active')

          menuSectionClicked.find('.modal-mobile__choice-dropdown').slideDown(500)
          menuSectionClicked.addClass('modal-mobile__choice--active')
        }
      })
    }
  })
}

// map height on (window.width < 355)
{
  const frame = $('.buy-page__map-iframe')
  if (frame.length) {
    const map = $('.buy-page__map')

    $(window).on('load', getHeight)
    $(window).one('resize', updateHeight)

    function getHeight() {
      if ($(window).innerWidth() < 355) {
        const height = frame.innerHeight() * ($(window).innerWidth() / 354)
        map.css('height', height + 'px')
      } else {
        map.css('height', '')
      }
    }

    function updateHeight() {
      setTimeout(() => {
        getHeight()

        $(window).one('resize', updateHeight)
      }, 1000 / 15);
    }
  }
}

// map frame showdown
{
  $(() => {
    const mapContainer = $('.buy-page__container')

    if (mapContainer.length) {
      const buttons = $('.product-btn')

      buttons.one('click', function(e) {
        e.preventDefault()
        
        mapContainer.addClass('active')
      })
    }
  })
}