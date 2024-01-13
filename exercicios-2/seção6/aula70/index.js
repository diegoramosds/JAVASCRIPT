function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // impede qualquer alteração no objeto;
}

const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Miranda');
console.log(p1);
console.log(p2);