import 'Styles/_app.scss'

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

// sticky (test)
;(() => {
	$(window).on('load', () => {
		const components = $('.sticky')
	
		components.each(function () {
			const component = $(this)
			
			const clone = component.clone()
			clone.css('display', 'none')
			clone.css('position', 'fixed')
			component.parent().append(clone)
	
			const btn = component.find('.sticky__btn')
			const drop = component.find('.sticky__drop')
	
			btn.on('click', () => {
				drop.slideToggle({
					progress: update,
				})
			})
	
			const options = {
				top: 100,
				bottom: 200,
			}
		
			const state = {
				start: {
					pos: {
						x: null,
						y: null,
					},
				},
				current: {
					pos: {
						x: null,
						y: null,
					},
				},
			}

			init()

			update()

			$(window).on('scroll', update)
	
			function init() {
				[state.start.pos.x, state.start.pos.y] = getPos()
			}

			function update() {
				[state.current.pos.x, state.current.pos.y] = getPos()

				const zone = getZone()

				if (zone === 'in') {
					component.css('display', 'none')
					clone.css('display', '')
					clone.css('top', `${options.top}px`)
				} else {
					component.css('display', '')
					clone.css('display', 'none')
				}
			}
	
			function getPos() {
				let elem = component

				let x = 0
				let y = 0

				while (elem.length !== 0 && elem[0] !== document.body) {
					x += elem[0].offsetLeft
					y += elem[0].offsetTop

					elem = $(elem[0].offsetParent)
				}

				return [x, y]
			}

			function getZone() {
				const y_scroll = pageYOffset
				const y_sticky = state.current.pos.y

				if (y_scroll < (y_sticky - options.top)) {
					return 'before'
				} else if ((y_scroll + getViewportHeight()) >= (getDocumentHeight() - options.bottom)) {
					return 'after'
				}
				return 'in'
			}

			function getDocumentHeight() {
				return Math.max(
					document.body.scrollHeight, document.documentElement.scrollHeight,
					document.body.offsetHeight, document.documentElement.offsetHeight,
					document.body.clientHeight, document.documentElement.clientHeight
				)
			}

			function getViewportHeight() {
				return document.documentElement.clientHeight
			}
		})
	})
})()
