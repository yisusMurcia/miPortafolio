import React from 'react';
import TechComponent from './techComponent';

const ProjectCard = ({projectObj}) => {
    const projectId = projectObj.titulo.replaceAll(" ", "-").toLowerCase();
    return (
        <>
<<<<<<< HEAD
            <div className='project-card' style={{ backgroundImage: `url(${import.meta.env.BASE_URL}/projects-img/${projectObj.img || "default.webp"})` }}>
=======
            <div className='project-card' background = {"projects-img/" + (projectObj?.img ? projectObj.img: "default.webp")}>
>>>>>>> da9bb6841b6df7600801d535f9d1a9bb6af4dce4
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
<<<<<<< HEAD
                    <i className="fa-solid fa-xmark"></i>
=======
                    <i class="fa-solid fa-xmark"></i>
>>>>>>> da9bb6841b6df7600801d535f9d1a9bb6af4dce4
                </button>
            </dialog>

        </>
    );
}

export default ProjectCard;