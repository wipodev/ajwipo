// @ts-check

/**
 * @author       Wladimir Perez <ajwipo@gmail.com>
 * @copyright    2022-present AJWipo.
 * @license      https://github.com/AJ-Wi/vuepress-theme-ajwi/blob/main/LICENSE
 * @version      0.1.0
 */
export default class AJWipo {
  /**
   * @param {string} [mount = "#app"] Element where the application will be rendered
   */
  constructor(mount = "#app") {
    this.mount = mount;
  }

  /**
   * Identifies the element where the application will be rendered and loads the view.
   * @param {string} [view="aj-app"] view to load
   * @returns {AJWipo} returns the current instance
   */
  render(view = "aj-app") {
    let { mount } = this;
    let element = AJWipo.getElement(mount);
    if (element) {
      element.innerHTML = `<${view}></${view}>`;
    }
    //let newElement = document.createElement(view);
    //element.parentNode.replaceChild(newElement, element);
    return this;
  }

  /**
   * Run additional libraries.
   * @param {function} lib receive a function as an example AJRouter(routes)
   * @returns {AJWipo} returns the current instance
   */
  use(lib) {
    lib();
    return this;
  }

  /* preventSubmit() {
    this.element.addEventListener(
      "submit",
      (e) => {
        e.preventDefault();
      },
      false
    );
  } */

  /**
   * Returns the first element that is a descendant of node that matches selectors.
   * @param {string} selector element you want search
   * @param {HTMLElement | document} [context = document] context where look for the element
   * @returns {HTMLElement | null} element
   */
  static getElement(selector, context = document) {
    return context.querySelector(selector);
  }

  /**
   * Returns all element descendants of node that match selectors.
   * @param {string} selector element you want search
   * @param {HTMLElement | document} [context = document] context where look for the element
   * @returns {NodeList} array of elements
   */
  static getElementAll(selector, context = document) {
    return context.querySelectorAll(selector);
  }

  /* // tests to create a store
  static createStore(store) {
    if (typeof window.Store === "undefined") {
      window.Store = store;
    } else {
      console.log("the store is being called again");
    }
  } */

