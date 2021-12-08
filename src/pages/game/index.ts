import { state } from "../../state";

export function initGamePage(params) {
  const div = document.createElement("div");

  div.innerHTML = `

  <div class="container-page-game">
    <div class="container-page__counter">
     <counter-element></counter-element>
    </div>


    <div class="container-hands">
    <play-hands class="choice" jugada="piedra" hover="true"></play-hands>
    <play-hands class="choice" jugada="papel" hover="true"></play-hands>
    <play-hands class="choice"  jugada="tijera" hover="true"></play-hands>



    </div>
  
  
  </div>
 
  `;

  const hoverChoice = div.querySelectorAll(".choice");
  hoverChoice.forEach((evento) => {
    evento.addEventListener("click", (e) => {
      e.stopPropagation();
      const move = evento.getAttribute("jugada");

      if (move == "piedra") {
        state.setMove("piedra");
      } else if (move == "papel") {
        state.setMove("papel");
      } else {
        state.setMove("tijera");
      }
      params.goTo("/in-game");
    });
  });
  return div;
}
