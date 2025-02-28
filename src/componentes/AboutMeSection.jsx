import React from 'react';
import './AboutMeSection.css';

const AboutMeSection = () => {
    return (
        <section>
            <h2>Sobre mí</h2>
            <aside className='about-me-container'>
                <p>
                    Apasionado por la programación y la ciencia, siempre en busca de crecimiento y nuevos desafíos.
                    Destaco por mi pensamiento lógico y analítico, sin dejar de lado la creatividad. Disfruto trabajar de forma independiente,
                    pero también sé liderar equipos para alcanzar objetivos.
                    Mi mayor miedo es la monotonía, por eso busco una carrera dinámica que me rete constantemente.
                </p>
                <img src="yisus.jpg" alt="yisus pic"/>
                <span className="more-info">
                Conoce más de mí:
                <a href="https://bento.me/yisusm">
                    <i class="fa-solid fa-address-card icon"></i>
                </a>
                </span>
            </aside>
        </section>
    );
}

export default AboutMeSection;
