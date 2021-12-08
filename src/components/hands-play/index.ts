const papel = require("url:../../assets/papel.svg");
const piedra = require("url:../../assets/piedra.svg");
const tijera = require("url:../../assets/tijera (1).svg");

export function initHandsPlay() {
  class Hands extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const style = document.createElement("style");
      const attackHover = this.hasAttribute("hover");

      if (attackHover == true) {
        style.innerHTML = `
        
        .hands{
            opacity: 0.8;
        }
        .hands:hover{
            opacity:1;
            width: 90px;
            transition-duration: 0.7s;
        }
        
        `;
      }

      this.shadow.appendChild(style);
      this.render();
    }
    addListeners() {
      const handEl: any = this.shadow.querySelector(".hands");
      const inGame: any = this.getAttribute("in-game");
      if (inGame) {
        handEl.style.width = "180px";
        handEl.style.height = "325px";
      }
    }
    render() {
      const jugada = this.getAttribute("jugada");
      let typeGame = "";
      if (jugada == "papel") {
        typeGame = papel;
      } else if (jugada == "piedra") {
        typeGame = piedra;
      } else {
        typeGame = tijera;
      }

      const div = document.createElement("div");
      div.innerHTML = `

      <div class="hand-cont">

      <img class="hands" src="${typeGame}">


      </div>
      
      
      `;

      this.shadow.appendChild(div);
      this.addListeners();
    }
  }
  customElements.define("play-hands", Hands);
}
