 let numero = Number(prompt('Digite um número'));

 let num = document.getElementById('num');
 let res = document.querySelector('div#res');  // element ou query 

num.innerHTML = numero;



res.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
res.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
res.innerHTML += `<p>É NaN: ${Number.isNaN(numero)} </p>`;
res.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
res.innerHTML += `<p>Arredondando para cima:  ${Math.ceil(numero)}</p>`;
res.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}</p>`;


