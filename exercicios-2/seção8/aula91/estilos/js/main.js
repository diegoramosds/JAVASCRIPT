// fetch('pessoas.json')
// .then(resposta => resposta.json())
// .then(json => carregaElementosNaPagina(json));

axios('pessoas.json')
.then(resposta =>  carregaElementosNaPagina(resposta.data));
 

function carregaElementosNaPagina(json){
const table = document.createElement('table');

  const tituloTr = document.createElement('tr');
  const tituloTd1 = document.createElement('td');
  tituloTd1.innerHTML = '<strong>Nome</strong>';
 
  tituloTr.appendChild(tituloTd1);

  const tituloTd2 = document.createElement('td');
  tituloTd2.innerHTML = '<strong>Idade</strong>';

  tituloTr.appendChild(tituloTd2)
  
  
  table.appendChild(tituloTr);



    for(let pessoa of json){
        const tr = document.createElement('tr');
         
        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);
        
    
        
        table.appendChild(tr);


    }
    
    const reultado = document.querySelector('.container');
    
    resultado.appendChild(table);
}


