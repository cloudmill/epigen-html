import { get } from 'jquery';
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
var stickyUpdate
{
	$(() => {
		const stickyAll = $('.sticky')

		stickyAll.each(function () {
			const sticky = $(this)
			
			const state = {
				// offset
				top: 100,
				bottom: 1000,
				// pos
				startY: null,
				y: null,
				// size
				height: null,
				// mode
				mode: null,
			}

			const stickyPlace = sticky.parent()
			// готовим place для добавления stickyBottom и stickyFixed
			stickyPlace.css('position', 'relative')

			const stickyBottom = sticky.clone()
			// готовим stickyBottom
			stickyBottom.css('opacity', 0)
			stickyBottom.css('pointer-events', 'none')
			stickyBottom.css('position', 'absolute')
			stickyBottom.css('top', `${sticky[0].offsetTop}px`)
			stickyBottom.css('width', `${sticky[0].offsetWidth}px`)
			stickyPlace.append(stickyBottom)

			const stickyFixed = sticky.clone()
			// готовим stickyFixed
			stickyFixed.css('opacity', 0)
			stickyFixed.css('pointer-events', 'none')
			stickyFixed.css('position', 'fixed')
			stickyFixed.css('top', `${state.top}px`)
			stickyFixed.css('width', `${sticky[0].offsetWidth}px`)
			stickyPlace.append(stickyFixed)

			update()

			$(window).on('scroll', update)
			$(window).on('resize', update)

			function update() {
				// console.log('update');

				// апдейтим размеры (width) копий
				stickyBottom.css('width', `${sticky[0].offsetWidth}px`)
				stickyFixed.css('width', `${sticky[0].offsetWidth}px`)

				// апдейтим позицию stickyFixed
				stickyFixed.css('top', `${state.top}px`)

				// апдейтим позицию stickyBottom
				stickyBottom.css('top', `${sticky[0].offsetTop}px`)
				const stickyBottomYBottom = getY(stickyBottom) + stickyBottom.height()
				const bottomY = getDocumentHeight() - state.bottom
				stickyBottom.css('transform', `
					translateY(${bottomY - stickyBottomYBottom}px)	
				`)

				const scrollY = $(window).scrollTop()
				if (scrollY < (getY(sticky) - state.top)) {
					state.mode = 'default'
				} else if ((scrollY + state.top) < getDocumentHeight() - state.bottom - stickyFixed.height()) {
					state.mode = 'fixed'
				} else {
					state.mode = 'bottom'
				}

				switch (state.mode) {
					case 'fixed':
						console.log('fixed');

						sticky.css('opacity', 0)
						sticky.css('pointer-events', 'none')
						stickyBottom.css('opacity', 0)
						stickyBottom.css('pointer-events', 'none')

						stickyFixed.css('opacity', '')
						stickyFixed.css('pointer-events', '')
						break
					case 'bottom':
						console.log('bottom')

						sticky.css('opacity', 0)
						sticky.css('pointer-events', 'none')
						stickyFixed.css('opacity', 0)
						stickyFixed.css('pointer-events', 'none')

						stickyBottom.css('opacity', '')
						stickyBottom.css('pointer-events', '')
						break
					default:
						console.log('default');

						stickyFixed.css('opacity', 0)
						stickyFixed.css('pointer-events', 'none')
						stickyBottom.css('opacity', '0')
						stickyBottom.css('pointer-events', 'none')

						sticky.css('opacity', '')
						sticky.css('pointer-events', '')
				}
			}

			stickyUpdate = update
		})
	})	

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

	function getY(element) {
		let elem = element

		let y = 0

		while (elem.length !== 0 && elem[0] !== document.body) {
			y += elem[0].offsetTop

			elem = $(elem[0].offsetParent)
		}

		return y
	}
}

// drop (test)
{
	$(() => {
		$('.drop').each(function () {
			$(this).find('.drop__btn').on('click', () => {
				const dropID = $(this).find('.drop__drop').data('drop-id')

				$(`[data-drop-id="${dropID}"]`).slideToggle({
					progress: stickyUpdate,
				})
			})
		})
	})
}
