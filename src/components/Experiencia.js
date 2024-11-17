import React from 'react';

import { FaCheckCircle } from "react-icons/fa";

const experiences = [
    { number: "(1)", title: "INFANTES", description: "Psicóloga comunitaria en Residencia de niñas nuestra señora de la Paz RED SENAME." },
    { number: "(2)", title: "FAMILIA", description: "Psicóloga clínica en Coorporación de desarrollo integral de la familia." },
    { number: "(3)", title: "ADICCIONES", description: "Psicóloga clínica en Centro de rehabilitación de drogas san Vicente." },
    { number: "(4)", title: "ADOLESCENCIA", description: "Psicóloga clínica infanto juvenil y adultos en Centro público de salud integral." },
    { number: "(5)", title: "DIRECTORA", description: "Psicóloga clínica y fundadora de Integrando Salud." },
  ];
  

function ExperienceItem({ number, title, description }) {
    return (
      <div className="experience-item">
        <div className="experience-icon">
          <FaCheckCircle />
        </div>
        <div className="experience-text">
          <p className="experience-number">{number}</p>
          <h3 className="experience-title">{title}</h3>
          <p className="experience-description">{description}</p>
        </div>
      </div>
    );
  }

const Experiencia = () => {
   return (
    <section id="experience" className="experience-container">
        <h2 className="section-title">Experiencia</h2>
        <div className="experience-grid">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              number={experience.number}
              title={experience.title}
              description={experience.description}
            />
          ))}
        </div>
      </section>
  );
};

export default Experiencia;
