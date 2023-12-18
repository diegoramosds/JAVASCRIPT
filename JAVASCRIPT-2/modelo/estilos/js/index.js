/*function calcular() {
   
let peso = window.document.getElementById('peso').value;
let altura = window.document.getElementById('altura').value;

let res = window.document.getElementById('res'); // limpa os valores digitados
document.getElementById('res').innerHTML ='';
let imc = peso / (altura * altura);


if (!peso) {
    res.innerHTML += 'Peso inválido'
    return;
}

if (!altura) {
    res.innerHTML += 'Altura inválida'
    return;
}

res.innerHTML += `Seu IMC é ${imc.toFixed(1)} `

if(imc < 18.5){
  res.innerHTML += '(Abaixo do peso)';

}
else if ( imc >= 18.5 && imc <= 24.9){
    res.innerHTML += ' (Peso normal)';
}
else if(imc >=  25 && imc <= 29.9 ){
    res.innerHTML+= '(Sobrepeso)';
}
else if(imc >= 30 && imc <= 34.9){
    res.innerHTML += '(Obsidade grau 1)';                                      forma 1
}

else if(imc >= 35 && imc <= 39.9){
    res.innerHTML += '(Obsidade grau 2)';
}

else if(imc > 40) {
    res.innerHTML += '(Obsidade grau 3)';
}
}
*/ 

// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {      // n faz o envio do formulário
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');        // pega o valor dentro de target (target nesse caso é igual a (form))
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);  // converte para numero e pega o valor
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);       // retorna invalido se n for digitado nada nos input
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);    // retorna invalido se n for digitado nada nos input
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP () {
  const p = document.createElement('p');  // cria um paragrafo
  return p;
}

function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';   // limpa os valores

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado'); // cria  um class pro paragrafo
  } else {
    p.classList.add('bad'); // cria outro class com estilo diferentes 
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}





