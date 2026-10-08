const namePerson = document.getElementById("name");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const imc = document.getElementById("imc");

const count = document.getElementById("count");

count.onclick = function () {
  imc.innerHTML = `Olá ${namePerson} seu IMC é`;
};
