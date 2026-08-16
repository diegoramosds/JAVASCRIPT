//buttons
const previousButtom = document.querySelector(".previous");
const nextButtom = document.querySelector(".next");

//images
const listaImages = document.querySelectorAll("img");
let counter = 0;

function onclick() {
  previousButtom.addEventListener("click", () => {
    document.querySelector("img.active").classList.remove("active");
    if (counter > 0) {
      counter = counter - 1;
    } else {
      counter = 2;
    }
    listaImages[counter].classList.add("active");
  });

  nextButtom.addEventListener("click", () => {
    document.querySelector("img.active").classList.remove("active");

    if (counter < 2) {
      counter = counter + 1;
    } else {
      counter = 0;
    }
    listaImages[counter].classList.add("active");
  });
}

onclick();
