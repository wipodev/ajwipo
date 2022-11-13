AJWipo.createStore({
  state: {
    dato1: "dato1",
  },
  mutations: {
    setDato1(str) {
      Store.state.dato1 = str;
    },
  },
});
