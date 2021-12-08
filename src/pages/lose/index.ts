const lose = require("url:../../assets/coffee-simpsons.gif");

export function initLosePage(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  
  
  <div class="lose-container">
  <img class="img-el" src="${lose}">
  <score-comp></score-comp>
  <button-component class="button-restart">Volver a jugar</button-component>
  </div>`;

  const buttonRestart = div.querySelector(".button-restart");
  buttonRestart.addEventListener("click", () => {
    params.goTo("/game");
  });

  return div;
}
