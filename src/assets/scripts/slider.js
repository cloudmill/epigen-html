export default class Slider {
  constructor(selector) {
    this.$root = document.querySelector(selector);
    if (this.$root) {
      this.$wrapper = this.$root.querySelector('.b__bottom');
      this.$slides = this.$root.querySelectorAll('.b__slide');

      this.setActive = this.setActive.bind(this);

      this.init();
    }
  }

  init() {
    this.setActive(this.$slides[0]);

    this.$root.addEventListener('click', (e) => {
      const $target = e.target.closest('.b--btn-left-right-slider');

      if ($target.dataset.commandSliderArrow) {
        switch($target.dataset.commandSliderArrow) {
          case 'prev':
            if (this.$active.previousElementSibling) {
              this.setActive(this.$active.previousElementSibling);
              break;
            }

            this.setActive(this.$slides[this.$slides.length - 1]);
            break;
          case 'next':
            if (this.$active.nextElementSibling) {
              this.setActive(this.$active.nextElementSibling);
              break;
            }

            this.setActive(this.$slides[0]);
            break;
          default:
            return;
        }
      }
    });

    this.$root.addEventListener('touchstart', (e) => {
      // console.log(e);

      this.$root.ontouchmove = (event) => {


        this.$root.ontouchend = () => {
          if ((e.touches[0].clientX - event.touches[0].clientX) < 0 && (e.touches[0].clientX - event.touches[0].clientX) < -75) {
            if (this.$active.previousElementSibling) {
              this.setActive(this.$active.previousElementSibling);
            } else {
              this.setActive(this.$slides[this.$slides.length - 1]);
            }

            this.$root.ontouchmove = null;
            this.$root.ontouchend = null;
            return;
          }

          if ((e.touches[0].clientX - event.touches[0].clientX) > 0 && (e.touches[0].clientX - event.touches[0].clientX) > 75) {
            if (this.$active.nextElementSibling) {
              this.setActive(this.$active.nextElementSibling);
            } else {
              this.setActive(this.$slides[0]);
            }

            this.$root.ontouchmove = null;
            this.$root.ontouchend = null;
            return;
          }
        };
      };
    });

    window.addEventListener('resize', () => {
      this.setActive(this.$active);
    });
  }

  setActive($new) {
    this.$slides.forEach(($slide, index) => {
      if ($slide !== $new) {
        $slide.classList.remove('active');
      } else {
        this.$wrapper.style.pointerEvents = 'none';

        setTimeout(() => {
          $slide.classList.add('active');
          this.$active = $slide;

          this.$wrapper.style.transform = `translateX(-${this.$wrapper.offsetWidth * index}px)`;
          this.$wrapper.style.pointerEvents = '';
        }, 500);
      }
    });
  }
}
