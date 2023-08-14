console.log("Testando o Front");


const inputName = document.querySelector('input[name="name"]')

inputName.placeholder = "Primeiro Nome"

const inputNam2 = document.getElementesByName('name')

const inputs = document.querySelectorAll('input')
inputs[1].style.borderRadius = 3
inputs[1].style.borderRadius = '5px'
for(let input in inputs) console.log(inputs[input])


const formInicio = document.querySelector('.form-auth');

formInicio.style.display = 'flex';
formInicio.style.flexDirection = 'column';

document.body.style.backgroundColor = '#fafafa'