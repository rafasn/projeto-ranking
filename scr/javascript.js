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
    if (wins < 10) {
        nivel = "Ferro";
    } else if (wins >= 11 && wins <= 20) {
        nivel = "Bronze";
    } else if (wins >= 21 && wins <= 50) {
        nivel = "Prata";
    } else if (wins >= 51 && wins <= 80) {
        nivel = "Ouro";
    } else if (wins >= 81 && wins <= 90) {
        nivel = "Diamante";
    } else if (wins >= 91 && wins <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Mensagem final
    document.getElementById("resultado").innerText =
      `O Herói tem de saldo de ${saldo} está no nível de ${nivel}`;
  });
};