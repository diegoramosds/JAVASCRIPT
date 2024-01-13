function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;


}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco *(perentual / 100));

};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco *(percentual / 100));

};
const p1 = new Produto('Camiseta ', 50);

const p2 = {
    nome: 'caneca',
    preco: 15
};
Object.setPrototypeOf(p2,Produto.prototype);

p2.aumento(10);

const p3 =Object.create(Produto.prototype,{
    preco:{
        enumerable: true, 
      
        writable: true, 
        configurable:true,
        value: 99
    },
    tamanho:{
        enumerable: true, 
      
        writable: true, 
        configurable:true,
        value: 42

    },

});
p3.aumento(10);
console.log(p3);
