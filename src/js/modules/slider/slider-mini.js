import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
    }

    decoraziSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);

            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        if (!this.slides[0].closest('button')) {
            this.slides[0].classList.add(this.activeClass);
        }

        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    activeAnimation() {
        const play = setInterval(() => {
            this.nextSlide();
        }, 5000);

        this.slides[0].parentNode.addEventListener('mouseenter', () => {
            clearInterval(play);
        });

        this.next.parentNode.addEventListener('mouseenter', () => {
            clearInterval(play);
        });

        this.prev.parentNode.addEventListener('mouseenter', () => {
            clearInterval(play);
        });
    }

    nextSlide() {
        if(this.slides[1].tagName === 'BUTTON' && this.slides[2].tagName === 'BUTTON') {
            this.container.appendChild(this.slides[0]); // slide
            this.container.appendChild(this.slides[1]); // btn
            this.container.appendChild(this.slides[2]); // btn
            this.decoraziSlides();
        } else if (this.slides[1].tagName === 'BUTTON') {
            this.container.appendChild(this.slides[0]);
            this.container.appendChild(this.slides[1]);
            this.decoraziSlides();
        } else {
            this.container.appendChild(this.slides[0]);
            this.decoraziSlides();
        }
    }

    bindTriggers() {
        this.next.addEventListener('click', () => {
            this.nextSlide();
        });

        this.prev.addEventListener('click', () => {
            
            for (let i = this.slides.length - 1; i > 0; i--) {
                if(this.slides[i].tagName !== 'BUTTON') {
                    let active = this.slides[i];
                    this.container.insertBefore(active, this.slides[0]);
                    this.decoraziSlides();
                    break;
                }
            }

            
        });
    }

    init() {
        try {
            this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
            `;

            this.bindTriggers();
            this.decoraziSlides();

            if(this.autoplay) {
                this.activeAnimation();

                this.slides[0].parentNode.addEventListener('mouseover', () => {
                    this.activeAnimation();
                });

                this.next.parentNode.addEventListener('mouseover', () => {
                    this.activeAnimation();
                });

                this.prev.parentNode.addEventListener('mouseover', () => {
                    this.activeAnimation();
                });
            }
        } catch (error) {}
    }
}