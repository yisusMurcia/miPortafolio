import React from 'react';
import TechComponent from './techComponent';

const ProjectCard = ({projectObj}) => {
    return (
        <div className='project-card'>
            <img src={"projects-img/" + (projectObj?.img ? projectObj.img: "default.jpeg")} alt={projectObj.titulo} />
            <h3>{projectObj.titulo}</h3>
            <p>{projectObj.descripcion}</p>
            {
                <div>
                    {Object.keys(projectObj.enlace).map(key=><a href={projectObj.enlace[key]} target="_blank" key={key}>{key}</a>)}
                </div>
            }
            <TechComponent techs={projectObj.tecnologias}/>
        </div>
    );
}

export default ProjectCard;