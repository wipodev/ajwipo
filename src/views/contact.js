import ajwipo from "../lib/ajwipo.js";
import "../components/title.js";

ajwipo.component("aj-contact", {
  template:
    /*html*/
    `
    <aj-title></aj-title>
    <p>estas en la pagina de contactos</p>
  `,
  style:
    /*css*/
    `
    p{
      color: blue;
    }
  `,
});
