import { useState, useEffect } from 'react';
import Header from './componentes/Header';
import './App.css';
import ProjectsSection from './componentes/projectsSection';
import AboutMeSection from './componentes/AboutMeSection';
import projects from './hooks/projects';

function App() {

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