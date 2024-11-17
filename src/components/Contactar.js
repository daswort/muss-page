import React from 'react';
import ReactGA from 'react-ga4';
import ProfileImage from '../images/ps-gema-saldivar.jpg';

const trackButtonClick = () => {
    ReactGA.event({
      category: 'User Interaction',
      action: 'Click',
      label: 'Doctoralia Button Clicked'
    });
  };

const Contactar = () => {
   return (
    <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Ps. Gema Saldívar</h2>
          <p className="hero-description">
          Trabajo desde una orientación integrativa en pro del bienestar integral de las personas en sus aspectos fisiológicos, inconscientes, afectivos, familiares, cognitivos, conductuales y espirituales.
          </p>
          <a
            href="https://www.doctoralia.cl/gema-saldivar/psicologo/providencia" 
            className="cta-button"
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={trackButtonClick}
          >
          Contactar por Doctoralia
        </a>
        </div>
        <div className="hero-image">
          <img src={ProfileImage} alt="Profile" className="responsive-image" />
        </div> {/* Placeholder for image */}
      </section>
  );
};

export default Contactar;
