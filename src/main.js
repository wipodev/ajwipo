import ajwipo from "./lib/ajwipo.js";
import "./app.js";

const AJwipo = () => {
  new ajwipo({
    view: "<aj-app>",
    use: "router",
  });
};

document.addEventListener("DOMContentLoaded", AJwipo);
window.addEventListener("hashchange", AJwipo);
