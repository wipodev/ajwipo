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
  const AJwipo = function (mount = "#app") {
    this.mount = mount;
  };

  AJwipo.prototype.render = function (component) {
    const $el = document.querySelector(this.mount);
    if (!$el) return;
    const p = new this.prototype.component(component);
    p.prototype.render();

    //$el.innerHTML = component.template(component.data);
    return this;
  };

  AJwipo.prototype.component = function () {
    const Constructor = function (options) {
      this.el = options.el;
      this.data = options.data;
      this.template = options.template;
    };
    Constructor.prototype.render = function () {
      const $el = document.querySelector(this.el);
      if (!$el) return;
      $el.innerHTML = this.template(this.data);
    };
    Constructor.prototype.setState = function (obj) {
      for (let key in obj) {
        if (this.data.hasOwnProperty(key)) {
          this.data[key] = obj[key];
        }
      }
      this.render();
    };
    Constructor.prototype.getState = function () {
      return JSON.parse(JSON.stringify(this.data));
    };
    return Constructor;
  };

  return AJwipo;
});
