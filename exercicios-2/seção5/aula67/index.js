// reduce
//const numeros = [5, 56, 33, 1, 11, 23, 6, 7, 8, 27];
//const total= numeros.reduce(function(acumulador,valor){ 
    
   /// if (valor % 2 !== 0){
//acumulador += valor;

///} 
//return acumulador;
//},0);
//console.log(total);




const pessoas =[
    {   nome: 'maria',idade: 66},
    {   nome: 'joana',idade: 52},
    {   nome: 'fernando',idade: 51},
    {   nome: 'maria',idade: 62},
    {   nome: 'carlos',idade: 48},
   ];

   const maisvelha = pessoas.reduce(function(acumulador,valor){
 if(acumulador.idade > valor.idade)return acumulador;
   });
console.log(maisvelha);