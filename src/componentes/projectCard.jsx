import React from 'react';

const ProjectCard = ({projectObj}) => {
    return (
        <div className='project-card'>
            <img src={"public/projects-img/"+ projectObj.img} alt={projectObj.titulo} />
            <h3>{projectObj.titulo}</h3>
            <p>{projectObj.descripcion}</p>
        </div>
    );
}

export default ProjectCard;
