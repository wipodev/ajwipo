/*((w, d) => {
  "use strict";

  const init = () => {
    let elemento = null,
      marco = null,
      rutas = {},
      controladores = {},
      controlador;

    const ajwipo = {
      getID(id) {
        elemento = d.querySelector(id);
        return this;
      },
      noSubmit() {
        elemento.addEventListener(
          "submit",
          (e) => {
            e.preventDefault();
          },
          false
        );
        return this;
      },
      enrutar() {
        marco = elemento;
        return this;
      },
      ruta(ruta, plantilla, controlador, carga) {
        rutas[ruta] = {
          plantilla,
          controlador,
          carga,
        };
        return this;
      },
      manejadorRutas() {
        let hash = w.location.hash.substring(1) || "/";
        let destinos = rutas[hash];
        let xhr = new XMLHttpRequest();

        if (destino && destinos.plantilla) {
          xhr.addEventListener(
            "load",
            () => {
              marco.innerHTML = this.responseText;
            },
            false
          );
          xhr.open("get", detinos.plantilla, true);
          xhr.send(null);
        } else {
          w.location.hash = "#/";
        }
      },
    };
    return ajwipo;
  };

  if (typeof w.ajwipo === "undefined") {
    w.ajwipo = init();
    w.addEventListener("load", ajwipo.manejadorRutas, false);
    w.addEventListener("hashchange", ajwipo.manejadorRutas, false);
  } else {
    console.log("the bookstore is calling again");
  }
})(window, document);*/

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

((w) => {
  "use strict";

  if (typeof w.AJWipo === "undefined") {
    w.AJWipo = w.AJ = AJWipo;
  } else {
    console.log("the bookstore is calling again");
  }
})(window);
