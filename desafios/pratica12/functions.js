function falaFrase(comeco) {
  function falaresto(resto) {
      return comeco + "" + resto;
    }
    return falaresto
}

const fala = falaFrase('olá')
const resto = falaFrase("mundo!");
console.log(resto())