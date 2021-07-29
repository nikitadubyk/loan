export default class Differents {
    constructor(oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        this.oldItems = this.oldOfficer.querySelectorAll(items);
        this.newItems = this.newOfficer.querySelectorAll(items);
        this.newCounter = 0;
        this.oldCounter = 0;
    }

    hideItems(items) {
        items.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }

    bindTriggers(container, counter, items) {
        container.querySelector('.plus').addEventListener('click', () => {
            if (counter !== items.length - 2) {
                items[counter].style.display = 'flex';
                items[counter].classList.add('animated', 'fadeInUp');
                counter++;
            } else {
                items[counter].style.display = 'flex';
                items[counter].classList.add('animated', 'fadeInUp');
                items[items.length - 1].classList.add('animated', 'fadeOut');
                setTimeout(() => {
                    items[items.length - 1].remove();
                }, 700);
            }
        });
    }

    init() {
        this.hideItems(this.oldItems);
        this.hideItems(this.newItems);
        
        this.bindTriggers(this.oldOfficer, this.oldCounter, this.oldItems);
        this.bindTriggers(this.newOfficer, this.newCounter, this.newItems);
    }
}
