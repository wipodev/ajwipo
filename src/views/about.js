import "../components/title.js";

AJWipo.component("aj-about", {
  template:
    /*html*/
    `
    <aj-title title="titulo desde about"></aj-title>
    <p>estas en la pagina acerca de mi</p>
  `,
  style:
    /*css*/
    `
    p{
      color: blue;
    }
  `,
});
