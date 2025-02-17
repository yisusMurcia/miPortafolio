import { useState, useEffect } from 'react';
import Header from './componentes/Header';
import './App.css';

function App() {
  const [proyects, setProjects] = useState([]);
  //Load proyects
  async function loadProjects() {
    try {
        const res = await fetch("/src/assets/projects.json");
        if (!res.ok) {
            throw new Error("Error al cargar los datos");
        }
        const data = await res.json();
        setProjects(await data.proyectos);
        return data;
    } catch (error) {
        console.error("Error en loadProjects:", error);
        return null;
    }
}


  useEffect(() => {
    loadProjects();
  }, []);

  console.log(proyects)
  return (
    <>
      <Header />
    </>
  )
}

export default App
