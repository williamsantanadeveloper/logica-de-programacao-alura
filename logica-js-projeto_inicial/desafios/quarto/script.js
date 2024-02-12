console.log('Boas-vindas');

let nome = 'william';
console.log(`Olá, ${nome}`);

alert(`Olá, ${nome}`);

let linguagemFavorita = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagemFavorita);

let valor1 = 5;
let valor2 = 6;
let soma = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${soma}`);

let subtracao = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual ${subtracao}`);

let idade = prompt('Informe sua idade: ');
if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

let numero = prompt('Informe um número: ');

if (numero > 0) {
    console.log('Positivo');
} else if (numero < 0) {
    console.log('Negativo');
} else {
    console.log('O valor é igual a zero');
}

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

let nota = prompt('Informe a nota: ');
if (nota >= 7) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}

let qualquerNumero = Math.random();
console.log(qualquerNumero);

let numeroEntreUmEDez = parseInt(Math.random() * 10 + 1);
console.log(numeroEntreUmEDez);

let numeroEntreUmEMil = parseInt(Math.random() * 1000 + 1)
console.log(numeroEntreUmEMil);