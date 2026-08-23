const produtos = [
  {
    id: 1,
    nome: "Notebook Gamer",
    preco: 3999.0,
    temDesconto: true,
    quantidade: 12,
  },
  {
    id: 2,
    nome: "Smartphone Pro",
    preco: 2599.5,
    temDesconto: false,
    quantidade: 8,
  },
  {
    id: 3,
    nome: "Monitor UltraWide",
    preco: 1899.75,
    temDesconto: true,
    quantidade: 5,
  },
  {
    id: 4,
    nome: "Teclado Mecânico",
    preco: 499.99,
    temDesconto: false,
    quantidade: 20,
  },
  {
    id: 5,
    nome: "Mouse Gamer",
    preco: 349.45,
    temDesconto: true,
    quantidade: 15,
  },
  {
    id: 6,
    nome: "Headset Bluetooth",
    preco: 799.8,
    temDesconto: false,
    quantidade: 10,
  },
  {
    id: 7,
    nome: "Cadeira Ergonômica",
    preco: 1299.6,
    temDesconto: true,
    quantidade: 7,
  },
  {
    id: 8,
    nome: "Impressora Multifuncional",
    preco: 999.3,
    temDesconto: false,
    quantidade: 6,
  },
  {
    id: 9,
    nome: "Tablet 10''",
    preco: 1450.25,
    temDesconto: true,
    quantidade: 9,
  },
  {
    id: 10,
    nome: "HD Externo 2TB",
    preco: 599.55,
    temDesconto: false,
    quantidade: 14,
  },
];

// const novosProdutos = produtos.map((produto) => {
//   const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco;

//   return {
//     id: produto.id,
//     nome: produto.nome,
//     preco: novoPreco.toLocaleString("pt-br", {
//       style: "currency",
//       currency: "BRL",
//     }),
//     quantidade: produto.quantidade,
//   };
// });

// console.log(novosProdutos)

// const totalVendas = produtos.reduce((acumulador, produto) => {
//   return acumulador + produto.preco * produto.quantidade;
// }, 0);

//console.log(totalVendas);

// const promocao = produtos.filter(produto => produto.temDesconto)

// console.log(promocao);

const totalFaturmaneto = produtos
  .map((produtos) => {
    return { ...produtos, quantidade: produtos.quantidade + 10 };
  })
  .filter((produto) => produto.temDesconto)
  .reduce(
    (acumulador, produto) => acumulador + produto.preco * produto.quantidade,
    0,
  );

console.log(totalFaturmaneto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));
