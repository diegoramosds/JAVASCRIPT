 //const numeros = [5,56,33,1,11,23,6,7,8,9,3,27];

 //const numerosFiltrados= numeros.filter(valor => valor >10);
 //console.log(numerosFiltrados);


const pessoas =[
 {   nome: 'maria',idade: 66},
 {   nome: 'joana',idade: 52},
 {   nome: 'fernando',idade: 51},
 {   nome: 'maria',idade: 66},
 {   nome: 'carlos',idade: 48},
];
const pessoasComnomegrande = pessoas.filter(obj => obj.nome.length>=5);
const pessoasCommaisde50 = pessoas.filter(obj => obj.idade >50);
const nometerminacomA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nometerminacomA);