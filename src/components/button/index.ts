export function buttonComponent() {
  class Button extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const style = document.createElement("style");

      style.innerHTML = `
      
      .button-comp{
        font-family: 'Odibee Sans', cursive;
        background-color: #102626;
        height: 84px;
        width: 364px;
        font-size: 45px;
        border: solid 6px #00fff9;
        color: silver;
        border-radius: 6px ;
      }
      
      `;
      this.shadow.appendChild(style);

      this.render();
    }
    render() {
      const button = document.createElement("button");
      button.textContent = this.textContent;

      button.className = "button-comp";
      this.shadow.appendChild(button);
    }
  }
  customElements.define("button-component", Button);
}
