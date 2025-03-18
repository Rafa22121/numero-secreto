let numerosSorteados = [];
let numeroLimite  = 10;
let numeroSecreto = gerarNumAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}
exibirTexto('h1', 'Jogo do Número Secreto');
exibirTexto('p', `Escolha um número entre 1 e ${numeroLimite}`);

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou!');
        let mensgTentativas = `Você descobriu com ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'}.`;
        exibirTexto('p', mensgTentativas);
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        if (numeroSecreto > chute) {
            exibirTexto('p', `O número secreto é maior que ${chute}.`);
        } else {
            exibirTexto('p', `O número secreto é menor que ${chute}`);
        }
        tentativas++;
        limparCampo();
        
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
        }
function gerarNumAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    if (numerosSorteados.length == numeroLimite) {
        numerosSorteados = [];
    }
    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }

}
function reiniciarJogo() {
    numeroSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
    document.getElementById("reiniciar").setAttribute('disabled', true);
}