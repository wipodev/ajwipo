import ajwipo from "./lib/ajwipo.js";
import "./views/home.js";
import "./views/about.js";
import "./views/contact.js";
import "./views/error.js";

ajwipo.component("aj-app", {
  template:
    /*html*/
    `
    <a href="#/">home</a>
    <a href="#/about">about</a>
    <a href="#/contact">contact</a>
    <aj-router/>
  `,
});
