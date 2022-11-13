AJWipo.component("aj-app", {
  template:
    /*html*/
    `
    <a href="#/">home</a>
    <a href="#/about">about</a>
    <a href="#/contact">contact</a>
    <aj-router/>
  `,
  style:
    /*css*/
    `
  aj-app a {
    color: red;
  }
  `,
});
