import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        this.slides.forEach(slide => {
            slide.style.display = 'none';
            slide.classList.remove('animated','fadeIn');
            this.slides[this.slideIndex - 1].style.display = 'block';
            this.slides[this.slideIndex - 1].classList.add('animated', 'fadeIn');
        });

        try {
            this.hanson.style.opacity = 0;

            if (n === 3) {
                setTimeout(() => {
                    this.hanson.classList.add('animated', 'fadeInUp');
                }, 3000);
            } else {
                this.hanson.classList.remove('animated', 'fadeInUp');
            }
        } catch (error) {}
    }

    changeIndex(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        try {
            this.hanson = document.querySelector('.hanson');
        } catch(e) {}

        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.changeIndex(1);
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.showSlides(this.slideIndex);
    }
}