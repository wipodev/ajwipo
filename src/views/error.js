import ajwipo from "../lib/ajwipo.js";
import "../components/title.js";

ajwipo.component("aj-error", {
  template: `
    <aj-title></aj-title>
    <p>estas en la pagina de Error</p>
  `,
  style: `
    p{
      color: red;
    }
  `,
});
