
// 1. Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// 2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// 3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// 4. Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.


// "доброго вечора, у таску 8-3 якщо не заповнене одне або інше поле сабміт не робимо, а показуємо альорт, як у дз 6 таск 8
// дз приймаю, але із дз 9 чекаю підправлену 8-3"

// "Модуль 8 Таск 3 - при оновленні форми не мають підтягуватися дані вже з відправленого сабміту - підправте будь ласка"

import throttle from 'lodash/throttle';
const LOCAL_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener("input", throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;

function onInput(event){
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function onSubmit(event){
    event.preventDefault();
    console.log({ email: email.value, message: message.value });

    if(email.value === "" || message.value === ""){
        alert("Don't be lazy, fill up all the fields !");
    }
    event.currentTarget.reset();
    localStorage.removeItem(LOCAL_KEY);
    dataForm = {};
}

function reloadPage() {
    if(dataForm) {
        email.value = dataForm.email || '';
        message.value = dataForm.message || '';
    }
}
reloadPage();





































