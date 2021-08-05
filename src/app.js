import 'Styles/_app.scss'

import Swiper from 'swiper/bundle';
import Slider from 'scripts/slider.js';
import Sticky from 'sticky-js';
import AOS from 'aos';
import 'parsleyjs';

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
          $('.body').toggleClass('body--hidden')
        });
      });

      $(window).on('click', function (event) {
        const target = event.target;

        if (target == $('.modal--active')[0]) {
          modal.removeClass('modal--active');
          $('.body').removeClass('body--hidden')
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

// main page carousel slider
{
  $(() => {
    const slider = new Slider('.b--carousel-slider-desktop')
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


      sectionButton.on('click', function () {
        const buttonText = $(this).find('.button-show__text');

        buttonText.toggleText('подробнее', 'скрыть');
        sectionContent.toggleClass('disease-page__content--show');

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

        const btn = $('[data-modal-button]');
        btn.on('click', function () {
          const id = $(this).data('modal-button');
          state.change(id);

          const modalActive = panel.find('[data-modal-active]');
          if (modalActive.length !== 0) {
            panel.addClass('panel--modal-active')
            $('.body').css('overflow', 'hidden')
          } else {
            panel.removeClass('panel--modal-active')
            $('.body').css('overflow', '')
          }
        });

        $(window).on('click', event => {
          // const isClickArea = $(event.target).closest(panel).length !== 0; ?

          const isClickArea = ( // ?
            // эл-ты panel
            $(event.target).closest('.panel__wrapper').length !== 0
            && $(event.target).closest('.panel__test').length === 0
            // модальное окно
            || $(event.target).closest('[data-modal-active]').length !== 0
          );

          if (!isClickArea) {
            state.change(null);
            $('.body').css('overflow', '')
            panel.removeClass('panel--modal-active')
          }
        });

        // media
        // const breakpoint = window.matchMedia(`(min-width: ${BREAKPOINT}px)`);
        // breakpoint.addListener((event) => {
        //   state.change(null);
        // });
      }
    }
  });
}

// wave
{
  $(() => {
    console.log('wave')

    const canvas = $('.canvas')
    const ctx = canvas[0].getContext('2d')
    canvas[0].width = window.innerWidth
    canvas[0].height = window.innerHeight

    function render() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    
      var points = []

      // const quality = 6;
      // for (let i = 0; i < quality; i++) {
      //   points.push({
      //     x: Math.cos(i / quality * (Math.PI * 2)) * 100 + 100,
      //     y: Math.sin(i / quality * (Math.PI * 2)) * 100 + 100,
      //   })
      // }

      points = [
        {
          x: 0, y: 0,
        },
        {
          x: 50, y: 25,
        },
        {
          x: 100, y: 50,
        },
        {
          x: 50, y: 100,
        },
        {
          x: 0, y: 50,
        },
        {
          x: 50, y: 25,
        },
        {
          x: 100, y: 0,
        },
      ]

      ctx.beginPath();

      ctx.moveTo(points[0].x, points[0].y);

      for (var i = 1; i < points.length - 2; i++)
      {
          var xc = (points[i].x + points[i + 1].x) / 2;
          var yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }

      ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);

      ctx.closePath();

      let gradient = ctx.createLinearGradient(0, 0, 100, 0);
      gradient.addColorStop(0, 'green');
      gradient.addColorStop(.7, 'white');
      gradient.addColorStop(1, 'pink');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 5;
      ctx.stroke()
    }

    render()
  })
}

// test
{
  $(() => {
    // options change
    const stepInput = $('.test__label')

    stepInput.each(function() {

      $(this).on('click', function() {
        const step = $(this).closest('.test__options')
        const stepNext = step.next()
        const dot = $('.test__dot')
        const index = $('.test__index')

        step.removeClass('test__options--active')
        stepNext.addClass('test__options--active')

        dot.eq(stepNext.index()).addClass('test__dot--active')
        index.text(stepNext.index() + 1)

        if ($('.test__options--active').length === 0) {
          $('.test__container').addClass('test__container--hidden')
          $('.test__result').addClass('test__result--active')
        }
      });
    })

    // result response
    const result = $('.test__form')
    const resultResponse = result.find('.test__form-response')
    const form = result.find('.form')
    const formInput = form.find('.form__input')

    $(document).on('submit', form, function(event) {
      event.preventDefault();

      $('.test__form-wrapper').addClass('test__form-wrapper--hidden')
      resultResponse.addClass('test__form-response--active')
      $('.test__form-email').text(formInput.val())
    })
  });
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
        let cur_index = 0

        let clickable = true

        const frame = block.find('.block__frame')
        const background = block.find('.block__background')

        btn.on('click', function () {
          if (clickable) {
            if (!$(this).hasClass('spray-page__tabs-item--active')) {
              clickable = false
              setTimeout(() => {
                frame.removeClass('block__frame--open')

                setTimeout(() => {
                  clickable = true
                })
              }, DURATION)

              const new_index = 1 - cur_index
              cur_index = new_index

              frame.toggleClass('block__frame--front')
              frame.eq(new_index).addClass('block__frame--open')
              
              const left_frame = frame.eq(0)
              const right_frame = frame.eq(1)
              if (new_index === 0) {
                left_frame.
              } else {

              }
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

          const slideClone = blockClone.find('.block__slide')

          slideClone.css('height', '')

          setTimeout(() => {
            slideClone.each(function () {
              if (this.offsetHeight > maxHeight) {
                maxHeight = this.offsetHeight
              }
            })

            blockClone.remove()

            maxHeight = Math.max(maxHeight, MIN_HEIGHT)

            callback(maxHeight)
          })
        })
      }
      function updateHeight() {
        getMaxHeight(maxHeight => {
          block.css('height', `${maxHeight}px`)
          slide.css('height', `${maxHeight}px`)
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
  });
}
