import { getPrices } from "./api.js";
import { priceFormat } from "./calculos.js";

let coins = [];

let listaMoedas = document.getElementById("listaMoedas");

function render(data) {
  listaMoedas.innerHTML = data
    .map(
      ({ name, price }) => `
  <div class="moeda">
  <h3>${name}</h3>
  <p class="preco">${priceFormat(price)}</p>
  </div>
  `,
    )
    .join("");
}

async function reaload() {
  try {
    const data = await getPrices();

    coins = [
      { name: "bitcoin", price: data.bitcoin.brl },
      { name: "ethereum", price: data.ethereum.brl },
      { name: "cardano", price: data.cardano.brl },
      { name: "litecoin", price: data.litecoin.brl },
    ];

    render(coins);
  } catch (error) {
    console.log(error);
  }
}
reaload();
