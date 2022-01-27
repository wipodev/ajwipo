import ajwipo from "./lib/ajwipo";
import routes from "./router/index";

new ajwipo({
  mount: "#content",
  routes,
});

//document.addEventListener("DOMContentLoaded", ajwipo);
//window.addEventListener("hashchange", ajwipo);
