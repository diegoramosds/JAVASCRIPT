const numeros = [5, 56, 33, 1, 11, 23, 6, 7, 8, 27];
const numerosPares= numeros
.filter(valor => valor % 2===0) 
.map(valor => valor * 2)
.reduce((ac,valor) => ac + valor);
console.log(numerosPares);