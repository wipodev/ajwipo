import AJWipo from "./lib/AJWipo.js";
import Router from "./router/index.js";
import "./app.js";

const AJwipo = () => new AJWipo("#pepe").render("aj-app").use(Router);

document.addEventListener("DOMContentLoaded", AJwipo);
window.addEventListener("hashchange", AJwipo);
