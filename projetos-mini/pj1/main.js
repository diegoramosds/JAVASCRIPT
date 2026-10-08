const nameInput = document.getElementById("name");

const height = document.getElementById("height");
const weight = document.getElementById("weight");
const imc = document.getElementById("imc");

const count = document.getElementById("count");

count.onclick = function () {
  const namePerson = nameInput.value;
  const heightPeson = height.value;
  const weightPerson = weight.value;

  const imcCalc = weightPerson / (heightPeson * heightPeson);

  imc.innerHTML = `Olá ${namePerson} seu IMC é ${imcCalc}`;
};
heightPeson;
