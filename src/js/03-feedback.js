import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const key = 'feedback-form-state';

// Функция для сохранения состояния формы в локальное хранилище не чаще чем раз в 500 миллисекунд
const saveState = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(key, JSON.stringify(state));
}, 500);

// Отслеживаем событие input на полях формы и сохраняем состояние в локальное хранилище
form.addEventListener('input', saveState);

// Проверяем состояние хранилища при загрузке страницы и заполняем поля формы, если есть сохраненные данные
const savedState = localStorage.getItem(key);
if (savedState) {
  const { email, message } = JSON.parse(savedState);
  emailInput.value = email;
  messageInput.value = message;
}

// Отслеживаем событие submit на форме и выводим данные в консоль
form.addEventListener('submit', e => {
  e.preventDefault();
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(state);
  form.reset();
  localStorage.removeItem(key);
});