  /**
   * function that creates the webComponents
   * @param {string} name name of the webComponent
   * @param {{template: string, script: object, style: string}} template template, script and style of the webComponent
   * @returns {void}
   */
  static component(name, { template, script, style }) {
    // I check if the component is already created or not
    if (customElements.get(name) === undefined) {
      // define component with the name and the template
      customElements.define(
        name,
        /**
         * component class
         * @extends {HTMLElement} extends the HTMLElement class
         * @returns {void} returns the component
         * @constructor creates the component
         * @this {HTMLElement} this is the component
         * @param {HTMLElement} this is the component
         * @param {object} props properties of the component
         */
        class extends HTMLElement {
          constructor() {
            super();
            /**
             * @type {object} props properties of the component
             */
            this.props = {};
          }

          static get observedAttributes() {
            if (script !== undefined) {
              if (script.props !== undefined) return script.props;
            }
          }

          /**
           * @param {string} name name of the attribute
           * @param {*} oldValue old value of the prop
           * @param {*} newValue new value of the prop
           * @returns {void}
           */
          attributeChangedCallback(name, oldValue, newValue) {
            this.props[name] = newValue;
          }

          /**
           * @param {object} obj object to check
           * @returns {boolean} true if the object is empty
           */
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
              this.addTemplate(token);

              if (script !== undefined) {
                if (script.data !== undefined) script.data();
                if (script.methods !== undefined) script.methods();
                if (script.created !== undefined) script.created();
              }
            }
          }

          /**
           * build and add the template to the component
           * @param {string} token token of the component
           * @returns {void}
           */
          addTemplate(token) {
            let tmp = template;

            if (!this.isObjEmpty(this.props)) {
              tmp = this.replaceProps(tmp);
            }

            if (this.innerHTML !== "") {
              tmp = tmp.replace(this.regExp("slot"), this.innerHTML);
              this.innerHTML = "";
            } else {
              tmp = this.replaceSlot(tmp);
            }

            this.appendChild(this.applyStyleScopeHTML(tmp, token));
          }

          /**
           * replace the props in the template
           * @param {string} tmp template to replace the props
           * @returns {string} template with the props replaced
           */
          replaceProps(tmp) {
            for (const prop in this.props) {
              tmp = tmp.replace(this.regExp("prop", prop), this.props[prop]);
              this.removeAttribute(prop);
            }
            return tmp;
          }

          /**
           * replace the slot in the template
           * @param {string} tmp template to replace the slot
           * @returns {string} template with the slot replaced
           */
          replaceSlot(tmp) {
            let start = tmp.search("<slot>") + 6;
            let end = tmp.search("</slot>");
            return tmp.replace(this.regExp("slot"), tmp.substring(start, end));
          }

          /**
           * apply the style scope to the template
           * @param {string} tmp template
           * @param {string} token token of the component
           * @returns {DocumentFragment} document fragment
           */
          applyStyleScopeHTML(tmp, token) {
            let fragment = document.createRange().createContextualFragment(tmp);

            /**
             * Set class to element
             * @param {Element} node
             * @returns {void}
             */
            const setClass = (node) => {
              node.classList.add(token);
              if (node.childElementCount) {
                for (let i = 0; i < node.children.length; i++) {
                  setClass(node.children[i]);
                }
              }
            };
            for (let i = 0; i < fragment.children.length; i++) {
              if (fragment.children[i].tagName !== "AJ-ROUTER") {
                setClass(fragment.children[i]);
              }
            }
            return fragment;
          }

          /**
           * inject the style to the page
           * @param {string} token name of the component
           * @returns {void}
           */
          injectStyle(token) {
            if (style !== undefined) {
              let head = document.querySelector("head");

              if (head !== null) {
                if (
                  head.querySelector(`style[data-token="${token}"]`) === null
                ) {
                  style = this.applyStyleScopeCSS(token);
                  head.innerHTML += `<style data-token=${token}>${style}</style>`;
                }
              }
            }
          }

          /**
           * apply the style scope to the css
           * @param {string} token token of the component
           * @returns {string}  CSS with the style scope
           */
          applyStyleScopeCSS(token) {
            const stylesheet = new CSSStyleSheet();
            let result = "";
            // @ts-ignore
            stylesheet.replaceSync(style);

            for (const rule of stylesheet.cssRules) {
              // @ts-ignore
              if (!rule.selectorText) {
                if (rule.cssText.substring(0, 4) !== "@key") {
                  // @ts-ignore
                  for (const subRule of rule.cssRules) {
                    this.editRule(subRule, token);
                  }
                }
              } else {
                this.editRule(rule, token);
              }
              result += rule.cssText;
            }
            return result;
          }

          /**
           * @param {CSSRule} rule CSS rule
           * @param {string} token token of the component
           * @returns {void}
           */
          editRule(rule, token) {
            const p = ".:>";
            // @ts-ignore
            let selector = rule.selectorText.split(/[,\s]/);
            for (let i = 0; i < selector.length; i++) {
              if (selector[i] !== "") {
                for (let j = 0; j < p.length; j++) {
                  selector[i] =
                    selector[i].substring(0, 1) +
                    selector[i].substring(1).replace(p[j], `.${token}${p[j]}`);
                }
                if (
                  selector[i].search(`.${token}`) === -1 &&
                  selector[i].search(`[)]`) === -1
                ) {
                  selector[i] += `.${token}`;
                }
              } else {
                selector[i] = ",";
              }
              // @ts-ignore
              rule.selectorText = selector.join(" ");
            }
          }

          /**
           * generate regular expression
           * @param {string} exp expression to search
           * @param {string} prop
           * @returns {RegExp} regular expression
           */
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

  /**
   * get the token of the component
   * @param {string} data name of the component
   * @returns {string} token of the component
   */
  static getToken(data) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let token = "";
    let seed = 0;

    // get the seed
    for (let i = 0; i < data.length; i++) {
      seed += data.charCodeAt(i);
    }
    seed = parseFloat("0." + seed);

    // generate the token
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
  // @ts-ignore
  if (typeof w.AJWipo === "undefined") {
    // @ts-ignore
    w.AJWipo = w.AJ = AJWipo;
  } else {
    console.log("the bookstore is calling again");
  }
})(window);
