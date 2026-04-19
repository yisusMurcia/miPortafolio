import React from 'react';
import ProjectCard from './ProjectCard';
import TechComponent from './techComponent';
import './projectSection.css';


const getTechs =(projects)=>{
    const techSet = new Set();
    techSet.add("All");
    for(let project of projects){//Create set of proyects techs
        techSet.add(...project.tecnologias)
    }

    return Array(...techSet);//return array of techs
}

const ProjectsSection = ({projects}) => {
    const [techFiler, setTechFilter] = React.useState("All");
    return (
        <section>
            <h2>Proyectos</h2>
            <p>Estos son algunos de los proyectos que he realizado.</p>
            <TechComponent techs={getTechs(projects)} setTechFilter={setTechFilter}/>
            <div className='projects-section'>
                {projects.filter(project => techFiler === "All" || project.tecnologias.includes(techFiler)).map(project => (<ProjectCard projectObj={project} />))}   
            </div>
        </section>
    );
}

export default ProjectsSection;
