import { state } from "../../state";

export function initScoreComp() {
  class Score extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const style = document.createElement("style");

      style.innerHTML = `

      .container-border{
          height: 300px;
          width: 250px;
          border: solid 6px black;
          border-radius: 12px;
          background-color: white;
          text-align: center;
      }
      .title{
        font-family: 'Odibee Sans', cursive;
        font-size: 55px;
        color: rgb(29, 29, 53);
      }
      .items{
        font-size: 40px;
        font-family: 'Odibee Sans', cursive;
        color: rgb(21, 21, 44);
      } 
      `;
      this.shadow.appendChild(style);
      this.render();
    }
    render() {
      const div = document.createElement("div");
      const scoreState = state.getState().history.gamePrevios;

      div.className = "container-border";
      div.innerHTML = `
       <h2 class="title">Score</h2>
       <h3 class="items">Bot:${scoreState.lost.length}</h3>
       <h3 class="items">You:${scoreState.win.length}</h3>
      
      `;
      this.shadow.appendChild(div);
    }
  }
  customElements.define("score-comp", Score);
}
