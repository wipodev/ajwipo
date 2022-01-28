import ajwipo from "../lib/ajwipo.js";
import "../components/title.js";

ajwipo.component("aj-about", {
  template: `
    <aj-title></aj-title>
    <p>estas en la pagina aserca de mi</p>
  `,
  style: `
    p{
      color: blue;
    }
  `,
});
