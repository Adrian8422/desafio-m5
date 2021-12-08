import { state } from "../../state";

const currentPlays = state.getState().currentGame;

export function initInGamePage(params) {
  const div = document.createElement("div");
  div.innerHTML = `

  <div class="container-in-game">
    <play-hands class="bot-selection" in-game="true" jugada="${currentPlays.computerPlay}"></play-hands>
    <play-hands class="my-selection" in-game="true" jugada="${currentPlays.myPlay}"></play-hands>
  </div> 
  `;

  const botSelection = div
    .querySelector(".bot-selection")
    .getAttribute("jugada");
  const myPlay = div.querySelector(".my-selection").getAttribute("jugada");

  setTimeout(() => {
    const results = state.whoWins(myPlay, botSelection);
    if (results == 2) {
      params.goTo("/game");
    } else if (results == 1) {
      params.goTo("/lose");
    } else {
      params.goTo("/winner");
    }
  }, 3000);

  return div;
}
