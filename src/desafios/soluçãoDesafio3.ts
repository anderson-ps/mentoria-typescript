//soluçao do desafio 3

const botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
const botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
const soma = document.getElementById('soma') as HTMLInputElement;
const campoSaldo = document.getElementById('campo-saldo') as HTMLTextAreaElement;

campoSaldo.innerHTML = '0';

function somarAoSaldo(soma:number) {
    //console.log(soma); 
    let valorInerr = +campoSaldo.innerHTML ;

    console.log(campoSaldo.innerHTML);
    
    campoSaldo.innerHTML = `${valorInerr + soma}`;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(+soma.value);
});

botaoLimpar.addEventListener('click', function (){
    limparSaldo();
});
