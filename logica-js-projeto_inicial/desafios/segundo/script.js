let diaDaSemana = prompt('Qual o dia da semana? ');

if (diaDaSemana === 'Sábado' || diaDaSemana === 'Domingo') {
    console.log('Bom fim de semana!');
} else {
    console.log('Boa semana!');
}

let numero = prompt('Informe um número: ');
if (numero > 0) {
    alert(`Número positivo ${numero}`);
} else if (numero == 0) {
    alert(`O número é 0`);
} else {
    alert(`Número negativo ${numero}`);
}

let pontuacao = 101;
if (pontuacao >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}

let saldoDaConta = prompt('Informe o saldo da conta: ');
console.log(`O saldo da conta é R$${saldoDaConta}`);

let nome = prompt('Informe seu nome: ');
console.log(`Seja bem-vindo, ${nome}!`)