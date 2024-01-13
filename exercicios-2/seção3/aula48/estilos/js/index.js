const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li'); // cria um li dentro de ul
  return li;
}

inputTarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput() {
  inputTarefa.value = ''; //limpa a caixa de texto
  inputTarefa.focus(); // retorna para a caixa de texto depois de apagado
}

function criaBotaoApagar(li) { 
  li.innerText += ' ';
  const botaoApagar = document.createElement('button'); //cria um button
  botaoApagar.innerText = 'Apagar'; //nome do button criado
  botaoApagar.setAttribute('class', 'apagar'); // cria um class com o nome apagar
  botaoApagar.setAttribute('title', 'Apagar esta tarefa'); // titulo do button ao passar o mouse por cima do button
  li.appendChild(botaoApagar); // adiciona o button dentro de li
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener('click', function() { // pega o click
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) { // pega o click
  const el = e.target;

  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {


  const liTarefas = tarefas.querySelectorAll('li'); //cria um class 
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();  // substitui a palavra apagara por espaço fazio-nada
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas); // cria arrays com string
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas); // tranforma string em array[]

  for(let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();
