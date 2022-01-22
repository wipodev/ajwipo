import Router from "./router.js";

const routes = [
  {
    path: "/",
    template: `<h1>🏠 Home</h1>`,
  },
  {
    path: "#about",
    template: `<h1>👩🏻‍💻 Sobre mi</h1>`,
  },
  {
    path: "#contact",
    template: `<h1>📱 Contacto</h1>`,
  },
  {
    path: "#error",
    template: `<h1> Error</h1>`,
  },
];

const ROUTER = new Router(routes);
