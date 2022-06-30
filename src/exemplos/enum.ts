const sarah = {
    name: 'Sarah',
    idade: 26,
    casado: true,
    trabalho: 'Engenheira' // Nesse campo é dito que a sarah trabalha como 'Engenheira'
}

const maria = { 
    name: 'Maria',
    idade: 23,
    casado: false,
    trabalho: 'engenheira' // E aqui é dito que maria trabalha como 'engenheira'.
}

// Isso está correto? Existe diferença entre 'Engenheira' e 'engenheira'? Acredito que não. Isso deve ter sido um erro cometido em desenvolvimento.

// Para resolver isso vamos usar a feature Enum do TypeScript para criar o enum Profissao
enum Profissaoo {
    Professor,
    Engenheiro,
    Pintor,
    Porteiro
}

// E para garantir que o enum vai ser usado corretamente, vamos criar um tipo Pessoa também
type Pessoaa = {
    name: string,
    idade: number,
    casado: boolean,
    trabalho: Profissaoo // Aqui inserimos o enum como um tipo
}

const gabriel: Pessoaa = {
    name: 'Gabriel',
    idade: 26,
    casado: false,
    trabalho: Profissaoo.Engenheiro // E aqui usamos ele para definir de forma padronizada a profissão de cada objeto do tipo Pessoa
}

const mario: Pessoaa = {
    name: 'Mario',
    idade: 26,
    casado: false,
    trabalho: Profissaoo.Engenheiro // Tudo padronizado e consistente
}