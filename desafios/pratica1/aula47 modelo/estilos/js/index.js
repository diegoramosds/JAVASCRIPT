
const nomecor = document.querySelector('.nomecor')
const body = document.body;

function geradordeCores(){
  const coraleatoria = `rgb(${Math.floor(Math.random()* 289)}, ${Math.floor(Math.random() * 522)},
   ${Math.floor(Math.random() * 877)})`;

  console.log(coraleatoria)
 body.style.backgroundColor = coraleatoria;
 nomecor.innerHTML = `Cor: ${coraleatoria};`;


} 
function cliqueBotoes(){
  document.addEventListener('click', e => {
    const el = e.target;

    if(el.classList.contains('gerar')) {
      geradordeCores();
   
      
      
    }


  });

}
cliqueBotoes();



