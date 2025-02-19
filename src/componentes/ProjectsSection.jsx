import React from 'react';
import ProjectCard from './projectCard';

const ProjectsSection = ({projects}) => {
    return (
        <section>
            <h2>Proyectos</h2>
            <p>Estos son algunos de los proyectos que he realizado.</p>
            <div className='projects-section'>
                {projects.map(project => (<ProjectCard projectObj={project} />))}   
            </div>
        </section>
    );
}

export default ProjectsSection;
