const nameInput = document.getElementById("name");

const height = document.getElementById("height");
const weight = document.getElementById("weight");
const imc = document.getElementById("imc");

const count = document.getElementById("count");

count.onclick = function () {
  const namePerson = nameInput.value;
  const heightPeson = height.value;
  const weightPerson = weight.value;

  console.log(heightPeson);
  console.log(weightPerson);

  const imcCalc = weightPerson / (heightPeson * heightPeson);
  const imcT = imcCalc.toFixed(2)
  console.log(imcT);


  imc.innerHTML = `Olá ${namePerson} seu IMC é ${imcT}`;
};