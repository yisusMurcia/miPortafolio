import { useState, useEffect } from 'react';
import Header from './componentes/Header';
import './App.css';
import getProyects from './api/getProyects';

function App() {
  const [proyects, setProjects] = useState([]);
  //Load proyects
  async function loadProjects() {
    try {
      setProjects(await getProyects());
    } catch (error) {//Manejar error en caso de que no se pueda cargar los proyectos
      console.error("Error en loadProjects:", error);
      return null;
    }
}


  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <>
      <Header />
    </>
  )
}

export default App