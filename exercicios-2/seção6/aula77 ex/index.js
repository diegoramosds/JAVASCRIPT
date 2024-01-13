/*
function validarcpf(){

let cpf = '352.817.030-13';
let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfArray = Array.from(cpfLimpo).map(Number);



let semUltimosdigitos= cpfArray.slice(0,-2);

function primeiroDigito(){
 let multiplicador = 10;
 let soma = 0;

 for (let valor of semUltimosdigitos) {
  soma += multiplicador * valor;
  multiplicador--;
}

let total = 11 - (soma % 11);

let primeiroDigitoVerificador = total > 9 ? 0 : total;
semUltimosdigitos.push(primeiroDigitoVerificador);

  
}
function calcularSegundodigito(){
let multiplicador2 = 11;
let soma2 = 0;
for (let valor2 of semUltimosdigitos) {
 soma2 += multiplicador2 * valor2;
 multiplicador2--;
}
let total2 = 11 - (soma2 % 11);
let segundoDigitoVerificador = total2 > 9 ? 0 : total2;
semUltimosdigitos.push(segundoDigitoVerificador);

return semUltimosdigitos.join('') === cpfArray.join('');
}

primeiroDigito();
let cpfValido = calcularSegundodigito();
console.log(cpfValido ?`${cpfLimpo} CPF válido` : 'CPF inválido');
}

validarcpf();
*/
function validarcpf() {
  let cpf = '352.817.030-13';
  let cpfLimpo = cpf.replace(/\D+/g, '');
  let cpfArray = Array.from(cpfLimpo).map(Number);

  let semUltimosdigitos = cpfArray.slice(0, -2);

  function calcularDigito(multiplicador) {
    return semUltimosdigitos.reduce((acumulador, valor) => {
      return acumulador + multiplicador-- * valor;
    }, 0);
  }

  let total1 = 11 - (calcularDigito(10) % 11);
  let primeiroDigitoVerificador = total1 > 9 ? 0 : total1;
  semUltimosdigitos.push(primeiroDigitoVerificador);

  let total2 = 11 - (calcularDigito(11) % 11);
  let segundoDigitoVerificador = total2 > 9 ? 0 : total2;
  semUltimosdigitos.push(segundoDigitoVerificador);

  let cpfValido = semUltimosdigitos.join('') === cpfArray.join('');

  console.log(cpfValido ? `${cpfLimpo} CPF válido` : 'CPF inválido');
}

validarcpf();