export default class ajwipo {
  constructor({ mount, routes }) {
    this.mount = mount;
    this.routes = routes;
  }

  loadPage(route) {
    const { path, template } = route;
    const $CONTAINER = document.querySelector("#content");
    Rigup(template);
    $CONTAINER.innerHTML = `<${template.name}/>`;
    window.history.pushState({}, "done", "#" + path);
  }

  Rigup({ name, template, style, script }) {
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
}
