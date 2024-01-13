//function hoisting-
falaoi();
function falaoi(){
    console.log('Oie')
}

//function expression
const soumDado = function(){
    console.log('Sou um dado');
}
soumDado();

//arrow function
const funcaoArrow = () => {
    console.log('Sou um arrow function');
};funcaoArrow();


// dentro de um objeto

const obj = {
    falar(){
        console.log('Estou falando...')
    }
};
obj.falar();








