 function rand(min,max){
    min *=1000;
    max *=1000;
    return Math.floor(Math.random()* (max - min) + min);
 }

 function esperaAi(msg,tempo){
 return new  Promise((resolve, reject) =>{
 if(typeof msg !== 'string') reject(false);

 setTimeout(()=>{
    resolve(msg);
 },tempo)

 });
 }
 esperaAi('Conexão com BD', rand(1,3))
 .then(reposta =>{
    console.log(reposta);
 return  esperaAi('', rand(1,3))
 })
 .then(reposta =>{
    console.log(reposta);
 return  esperaAi('Busacando dados da BASE', rand(1,3))
})
.then(reposta =>{
    console.log(reposta);
 return  esperaAi('2222', rand(1,3))
})
.then(() =>{
console.log('Exibe dados na tela')
})
.catch(e =>{
    console.log('Erro', e)
})