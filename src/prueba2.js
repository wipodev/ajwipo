(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    global.AJwipo = factory();
  }
})(this, function () {
  "use strict";
  class AJwipo {
    constructor(mount = "#app") {
      this.VERSION = "1.0.0";
      this.mount = mount;
      this.componentObj = {};
    }
    render(view = "aj-app") {
      let { mount } = this;
      let element = document.querySelector(mount);
      if (element) {
        element.innerHTML = `<${view}></${view}>`;
      }
      return this;
    }

    static component(name, { template, script, style }) {
      document.addEventListener("DOMContentLoaded", () => {
        let el = document.querySelector(name);
        let temp = document.createElement("div");
        temp.setAttribute("id", name);
        temp.innerHTML = template;
        el.parentNode.replaceChild(temp, el);
        console.log(this.component);
      });
    }
  }
  return AJwipo;
});
