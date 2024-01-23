
document.addEventListener( 'click' , e =>{


const resultado = document.querySelector('.container');
if (e.target.classList.contains('enviarButton')){
   
   fetch('pessoas.json')
  .then(response => response.json())
  .then(data => {
   //console.log(data);

const inputEmail = document.querySelector('#novoEmail');
const res = document.querySelector('#res');

const emailCriado = inputEmail.value;
if(!emailCriado){
   res.innerHTML = 'Digite um Email';
   return;
} 

const emailExistente = data.find(pessoa => pessoa.email === emailCriado);

if(emailExistente){  
   res.style.color = 'red';
  res.innerHTML = 'Esse email já está cadastrado no BANCO DE DADOS';
}
else{

   res.style.color = 'green';
   res.innerHTML = 'Email cadastrado com sucesso';
}
  })

}
});



