import "./lib/AJWipo.js";
import Router from "./router/index.js";
import "./app.js";

AJWipo.mount("#pepe").render("aj-app").use(Router);
