import ajrouter from "../lib/ajrouter.js";

const routes = [
  {
    path: "/",
    template: `<aj-home/>`,
  },
  {
    path: "/about",
    template: `<aj-about/>`,
  },
  {
    path: "/contact",
    template: `<aj-contact/>`,
  },
  {
    path: "/error",
    template: `<aj-error/>`,
  },
];

export default () => {
  new ajrouter(routes);
};
