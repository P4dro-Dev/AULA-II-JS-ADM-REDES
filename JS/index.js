	
document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('myForm');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const cepInput = document.getElementById('cep');
const idadeInput = document.getElementById('idade');

// ... outros inputs e spans de erro

form.addEventListener('submit', function (event) {
event.preventDefault(); // Previne o envio padrão do formulário
// validarFormulario();

console.log(nome.value);
console.log(email.value);
console.log(cep.value);
console.log(idade.value);

});
});