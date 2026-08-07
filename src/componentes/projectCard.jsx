import React from 'react';
import TechComponent from './techComponent';

const ProjectCard = ({projectObj}) => {
    const projectId = projectObj.titulo.replaceAll(" ", "-").toLowerCase();
    return (
        <>
            <div className='project-card' background = {"projects-img/" + (projectObj?.img ? projectObj.img: "default.webp")}>
                <h2>{projectObj.titulo}</h2>
                <button command="show-modal" commandFor= {projectId}>Detalles</button>
            </div>
            <dialog id={projectId} className='frosted-card'>
                <h2>{projectObj.titulo}</h2>
                <br/>
                <p>{projectObj.descripcion}</p>
                <br />
                <div>
                    {Object.keys(projectObj.enlace).map(key=><a href={projectObj.enlace[key]} target="_blank" key={key}>{key}</a>)}
                </div>
                <TechComponent techs={projectObj.tecnologias}/>
                <button command="close" commandFor= {projectId} className='close-btn'>
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </dialog>

        </>
    );
}

export default ProjectCard;