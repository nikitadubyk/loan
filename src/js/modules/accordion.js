export default class Accordion {
    constructor(buttons) {
        this.btns = document.querySelectorAll(buttons);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const sibling = btn.closest('.module__info-show').nextElementSibling;

                sibling.classList.toggle('msg');
                sibling.style.marginTop = '20px';
            });
        });
    }
}