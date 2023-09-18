const consoleLog = document.querySelector('#consoleLog');
const Alert = document.querySelector('#Alert');
const Prompt = document.querySelector('#prompt');


consoleLog.addEventListener('click', () =>{
    alert('Служит для вывода информации в консоль');
})

Alert.addEventListener('click', () =>{
    alert('Служит для отображения информации пользователям');
})

Prompt.addEventListener('click', () =>{
    alert('Служит для отображения диалогового окна');
})

  