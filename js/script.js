function joKenPo() {

  const jKP = ["Pedra", "Papel", "Tesoura"];

// 1 - Player choose Rock, Scissor, Paper
  let playerChoice = Number(prompt("Escolha Pedra(0), Papel(1) ou Tesoura(2): "));
// 2 - Pc Creat a random number that represents the choices
  let pcChoice = Math.floor(Math.random() * 2);
// 3 - Compare the choices with an if
  if(jKP.at(playerChoice) === jKP.at(pcChoice)) {
    alert("Vocês empataram");
  } else if(jKP.at(playerChoice) === 1 && jKP.at(pcChoice) === 2) {
      alert("Pedra ganha de tesoura, você venceu");
  } else if(playerChoice === 2 && pcChoice === 1) {
      alert("Papel ganha de pedra, você venuce");
  } else if(playerChoice === 3 && pcChoice === 2) {
      alert("Tesoura ganha de papel, você venceu");
  } else {
      alert("Você perdeu");
  }
}

joKenPo();
