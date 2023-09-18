let input = document.querySelector('input');
const duplicateField = document.querySelector('#duplicateField');
const submit = document.querySelector('button');
input.addEventListener("keyup", (event) =>{
duplicateField.textContent = input.value;
  });

submit.addEventListener('click', 
  (event) => {
    console.log(duplicateField.textContent);
    duplicateField.textContent = '';
    input.value = '';
})
 