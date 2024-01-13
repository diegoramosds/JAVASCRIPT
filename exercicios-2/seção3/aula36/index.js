const pessoa = {
    nome: 'luiz',
    sobrenome: 'otávio',
    idade: '30'
};
for (let chave in pessoa){
    console.log(chave,pessoa[chave]);
}