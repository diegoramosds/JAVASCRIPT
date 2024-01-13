const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usário normal';

const corUsuario = 'pink';
const corPadrao = corUsuario || 'Preta';
console.log(nivelUsuario,  corPadrao); 