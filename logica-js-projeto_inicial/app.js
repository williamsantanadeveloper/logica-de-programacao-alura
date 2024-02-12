alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (numeroSecreto == chute) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor do que ${chute}`);
        }
        else {
            alert(`O número secreto é maior do que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
