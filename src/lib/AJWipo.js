export default class AJWipo {
  constructor(mount = "#app") {
    this.mount = mount;
  }

  render(view) {
    let { mount } = this;
    let page = document.querySelector(mount);
    page.innerHTML = `<${view}/>`;
    return this;
  }

  use(lib) {
    lib();
    return this;
  }

  preventSubmit() {
    this.element.addEventListener(
      "submit",
      (e) => {
        e.preventDefault();
      },
      false
    );
  }

  static getElement(selector, context = document) {
    return context.querySelector(selector);
  }

  static getElementAll(selector, context = document) {
    return context.querySelectorAll(selector);
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
              if (style !== undefined) {
                this.innerHTML = `<style>${style}</style>`;
              }
              this.innerHTML += template;
              if (script !== undefined) {
                if (script.data !== undefined) script.data();
                if (script.methods !== undefined) script.methods();
                if (script.created !== undefined) script.created();
              }
            }
          }
        }
      );
    }
  }
}

((w) => {
  "use strict";

  if (typeof w.AJWipo === "undefined") {
    w.AJWipo = w.AJ = AJWipo;
  } else {
    console.log("the bookstore is calling again");
  }
})(window);
