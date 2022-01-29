import routes from "../router/index.js";

export default class ajwipo {
  constructor({ mount = "#app", view, use = undefined }) {
    this.mount = mount;
    this.view = view;
    this.use = use;
    this.render();
  }

  render() {
    let { mount, view, use } = this;
    let page = document.querySelector(mount);
    page.innerHTML = view;
    if (use === "router") {
      routes();
    }
  }

  static component(name, { template, style }) {
    if (customElements.get(name) === undefined) {
      customElements.define(
        name,
        class extends HTMLElement {
          constructor() {
            super();
          }

          connectedCallback() {
            if (name !== "aj-router") {
              this.innerHTML = `<style>${style}</style>`;
              this.innerHTML += template;
            }
          }
        }
      );
    }
  }
}

(() => {
  if (typeof window.ajwipo === "undefined") {
    window.ajwipo = ajwipo;
  }
})();

ajwipo.component("aj-router", {});
