//.map()

//const numeros = [5, 56, 33, 1, 11, 23, 6, 7, 8, 27];
//const numerosemDobro= numeros.map(valor => valor *2);
//console.log(numerosemDobro);



const pessoas =[
    {   nome: 'maria',idade: 66},
    {   nome: 'joana',idade: 52},
    {   nome: 'fernando',idade: 51},
    {   nome: 'maria',idade: 66},
    {   nome: 'carlos',idade: 48},
   ];


const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade}));
//ou poderia usar delete.obj.nome; paraaparecer apenas idade

const comIDS = pessoas.map(function( obj,indice ) {
const newOBJ = {...obj};
newOBJ.id = indice
return newOBJ;

});

console.log(comIDS);
 