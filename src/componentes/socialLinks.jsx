import React from 'react';
import './socialLinks.css';
import EMailComponent from './eMailComponent';

const SocialLinks = () => {
    return (
        <ul className='social-links'>
            <li><a href="https://github.com/yisusMurcia" target="_blank" ><i className="fa-brands fa-github icon"></i></a></li>
            <EMailComponent />
            <li><a href="https://www.linkedin.com/in/jesus-murcia-guzman-8b1b1b1b1/" target="_blank" ><i className="fa-brands fa-linkedin-in icon"></i></a></li>
        </ul>
    );
}

export default SocialLinks;
