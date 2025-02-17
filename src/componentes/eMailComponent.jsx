import React from 'react';

const EMailComponent = () => {
    return (
        <nav id='email'>
            <a href="mailto:yisusMurci@gmail.com"><i className="fa-regular fa-envelope icon"></i></a>
            <p>yisusmurci@gmail.com</p>
            <button className='icon-and-label'>
                <i className="fa-solid fa-copy"></i>
                Copiar
            </button>
        </nav>
    );
}

export default EMailComponent;
