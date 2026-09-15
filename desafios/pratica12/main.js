// function Numbers(type, value1, valeu2) {

//   if (type === "+") {
//     acumulation = value1 + valeu2;
//   }
//   if (type === "-") {
//     acumulation = value1 - valeu2;
//   }
//   console.log(acumulation);
// }
// Numbers('-', 1, 2)

function Numbers(type, ...value) {
  let acumulation = 0;
  if (type === "+") {
    acumulation += value;
  }
  if (type === "-") {
    acumulation -= value;
  }
  console.log(acumulation);
}
Numbers("-", 1, 2, 8, 520, 9);
