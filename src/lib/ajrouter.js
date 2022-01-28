export default class Router {
  constructor(routes) {
    this.routes = routes;
    this.loadRoute(location.hash);
  }

  loadRoute(hash = "") {
    const { routes } = this;
    for (const route of routes) {
      if ("#" + route.path === hash) {
        this.loadPage(route);
        break;
      }
      if (route.path === "/" && hash === "") {
        this.loadPage(route);
        break;
      }
      if (route.path === "/error" && hash !== "") {
        this.loadPage(route);
        break;
      }
      if (route.path === "/error" && hash === "") {
        this.loadPage(route);
        break;
      }
    }
  }

  loadPage(route) {
    const { path, template } = route;
    const $CONTAINER = document.querySelector("aj-router");
    $CONTAINER.innerHTML = template;
    window.history.pushState({}, "done", "#" + path);
  }
}
