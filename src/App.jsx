import { useState, useEffect } from 'react';
import Header from './componentes/Header';
import './App.css';
import getProyects from './api/getProyects';
import ProjectsSection from './componentes/projectsSection';
import AboutMeSection from './componentes/AboutMeSection';

function App() {
  const [projects, setProjects] = useState(null);
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
      {projects != null? <ProjectsSection projects={projects} />: <p>Cargando proyectos...</p>} {//Check if projects are loaded
      }
      <AboutMeSection />
    </>
  )
}

export default App