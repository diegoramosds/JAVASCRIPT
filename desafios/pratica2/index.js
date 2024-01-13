
let maiorNumero = 0

function Numeros(n1,n2){
 this.n1 = n1;
 this.n2 = n2;
   
 if(this.n1 > maiorNumero){
    maiorNumero = this.n1
 }

 if(this.n2 > maiorNumero){
    maiorNumero = this.n2
 }

}
const nn = new Numeros(78,6);
console.log(maiorNumero);



//com class 

//let maiorNumero = 0;

//class Numeros{
//constructor(n1,n2){

   // this.n1 = n1;
   // this.n2 = n2;
      
  //  if(this.n1 > maiorNumero){
   //    maiorNumero = this.n1;
  //  }
      
 //   if(this.n2 > maiorNumero){
 //      maiorNumero = this.n2;
 //   }
   
//}

//}
//const nn = new Numeros(50,6);
//console.log(maiorNumero);