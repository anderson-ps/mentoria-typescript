//soluçao do desafio 3

const botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
const botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
const soma = document.getElementById('soma') as HTMLInputElement;
const campoSaldo = document.getElementById('campo-saldo') as HTMLTextAreaElement;

campoSaldo.innerHTML = '0';

let saldoTotal:number = 0;

function somarAoSaldo(soma:number) {
    
    saldoTotal += soma;
    campoSaldo.innerHTML = `${saldoTotal}`;
    console.log(saldoTotal);
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
    saldoTotal = 0;
    campoSaldo.innerHTML = '0';
}

botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(+soma.value);
});

botaoLimpar.addEventListener('click', function (){
    limparSaldo();
});
