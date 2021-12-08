export function initTextTypeComp() {
  class TextType extends HTMLElement {
    shadow: ShadowRoot;
    tags: string[] = ["h1", "h2", "p"];
    tag: string = "p";
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const variant = this.getAttribute("variant");

      if (this.tags.includes(this.getAttribute("tag"))) {
        this.tag = this.getAttribute("tag") || this.tag;
      }
      const style = document.createElement("style");
      style.innerHTML = `
      .type-h1{
        font-family: 'Odibee Sans', cursive;
        font-size: 80px;
        color: silver;

      }
      .type-h2{
        font-size: 40px;
        font-family: 'Odibee Sans', cursive;
        color: silver;
        
      }
      .type-p{
        font-size: 16px;
        color: aqua;
      }
      
      
      `;

      const div = document.createElement(this.tag);
      div.className = variant;
      div.textContent = this.textContent;
      this.shadow.appendChild(style);

      this.shadow.appendChild(div);
    }
  }
  customElements.define("text-type", TextType);
}
