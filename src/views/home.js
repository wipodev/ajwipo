import "../components/title.js";

AJWipo.component("aj-home", {
  template:
    /*html*/
    `
    <aj-title title="titulo desde inicio">hola</aj-title>
    <p>estas en la pagina de Inicio</p>
  `,
  style:
    /*css*/
    `
    p{
      color: blue;
    }
  `,
});
