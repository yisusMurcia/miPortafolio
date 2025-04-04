import React from 'react';
import TechComponent from './techComponent';

const ProjectCard = ({projectObj}) => {
    return (
        <div className='project-card' onClick={()=> window.open(projectObj.enlace, "_blank")}>
            <img src={"projects-img/" + (projectObj?.img ? projectObj.img: "default.jpeg")} alt={projectObj.titulo} />
            <h3>{projectObj.titulo}</h3>
            <p>{projectObj.descripcion}</p>
            <TechComponent techs={projectObj.tecnologias}/>
        </div>
    );
}

export default ProjectCard;
