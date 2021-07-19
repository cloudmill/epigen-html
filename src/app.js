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
      const buttonModal = $('[data-button]');

      buttonModal.each(function () {
        const button = $(this);
        const buttonId = button.data('button');

        button.on('click', function() {
          $(`[data-modal='${buttonId}']`).toggleClass('modal--active');
        });
      });

      $(window).on('click', function(event) {
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
		const state = {
			isActive: checkActive(),
		}

		if (!state.isActive) {
			waitOpen()
		}

		$('.review-card--modal').on('click', event => {
			event.preventDefault()
		})

		function checkActive() {
			return $('.mdl').hasClass('mdl--active')
		}

		function waitOpen() {
			$('.review-card--modal').on('click', handleClick)

			function handleClick() {
				console.log('open click');

				$('.review-card--modal').off('click', handleClick)

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

				const clickTarget = event.target

				const mdlClose = $('.mdl__close')[0]
				const mdlContent = $('.mdl__content')[0]

				if (
					clickTarget === mdlClose
					|| clickTarget !== mdlContent
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
    if ($('.disease-page').length !== 0) {
      const list = $('[data-list]');
      const listOffset = list.offset().top - 10;
      const panelHeight = $('.panel__panel').height();

      $(window).on('scroll', function() {
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

      $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        const elementId = $(this).data('scroll');
        const elementOffset = $(elementId).offset().top;

        let windowOffset;
        const headerHeight = $('.panel__panel').height();

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

    $('.accordion').each(function() {
      const accordion = $(this);
      const accordionButton = accordion.find('.accordion__head');

      accordionButton.on('click', function() {
        accordion.toggleClass('accordion--active');
      });
    });
  });
}
