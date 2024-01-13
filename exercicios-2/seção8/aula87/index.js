function rand(min,max){
   min *=1000;
   max *=1000;
   return Math.floor(Math.random()* (max - min) + min);
}

function esperaAi(msg,tempo){
return new  Promise((resolve, reject) =>{

  setTimeout(()=>{
  if(typeof msg !== 'string'){ 
  reject(false) ;
  return;
  }
     resolve(msg);
     return;
   },tempo)
});
}
function baixaPagina(){
   const emCache = false;

   if(emCache){
      return Promise.resolve('Página em cache');  
   }
   else{
      return esperaAi('Baixei a página',3000);
   }
}
baixaPagina()
.then(dadosPagina =>{
   console.log(dadosPagina);
})
.catch(e => console.log('ERRO',e));




