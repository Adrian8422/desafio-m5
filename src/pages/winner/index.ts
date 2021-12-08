const winner = require("url:../../assets/lenny.jpg");

export function initWinnerPage(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  
  <div class="winner-container">
  <img class="img-el" src="${winner}">
  <score-comp></score-comp>
  <button-component class="button-restart">Volver a jugar</button-component>
  </div>
  
  `;

  const button = div.querySelector(".button-restart");
  button.addEventListener("click", () => {
    params.goTo("/game");
  });

  return div;
}
