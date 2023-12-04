const nome = 'Luiz';
const sobrenome = 'otavio';
const idade = 30;
const peso = 84 ;
const altura = 1.80;
let imc = (peso / (altura * altura)).toFixed(1);
let anodenasc =2023 - idade;

console.log(`${nome} ${sobrenome} tem  ${idade} anos  pesa ${peso} kg ` )
console.log(` tem ${altura} de altura e seu IMC é ${imc}`)
console.log(`${nome} ${sobrenome} Nasceu em ${anodenasc}.`)
