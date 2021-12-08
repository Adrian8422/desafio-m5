export function initInstructionsPage(params) {
  const div = document.createElement("div");
  div.className = "instructions-page";
  div.innerHTML = `

  <div>
    <div class="container-title-button">
     <text-type class="parrafo-instruc" tag="h2" variant="type-h2">Presioná jugar
     y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-type>
     <button-component class="button-start-game">Jugar!</button-component>
    </div>

  <div class="container-hands">
     <play-hands jugada="piedra"></play-hands>
     <play-hands jugada="papel"></play-hands>
     <play-hands jugada="tijera"></play-hands>
  </div>

  
  </div>
  
  
  
  
  `;
  const buttonStartEl = div.querySelector(".button-start-game");
  buttonStartEl.addEventListener("click", () => {
    params.goTo("/game");
  });

  return div;
}
