export function initWelcomePage(params) {
  const div = document.createElement("div");
  div.className = "welcome-page";
  div.innerHTML = `
  
  <div>
    <div class="container-title-button">
     <text-type tag="h1" variant="type-h1">Piedra,
     Papel ó
     Tijera</text-type>
     <button-component class="button-start">Empezar</button-component>
    </div>
    

  <div class="container-hands">
     <play-hands jugada="piedra"></play-hands>
     <play-hands jugada="papel"></play-hands>
     <play-hands jugada="tijera"></play-hands>
  </div>

  
  </div>
  `;

  const button = div.querySelector(".button-start");
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    params.goTo("/instructions");
  });

  return div;
}
