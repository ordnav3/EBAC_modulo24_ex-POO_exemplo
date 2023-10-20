function Pessoa(nome, sobrenome, idade, cargo, funcao) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cargo = cargo;
    this.funcao = funcao;
}

function Estagiario(nome, sobrenome, idade) {
    Pessoa.call(this, nome, sobrenome, idade, "Estagiário", "executar e auxiliar determinadas tarefas sob orientação de gestores")
}

function Gerente(nome, sobrenome, idade) {
    Pessoa.call(this, nome, sobrenome, idade, "Gerente", "mediar a relação entre a direção da empresa e os demais colaboradores, e traduzir as estratégias de avanço da empresa em pequenas tarefas a serem executadas no dia a dia")
}


const gerente = new Gerente('Maria', 'Sanchez', 35)
const estagiario1 = new Estagiario('Antônio', 'Dos Santos', 18)
const estagiario2 = new Estagiario('Carlos', 'Silva', 21)


console.log(gerente)
console.log(estagiario1)
console.log(estagiario2)