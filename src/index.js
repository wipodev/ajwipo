import style from "./style.css";
import logo from "./assets/img/logo.png";

const arr = [1, 2, 3, 4, 5];

const codeESNext = () => console.log(...arr);

console.log("pepe");

codeESNext();

document.querySelector("#app").innerHTML = `<img src="${logo}" alt="logo" />`;
