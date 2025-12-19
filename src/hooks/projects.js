import { useState } from "react";

const projects = [
  {
    titulo: "Estructuras de datos",
    descripcion: "Libreria con varias estructuras de datos en c++ listas para ser implementadas",
    enlace: {
        Github: "https://github.com/yisusMurcia/estructuras-de-datos"
    },
    tecnologias: ["C++"],
    img: null
  },
  {
    titulo: "Recetas",
    descripcion: "Usa la API para crear, modificar, ver y editar recetas",
    enlace: {
        backend:"https://github.com/yisusMurcia/recipes-web",
        frontend: "https://github.com/yisusMurcia/recipes-frontend"
    },
    tecnologias: ["Java"],
    img: "recipes.png"
  },
  {
    titulo: "Matrices y vectores",
    descripcion: "Un paquete para crear e implementar matrices y vectores, además de realizar operaciones con ellos",
    enlace: {GitHub: "https://github.com/yisusMurcia/matricesYVectores"},
    tecnologias: ["Java"]
  },
  {
    titulo: "Visor de imagen",
    descripcion: "Abre imagenes y modificalas a tu gusto",
    enlace: {GitHub: "https://github.com/yisusMurcia/visor-de-imagen"},
    img: "visor-de-imagen.png",
    tecnologias: ["Java"]
  },
  {
    titulo: "Concesionario",
    descripcion: "Un proyecto en Java que simula un concesionario de carros se podrá crear y visualizar modelos de carros",
    enlace: {Github:"https://github.com/yisusMurcia/concesionario"},
    img: "concesionario.png",
    tecnologias: ["Java"]
  },
  {
    titulo: "Frases",
    descripcion: "Un proyecto en react que tras iniciar sesión, muestra frases de diferentes autores",
    enlace: {GitHub: "https://yisusmurcia.github.io/quotes-pages/"},
    img: "quotes-pages.png",
    tecnologias: ["React"]
  },
  {
    titulo: "Pinta figuras",
    descripcion: "Un programa para pintar diferentes figuras de dimensiones aleatorias al hacer click en alguna parte de la ventana y algunas funcionalidades más",
    enlace: {GitHub: "https://github.com/yisusMurcia/dibujoDeFiguras"},
    img: "figures.png",
    tecnologias: ["Java"]
  },
  {
    titulo: "Triqui",
    enlace: {GitHub: "https://github.com/yisusMurcia/triqui"},
    descripcion: "Un código para jugar el famoso juego de triqui o tres en raya, ya sea para jugar con otra persona o contra el algoritmo.", 
    img: "triqui.png",
    tecnologias: ["Python"]
  },
  {
    titulo: "Menu",
    descripcion: "Un app para crear y editar un menu de comida",
    enlace: {GitHub: "https://github.com/yisusMurcia/menu"},
    img: "menu.png",
    tecnologias: ["Java"]
  },
  {
    titulo: "Playlist",
    descripcion: "Un programa para crear y editar una playlist de musica",
    enlace: {GitHub: "https://github.com/yisusMurcia/playlist"},
    img: "playlist.png",
    tecnologias: ["Java"]
  }
];



export default projects;