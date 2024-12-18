// Escribimos este archivo con la tecnica UpperCamelCase porque es un componente, pero no va en la carpeta 
// componentes ya que es el componente padre de la aplicacion (mas que nada en REACT se suele escribir los componentes en UpperCamelCase)


import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { infiniteScroll } from "./helpers/infinite_scroll.js";

export function App(){
    const $root = document.getElementById("root");

    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());

    Router();
    infiniteScroll();
}