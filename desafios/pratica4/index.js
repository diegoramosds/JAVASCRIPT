function isNumber(n1){

  if( n1 % 3 === 0 && n1 % 5 === 0 ){
     console.log(`${n1} - FizzBuzz`);
  }

  else if(n1 % 3 === 0){
        console.log(`${n1} - Fizz`);  
  }

  else if(n1 % 5 === 0){
        console.log(`${n1} - Buzz`);
  }

  else{
        console.log(`${n1} - Não é divisivel`);
  }
}

const numeroAleatorio = (Math.floor(Math.random() * 100) + 1);
isNumber(numeroAleatorio);
