(function (idade, peso) {
  const sobrenonome = "Otavio";

  function CriaNome(nome) {
    return nome + " " + sobrenonome;
  }

  function falaNome() {
    console.log(CriaNome("Luiz"));
  }

  falaNome();
  console.log(idade, peso);
})(19, "80kg");
