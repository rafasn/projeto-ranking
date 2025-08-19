window.onload = function() {
  const botao = document.getElementById("btn-verificar");

  botao.addEventListener("click", function() {
    const wins = parseInt(document.getElementById("wins").value);
    const losses = parseInt(document.getElementById("losses").value);
    let saldo = wins - losses;
    let nivel = "";

    if (isNaN(wins) || isNaN(losses)) {
        document.getElementById("resultado").innerText = "Por favor, insira valores numéricos válidos.";
        return;
    }

    // Nível com base nas vitórias
    if (saldo < 10) {
        nivel = "Ferro";
    } else if (saldo >= 11 && saldo<= 20) {
        nivel = "Bronze";
    } else if (saldo>= 21 && saldo<= 50) {
        nivel = "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        nivel = "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        nivel = "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Mensagem final
    document.getElementById("resultado").innerText =
      `O Herói tem de saldo de ${saldo} está no nível de ${nivel}`;
  });
};