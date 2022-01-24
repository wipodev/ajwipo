export default function Rigup({ name, template, style, script }) {
  if (customElements.get(name) === undefined) {
    customElements.define(
      name,
      class extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: "open" });
        }
        connectedCallback() {
          this.shadowRoot.innerHTML = style;
          this.shadowRoot.innerHTML += template;
          this.shadowRoot.innerHTML += script;
        }
      }
    );
  }
}
