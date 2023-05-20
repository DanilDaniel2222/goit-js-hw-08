
// 1. Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// 2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// 3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// 4. Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.


import throttle from 'lodash/throttle';

const refs = {
    form: document.querySelector('form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};

const data = JSON.parse(localStorage.getItem('feedback-form-state')) || {          
    email: '',
    message: '',
};

refs.input.value = data.email;
refs.textarea.value = data.message;

refs.form.addEventListener("input", throttle(onInput, 500));
refs.form.addEventListener('submit', onSubmit);

function onInput(event){
    if(event.target.nodeName === 'INPUT'){
        data.email = event.target.value;
    }

    if(event.target.nodeName === 'TEXTAREA'){
        data.message = event.target.value;
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onSubmit(event){
    event.preventDefault();

    const {
        elements: {email, message},
    } = event.currentTarget;

    const userInfo = {
        email: email.value,
        message: message.value,
    };

    console.log(userInfo);
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}




















