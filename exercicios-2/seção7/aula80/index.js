class Pessoa{
  constructor(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

  }
  falar(){
    console.log(`${this.nome}Está falando...`)
  }

}
function Pessoa2(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar == function(){
  console.log(`${this.nome}Está falando...`)

};
const p1 = new Pessoa('luiz', 'maria');
const p2 = new Pessoa2('luiz', 'maria');

console.log(p1);
console.log(p2);