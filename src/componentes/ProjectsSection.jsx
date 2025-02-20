import React from 'react';
import ProjectCard from './projectCard';
import TechComponent from './techComponent';
import './projectSection.css';


const getTechs =(projects)=>{
    const techSet = new Set();
    for(let project of projects){//Create set of proyects techs
        techSet.add(...project.tecnologias)
    }

    return Array(...techSet);//return array of techs
}

const ProjectsSection = ({projects}) => {
    return (
        <section>
            <h2>Proyectos</h2>
            <p>Estos son algunos de los proyectos que he realizado.</p>
            <TechComponent techs={getTechs(projects)}/>
            <section className='projects-section'>
                {projects.map(project => (<ProjectCard projectObj={project} />))}   
            </section>
        </section>
    );
}

export default ProjectsSection;
