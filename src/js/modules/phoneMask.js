export default class PhoneMask {
    constructor(selector) {
        this.inputs = document.querySelectorAll(selector);
    }

    setCurcorPosition(pos, elem) {
        elem.focus();

        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }

    createMask(event) {
        let matrix = '+1 (___) ___ __ __',
              i = 0,
              def = matrix.replace(/\D/gi, ''),
              val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {
            if (this.value.length === 2) {
                this.value = '';
            }
        } else {
            this.setCurcorPosition(this.value.length, this);
        }
    }

    init() {
        this.inputs.forEach(input => {
            input.addEventListener('input', this.createMask);
            input.addEventListener('focus', this.createMask);
            input.addEventListener('blur', this.createMask);
        });
    }
}