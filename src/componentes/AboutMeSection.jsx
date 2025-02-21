import React from 'react';

const AboutMeSection = () => {
    return (
        <section>
            <h2>Sobre mí</h2>
            <aside className='about-me-container'>
                <div>
                    <h2>Hablidades blandas</h2>
                    <ul id="habilidades-blandas">
                        <li>Resolución de problemas</li>
                        <li>Comunicación</li>
                        <li>Gestión de conflictos</li>
                        <li>Organización bajo presión</li>
                    </ul>            
                </div>
                <img src="public/yisus.jpg" alt="yisus pic"/>
                <p>
                Soy un apasionado y dedicado a la programación, siempre buscando ser la mejor versión de mí mismo.
                Mi interés se extiende a la ciencia, en particular al espacio y la física cuántica.
                Mi memoria y capacidad de pensamiento lógico me permiten resolver problemas de manera analítica,
                sin dejar de lado la creatividad. Disfruto trabajar de forma independiente, pero también tengo experiencia liderando
                equipos para alcanzar objetivos comunes. Abordo los desafíos con calma, siempre en busca de soluciones funcionales y
                optimizándolas a medida que avanzo. Mi mayor miedo es caer en una vida monótona y aburrida, lo que me motiva a
                transformar mi pasión por la programación en una carrera profesional dinámica y emocionante.
                </p>
            </aside>
        </section>
    );
}

export default AboutMeSection;
