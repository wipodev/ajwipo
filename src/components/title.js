AJWipo.component("aj-title", {
  template:
    /*html*/
    `
    <h1><slot>prueba de slot</slot></h1>
    <h2>{{title}}</h2>
    <div class="tarjeta flex" data-pepe="j">
      <h2 class="tarjeta-titulo center">titulo de tarjeta</h2>
      <p class="tarjeta-descripcion">descripción de la tarjeta</p>
    </div>
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

    .tarjeta{
      width: 150px;
      height: 300px;
      background-color: blue;
      color: #fff;
    }
    
    div[data-pepe="j"]{
      border: 2px solid red;
    }

    .tarjeta.flex .tarjeta-titulo.center{
      font-size: 2rem;
    }

    .tarjeta .tarjeta-titulo{
      font-size: 1.6rem;
      text-align: center;
    }

    .tarjeta-titulo.center{
      text-align: center;
    }

    .tarjeta .tarjeta-descripcion{
      width: 90%;
    }

    .tarjeta-titulo, .tarjeta-descripcion{
      color: #fff;
    }

  `,
});
