import { useState } from "react";

const projects = [
  {
    titulo: "Simulador de asignacion de envios a conductores",
    descripcion: "Programa diseñado para determinar la mejor asignación de envíos (con datos correspondientes a la ciudad de origen, destino y peso) para una serie de conductores, implementando un modelo de simulación de juegos con expectimax para encontrar el mejor camino y un modelo de regresión lineal previamente entrenado para estimar el tiempo de cada trayecto",
    enlace: {
        Github: "https://github.com/yisusMurcia/SmartRouting-IA-simulator"
    },
    tecnologias: ["Python"],
    img: "shipAssigment.webp"
  },
  {
    titulo: "Solucionador de problemas de programación lineal",
    descripcion: "Programa diseñado para resolver problemas de programación lineal utilizando el método simplex gran M o método gráfico, con una interfaz gráfica para facilitar su uso",
    enlace: {
        Github: "https://github.com/yisusMurcia/IO-methods"
    },
    tecnologias: ["Python"],
    img: "linearProgramming.webp"
  },
  {
    titulo: "Algoritmos métodos numéricos",
    descripcion: "Programa diseñado para resolver problemas de métodos numéricos, como interpolación y aproximación de funciones, entre otros",
    enlace: {
        Github: "https://github.com/yisusMurcia/algoritmos-metodos-numericos"
    },
    tecnologias: ["C++"],
    img: null
  },
  {
    titulo: "Simulación de sistema electoral",
    descripcion: "Programa optimizado para consulta, creación y simulación de elecciones presidenciales y a la alcaldía",
    enlace: {
        Github: "https://github.com/yisusMurcia/proyecto-ciencias"
    },
    tecnologias: ["C++"],
    img: "electoralSystem.webp"
  },
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
    img: "recipes.webp"
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
    img: "visor-de-imagen.webp",
    tecnologias: ["Java"]
  },
  {
    titulo: "Concesionario",
    descripcion: "Un proyecto en Java que simula un concesionario de carros se podrá crear y visualizar modelos de carros",
    enlace: {Github:"https://github.com/yisusMurcia/concesionario"},
    img: "concesionario.webp",
    tecnologias: ["Java"]
  },
  {
    titulo: "Frases",
    descripcion: "Un proyecto en react que tras iniciar sesión, muestra frases de diferentes autores",
    enlace: {GitHub: "https://yisusmurcia.github.io/quotes-pages/"},
    img: "quotes-pages.webp",
    tecnologias: ["React"]
  },
  {
    titulo: "Pinta figuras",
    descripcion: "Un programa para pintar diferentes figuras de dimensiones aleatorias al hacer click en alguna parte de la ventana y algunas funcionalidades más",
    enlace: {GitHub: "https://github.com/yisusMurcia/dibujoDeFiguras"},
    img: "figures.webp",
    tecnologias: ["Java"]
  },
  {
    titulo: "Triqui",
    enlace: {GitHub: "https://github.com/yisusMurcia/triqui"},
    descripcion: "Un código para jugar el famoso juego de triqui o tres en raya, ya sea para jugar con otra persona o contra el algoritmo.", 
    img: "triqui.webp",
    tecnologias: ["Python"]
  },
  {
    titulo: "Menu",
    descripcion: "Un app para crear y editar un menu de comida",
    enlace: {GitHub: "https://github.com/yisusMurcia/menu"},
    img: "menu.webp",
    tecnologias: ["Java"]
  },
  {
    titulo: "Playlist",
    descripcion: "Un programa para crear y editar una playlist de musica",
    enlace: {GitHub: "https://github.com/yisusMurcia/playlist"},
    img: "playlist.webp",
    tecnologias: ["Java"]
  }
];



export default projects;