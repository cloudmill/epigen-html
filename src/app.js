import 'Styles/_app.scss'

// vars
const BREAKPOINT = 1280
const BREAKPOINT_MEDIA = matchMedia(`(min-width: ${BREAKPOINT}px)`)

// nav-page-d
;(() => {
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
      // open
      const buttonOpenModal = $('[data-button-open]');

      buttonOpenModal.each(function () {
        const button = $(this);
        const buttonId = button.data('button-open');

        button.on('click', function() {
          $(`[data-modal='${buttonId}']`).addClass('modal--active');
        });
      });

      // close
      const buttonCloseModal = $('[data-button-close]');

      buttonCloseModal.each(function() {
        const button = $(this);
        const buttonId = button.data('button-close');

        button.on('click', function() {
          $(`[data-modal='${buttonId}']`).removeClass('modal--active');
        });
      });

      $(window).on('click', function(event) {
        const target = event.target;

        if (target == $('.modal__wrapper')[0]) {
          modal.removeClass('modal--active');
        }
      });
    }
  });
}

// video text
{
  $(() => {
    $('.video-page__video-item').each(function () {
      const comp = $(this)
      const title = comp.find('.video-page__content-text')

      const originalText = title.text()

      let lineCount = 3
      // if (comp.hasClass('product-announcement--small')) {
      //   lineCount = 2
      // }

      const lineHeightM = 18
      const lineHeightD = 21


      function getLineHeight() {
        // if (comp.hasClass('product-announcement--small')) {
        //   return 16
        // }
        // if (comp.hasClass('product-announcement--large')) {
        //   return 22
        // }
        return BREAKPOINT_MEDIA.matches ? lineHeightD : lineHeightM
      }

      let lineHeight = getLineHeight()
      BREAKPOINT_MEDIA.addListener(() => {
        lineHeight = getLineHeight()
      })

      function updateTitle() {
        title.text(originalText)

        if (title.height() > (lineHeight * lineCount)) {
          let newText = originalText

          while (title.height() > (lineHeight * lineCount)) {
            newText = newText.substring(0, newText.length - 1).trim()

            title.text(newText)
          }

          newText = newText.substring(0, newText.length - 5).trim() + '...'
          title.text(newText)
        }
      }

      updateTitle()

      window.addEventListener('resize', handleResize, {
        once: true,
      })

      function handleResize() {
        updateTitle()

        setTimeout(() => {
          window.addEventListener('resize', handleResize, {
            once: true,
          })
        }, 1000)
      }
    })
  });
}
