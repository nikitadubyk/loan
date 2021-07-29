export default class Form { 
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.inputs = document.querySelectorAll('input');
        this.message = {
            loading: 'Идет загрузка',
            ok: 'Спасибо! Мы скоро с вами свяжемся',
            fail: 'Упс, что-то пошло не так'
        };

        this.path = 'assets/question.php';
    }

    async postData(url, data) {
        let post = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await post.text();
    }

    sendForm() {
        this.forms.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');

                statusMessage.style.fontSize = '18px';
                statusMessage.style.marginTop = '10px';
                statusMessage.style.color = '#fff';

                statusMessage.textContent = this.message.loading;
                item.appendChild(statusMessage);

                const formData = new FormData(item);
                
                this.postData(this.path, formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = this.message.ok;
                })
                .catch(() => {
                    statusMessage.textContent = this.message.fail;
                })
                .finally(() => {
                    this.inputs.forEach(input => {
                        input.value = '';
                    });
                });
            });
        });
    }

    init() {
        this.sendForm();
    }
}