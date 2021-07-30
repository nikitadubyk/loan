export default class Slider {
    constructor({container = null, 
        btns = null, 
        next = null, 
        prev = null,
        moduleNextBtn = null,
        modulePrevBtn = null,
        activeClass = '',
        animate,
        autoplay } = {}) {
        this.container = document.querySelector(container);
        try {this.slides = this.container.children;} catch (e){}
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.moduleNextBtn = document.querySelectorAll(moduleNextBtn);
        this.modulePrevBtn = document.querySelectorAll(modulePrevBtn);
        this.slideIndex = 1;
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
    }
}