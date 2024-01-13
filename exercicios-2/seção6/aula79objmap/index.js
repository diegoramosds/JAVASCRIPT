const pessoas = [
  {id:3, nome: 'luiz'},
  {id:2, nome: 'maria'},
  {id:1, nome: 'helena'}
];

const novapessoas = new Map();
for(const pessoa of pessoas ){
  const {id}= pessoa;
  novapessoas.set(id, {...pessoas});
}

novapessoas.delete(2);
console.log(novapessoas);