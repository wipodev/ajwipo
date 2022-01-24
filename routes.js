import Router from "./router.js";
import home from "./home.js";
import about from "./about.js";
import contact from "./contact.js";

const routes = [
  {
    path: "/",
    template: home,
  },
  {
    path: "/about",
    template: about,
  },
  {
    path: "/contact",
    template: contact,
  },
  {
    path: "/error",
    template: `<h1> Error</h1>`,
  },
];

export default () => {
  new Router(routes);
};
