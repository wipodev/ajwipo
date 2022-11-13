import AJRouter from "../lib/AJRouter.js";

const routes = [
  {
    path: "/",
    name: "aj-home",
    template: () => {
      import("../views/home.js");
    },
  },
  {
    path: "/about",
    name: "aj-about",
    template: () => {
      import("../views/about.js");
    },
  },
  {
    path: "/contact",
    name: "aj-contact",
    template: () => {
      import("../views/contact.js");
    },
  },
];

export default () => {
  new AJRouter(routes);
};
