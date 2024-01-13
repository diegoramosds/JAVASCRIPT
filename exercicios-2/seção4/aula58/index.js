function pessoa(nome, sobrenome){
    const id= 123456;
    const metodoInterno = function(){};

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um metodo');
    };


}
const p1 = new pessoa('luiz,otávio');
const p2 = new pessoa('maria , oliveira');


p2.metodo();