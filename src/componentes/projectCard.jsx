import React from 'react';
import TechComponent from './techComponent';

const ProjectCard = ({projectObj}) => {
    return (
        <div className='project-card'>
            <img src={"projects-img/" + (projectObj?.img ? projectObj.img: "default.jpeg")} alt={projectObj.titulo} />
            <h3>{projectObj.titulo}</h3>
            <p>{projectObj.descripcion}</p>
            {
                typeof(projectObj.enlace) == "object"?
                <div>
                    {Object.keys(projectObj.enlace).map(key=><a href={projectObj.enlace.key} target="_blank" rel="noopener noreferrer" key={key}>{key}</a>)}
                </div>
                :
                <a href={projectObj.enlace} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
            }
            <TechComponent techs={projectObj.tecnologias}/>
        </div>
    );
}

export default ProjectCard;