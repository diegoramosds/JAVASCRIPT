export const coins = ["bitcoin", "ethereum", "cardano", "litecoin"];

const API_URL = "https://api.coingecko.com/api/v3/simple/price";

export async function getPrices() {
  const ids = coins.join(",");
  const url = `${API_URL}?ids=${ids}&vs_currencies=brl`;

  const response = await fetch(url);
  const data = await response.json(response);

  return data;
}
