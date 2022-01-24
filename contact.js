export default {
  name: "aj-contact",
  /*html*/
  template: `
    <div class="titulo">
        <h1>Contact</h1>
        <p>Hola esta es la pagina de 📱 Contacto</p>
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
