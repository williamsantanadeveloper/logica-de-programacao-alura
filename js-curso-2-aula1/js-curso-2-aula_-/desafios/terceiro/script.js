function calculandoIMC(altura, peso) {
    altura = Number(altura);
    peso = Number(peso);
    let imc = peso / (altura ** 2);
    return imc;
}
console.log(calculandoIMC(1.73, 91));

function calculandoFatorial(numero) {
    numero = Number(numero);
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i
    }
    return fatorial;
}
console.log(calculandoFatorial(12));

function convertendoValorDolar(valor) {
    valor = Number(valor);
    let paraReal = Math.ceil(valor * 4.95);
    let paraEuro = Math.ceil(valor * 0.93);
    return `Valor em reais R$${paraReal}, valor em Euros ${paraEuro}`;
}

console.log(convertendoValorDolar(50));

function calculandoAreaRetangular(altura, largura) {
    let resultado = altura * largura;
    let perimetro = 2 * (altura + largura);
    return `${resultado}, ${perimetro}`;
}
console.log(calculandoAreaRetangular(6, 4));
function calculandoAreaCircular(raio) {
    raio = Number(raio);
    let pi = 3.14;
    return (raio ** 2) * pi;
}
console.log(calculandoAreaCircular(4));

function tabuada(numero) {
    numero = Number(numero);
    for (let i = 0; i <= 10; i++) {
        let resultado = `${numero} x ${i} = ${numero * i}`;
        console.log(resultado);
    }
}
let numero = 7;
tabuada(numero);