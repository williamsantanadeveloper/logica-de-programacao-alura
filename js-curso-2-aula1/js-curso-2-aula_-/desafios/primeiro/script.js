let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

const button = document.querySelector('.console');
button.onclick = () => {
    console.log('O botão foi clicado');
}

const alertClass = document.querySelector('.alert');
alertClass.onclick = () => {
    alert('Eu amo JS');
}


let btnPrompt = document.querySelector('.prompt');
btnPrompt.onclick = () => {
    let cidade = prompt('Informe sua cidade: ');
    alert(`Estive em ${cidade} e lembrei de você`);
}


let btnSoma = document.querySelector('.soma');
btnSoma.onclick = () => {
    let valor1 = Number(prompt('Informe um número: '));
    let valor2 = Number(prompt('Informe outro número'));
    let resultado = valor1 + valor2;
    alert(`A soma de ${valor1} e ${valor2} é ${resultado}`);
}