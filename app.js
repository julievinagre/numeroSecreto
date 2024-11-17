alert('Bem vindo ao jogo do numero secreto');

let numeroMaximo = 5000;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}:`);

    //se chute for igual
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`o numero secreto eh menor que ${chute}`);
        }
        else {
            alert(`o numero secreto eh maior que ${chute}`);
        }
        tentativas++;//contador tentivas
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Well done, voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);





