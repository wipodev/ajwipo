AJWipo.component("aj-title", {
  template:
    /*html*/
    `
    <h1>Hola soy un componente</h1>
    <h2>{{title}}</h2>
  `,
  script: {
    props: ["title"],
  },
  style:
    /*css*/
    `
    h1{
      color: red;
      font-size: 1.5rem;
    }

    h2{
      color: blue;
      font-size: 1.5rem;
    }
  `,
});
