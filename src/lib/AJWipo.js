((w, d) => {
  "use strict";

  const init = () => {
    let element = null;
    let container = null;
    let router;
    let controladores = {};
    let controlador;

    const AJWipo = {
      $(e) {
        element = d.querySelector(e);
        return this;
      },
      mount(e) {
        this.$(e);
        container = element;
        return this;
      },
      render(view) {
        container.innerHTML = `<${view}/>`;
        return this;
      },
      use(lib) {
        router = lib;
        lib();
        return this;
      },
      actualizar() {
        router();
      },
      preventSubmit() {
        element.addEventListener(
          "submit",
          (e) => {
            e.preventDefault();
          },
          false
        );
        return this;
      },
      component(name, { template, style }) {
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
      },
    };
    return AJWipo;
  };

  if (typeof w.AJWipo === "undefined") {
    w.AJWipo = w.AJ = init();
    w.addEventListener("load", AJ.actualizar, false);
    w.addEventListener("hashchange", AJ.actualizar, false);
  } else {
    console.log("the bookstore is calling again");
  }
})(window, document);
