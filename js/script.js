function joKenPo() {
// 1 - Player choose Rock, Scissor, Paper
  let playerChoice = Number(prompt("Escolha Pedra(1), Papel(2) ou Tesoura(3): "));
// 2 - Pc Creat a random number that represents the choices
  let pcChoice = 1 + Math.floor(Math.random() * 3);
// 3 - Compare the choices with an if
  if(playerChoice === pcChoice) {
    alert("Vocês empataram");
  } else if(playerChoice === 1 && pcChoice === 3) {
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
