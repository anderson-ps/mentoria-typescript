//Solução do desafio 2 usando interface e a criaçao de um conjunto de valores usando o tipo enum

enum Profissao{
    Atriz,
    Padeiro,
    Professor,
    Pintor,
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

const julia: Pessoa = { 
    nome: "Julia",
    idade: 19,
    profissao: Profissao.Atriz
}

const roberto: Pessoa = { 
    nome: "Roberto",
    idade: 25,
    profissao: Profissao.Padeiro
}

const laura: Pessoa = { 
    nome: "Laura",
    idade: 23,
}

const carlos: Pessoa = { 
    nome: "Carlos",
    idade: 35,
    profissao: Profissao.Professor
}