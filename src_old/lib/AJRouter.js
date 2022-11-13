export default class AJRouter {
  constructor(routes) {
    this.routes = routes;
    this.routerHandler();
  }

  routerHandler() {
    let hash = location.hash.substring(1) || "/";
    let view;
    const { routes } = this;

    for (const route of routes) {
      if (route.path === hash) {
        view = route;
      }
    }
    if (view && view.template) {
      this.loadView(view);
    } else {
      window.location.hash = "#/";
    }
  }

  loadView(view) {
    AJwipo.component("aj-router", {});
    const { name, template } = view;
    const $CONTAINER = document.querySelector("aj-router");
    template();
    $CONTAINER.innerHTML = `<${name}/>`;
  }
}
