console.log('Ola, mundo!');

function saudacao(nome) {
    console.log(`Ola, ${nome}!`);
}
saudacao('William');

function dobro(numero) {
    numero = Number(numero);
    return numero * 2;
}
console.log(dobro(5));

function media(nota1, nota2, nota3) {
    nota1 = Number(nota1);
    nota2 = Number(nota2);
    nota3 = Number(nota3);
    let resultadoMedia = Math.ceil((nota1 + nota2 + nota3) / 3);
    return resultadoMedia;
}
console.log(media(7, 6, 4.5));

function maiorNumero(n1, n2) {
    let maior = n1 > n2 ? n1 : n2;
    return maior;
}
console.log(maiorNumero(5, 3));

function multiplicandoEleMesmo(numero) {
    numero = Number(numero);
    return numero ** 2;
}
console.log(multiplicandoEleMesmo(8));