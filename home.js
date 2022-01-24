export default {
  name: "aj-home",
  /*html*/
  template: `
    <div class="titulo">
        <h1>Hola Mundo</h1>
        <p>Bienvenidos a mi web, esto es una prueba de un web components</p>
    </div>
  `,
  /*javascript*/
  script: `
    <script type="text/javascript">
        console.log("esto es javascript")
    </script>
  `,
  /*css*/
  style: `
  <style>
    .titulo{
        background-color: #00ff00;
    }
    h1{
        color: #0000ff;
    }
    p{
        color: var(--amarillo);
    }
    </style>
  `,
};
