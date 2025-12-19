import React from 'react';

const getItemEl = (tech)=>{//Obtener el icono de cada tecnología empleada
    switch(tech){
        case "React":
            return <i className="fa-brands fa-react icon"></i>;
        case "Java":
            return <i className="fa-brands fa-java icon"></i>;
        case "Python":
            return <i className="fa-brands fa-python icon"></i>;
        default:
            return <i className="fa-solid fa-code"></i>
    }
}
const TechComponent = ({techs}) => {
    return (
        <div className='techs-div'>
            {techs.map((tech)=> 
                <span className='icon-and-label'>
                    {getItemEl(tech)}
                    <p>{tech}</p>
                </span>
            )}
        </div>
    );
}

export default TechComponent;
