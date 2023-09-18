document.querySelector('#link').addEventListener('click', 
  (event) => {
    event.preventDefault();
    const userText = prompt('Измените текст ссылки');
    const userTextField = document.querySelector('#link');
    userTextField.textContent = userText;
})
