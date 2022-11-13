AJwipo.component("aj-title", {
  template:
    /*html*/
    `
    <h1><slot>prueba de slot</slot></h1>
    <h2>{{title}}</h2>
    <div class="tarjeta flex" data-pepe="j">
      <h2 class="tarjeta-titulo center">titulo de tarjeta <span>pepe</span></h2>
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

    .tarjeta::before{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 10%;
      height: 10%;
      background-color: #888;
    }
     
    .tarjeta:hover{
      background-color: red;
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

    @media (max-width: 768px){
      .tarjeta{
        width: 100%;
        height: auto;
      }

      .tarjeta .tarjeta-titulo{
        font-size: 1.5rem;
      }

       .tarjeta-titulo.center{
        text-align: left;
       }
       .tarjeta-titulo, .tarjeta-descripcion{
        color: red;
       }
    }

    @keyframes turn1{
      to{
        transform: rotate(1turn);
      }
    }

    .tarjeta:is(:hover, :focus-within) {
    background-position: 0;
  }

  .tarjeta:is(:hover, :focus-within) h2 {
    color: yellow;
  }

  .tarjeta:is(:hover, :focus-within) h2 span {
    color: blue;
  }

  `,
});
