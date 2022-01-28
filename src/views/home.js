import ajwipo from "../lib/ajwipo.js";
import "../components/title.js";

ajwipo.component("aj-home", {
  template: `
    <aj-title></aj-title>
    <p>estas en la pagina de Inicio</p>
  `,
  style: `
    p{
      color: blue;
    }
  `,
});
