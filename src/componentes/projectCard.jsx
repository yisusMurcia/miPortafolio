import React from 'react';

const ProjectCard = ({projectObj}) => {
    return (
        <div className='project-card' onClick={()=> window.open(projectObj.enlace, "_blank")}>
            <img src={projectObj?.img? "public/projects-img/"+ projectObj.img: "public/projects-img/default.jpeg"} alt={projectObj.titulo} />
            <h3>{projectObj.titulo}</h3>
            <p>{projectObj.descripcion}</p>
        </div>
    );
}

export default ProjectCard;
