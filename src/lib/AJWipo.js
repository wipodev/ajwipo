/**
 * @author       Wladimir Perez <ajwipo@gmail.com>
 * @copyright    2022-present AJWipo.
 * @license      @link https://opensource.org/licenses/MIT|MIT License
 */

export default class AJWipo {
  constructor(mount = "#app") {
    this.mount = mount;
  }

  // load the view on the page
  render(view) {
    let { mount } = this;
    let page = document.querySelector(mount);
    page.innerHTML = `<${view}/>`;
    return this;
  }

  // run additional libraries, example router
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

  // tests to create a store
  static createStore(store) {
    if (typeof window.Store === "undefined") {
      window.Store = store;
    } else {
      console.log("the store is being called again");
    }
  }

  // function that creates the webComponents
  static component(name, { template, script, style }) {
    // I check if the component is already created
    if (customElements.get(name) === undefined) {
      // define component
      customElements.define(
        //component name
        name,
        //component class
        class extends HTMLElement {
          constructor() {
            super();
            this.props = {};
          }

          static get observedAttributes() {
            if (script !== undefined) {
              if (script.props !== undefined) return script.props;
            }
          }

          attributeChangedCallback(name, oldValue, newValue) {
            this.props[name] = newValue;
          }

          isObjEmpty(obj) {
            for (var prop in obj) {
              if (obj.hasOwnProperty(prop)) return false;
            }
            return true;
          }

          connectedCallback() {
            if (name !== "aj-router") {
              let token = "aj-" + AJWipo.getToken(name);
              this.injectStyle(token);
              this.addTemplate();

              if (script !== undefined) {
                if (script.data !== undefined) script.data();
                if (script.methods !== undefined) script.methods();
                if (script.created !== undefined) script.created();
              }
            }
          }
          /***********************  falta agregar el token como clase en el html************************ */
          addTemplate() {
            let tmp = template;

            if (!this.isObjEmpty(this.props)) {
              tmp = this.replaceProps(tmp);
            }

            if (this.innerHTML !== "") {
              tmp = tmp.replace(this.regExp("slot"), this.innerHTML);
            } else {
              tmp = this.replaceSlot(tmp);
            }

            this.innerHTML = tmp;
          }

          replaceProps(tmp) {
            for (const prop in this.props) {
              tmp = tmp.replace(this.regExp("prop", prop), this.props[prop]);
              this.removeAttribute(prop);
            }
            return tmp;
          }

          replaceSlot(tmp) {
            let start = tmp.search("<slot>") + 6;
            let end = tmp.search("</slot>");
            return tmp.replace(this.regExp("slot"), tmp.substring(start, end));
          }

          injectStyle(token) {
            if (style !== undefined) {
              let head = document.querySelector("head");
              let exist = false;

              head.childNodes.forEach((node) => {
                if (node.tagName === "STYLE") {
                  if (node.dataset.token === token) {
                    exist = true;
                  }
                }
              });

              if (!exist) {
                //style = this.applyStyleScope(token, style);
                head.innerHTML += `<style data-token=${token}>${style}</style>`;
              }
            }
          }

          applyStyleScope(token) {
            let styleLoaded = new CSSStyleSheet();
            let result = "";

            styleLoaded.replaceSync(style);

            for (const rule of styleLoaded.cssRules) {
              rule.selectorText = rule.selectorText + "." + token;
              result += rule.cssText;
            }
            return result.replace(/ /g, "");
          }

          regExp(exp, prop = "") {
            if (exp === "prop") {
              return new RegExp(`{{${prop}}}`, "gi");
            } else if (exp === "slot") {
              return new RegExp(`<slot>([A-Z0-9 \-_\.,])+<\/slot>`, "i");
            } else {
              return new RegExp(exp, "i");
            }
          }
        }
      );
    }
  }

  static getToken(data) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let token = "";
    let seed = 0;

    for (let i = 0; i < data.length; i++) {
      seed += data.charCodeAt(i);
    }
    seed = parseFloat("0." + seed);

    for (let i = 0; i < 8; i++) {
      let char = seed * chars.length;
      token += chars[Math.floor(char)];
      seed = char % 1;
    }
    return token;
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
