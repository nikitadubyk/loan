export default class CheckMailInputs {
    constructor(input) {
        this.inputs = document.querySelectorAll(input);
    }

    check() {
        this.inputs.forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key.replace(/[^а-яё]/gi, '')) {
                    e.preventDefault();
                }
            });
        });
    }
}