import React from "react";
import "./App.css";
import { FaUserFriends, FaHandsHelping, FaHeart, FaComments, FaInfoCircle, FaCheckCircle } from "react-icons/fa";
import ProfileImage from './images/ps-gema-saldivar.jpg';

const services = [
  {
    icon: <FaUserFriends />,
    title: "Psicoterapia en adolescentes",
    description: "Se enfoca en el abordar los desafíos emocionales, conductuales y psicológicos que enfrentan los jóvenes durante su desarrollo. Esta terapia ayuda a los adolescentes a gestionar problemas como la ansiedad, la depresión, el estrés académico, la autoestima, los conflictos familiares, y las dificultades sociales, promoviendo el autoconocimiento y el desarrollo de habilidades saludables para enfrentar la vida."
  },
  {
    icon: <FaHandsHelping />,
    title: "Psicología clínica de adultos",
    description: "Abordada desde el modelo integrativo combina diversas corrientes terapéuticas para adaptarse a las necesidades y características individuales del paciente. Este enfoque integra elementos del modelo cognitivo-conductual, la terapia humanista, el psicoanálisis y otras corrientes, permitiendo un abordaje flexible y personalizado. El objetivo es tratar los problemas emocionales y conductuales desde una perspectiva holística, considerando tanto el pensamiento, las emociones y los comportamientos, como el contexto relacional y social del individuo. Se busca favorecer el autoconocimiento, el crecimiento personal y el bienestar emocional, respetando las particularidades de cada persona y su proceso terapéutico."
  },
  {
    icon: <FaHeart />,
    title: "Psicoterapia cognitivo conductual",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
  },
  {
    icon: <FaComments />,
    title: "Psicología de la mujer.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
  },
  {
    icon: <FaInfoCircle />,
    title: "Tratamiento trastornos de la conducta alimentaria (TCA)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
  }
];

const experiences = [
  { number: "(1)", title: "INFANTES", description: "Psicóloga comunitaria en Residencia de niñas nuestra señora de la Paz RED SENAME." },
  { number: "(2)", title: "FAMILIA", description: "Psicóloga clínica en Coorporación de desarrollo integral de la familia." },
  { number: "(3)", title: "ADICCIONES", description: "Psicóloga clínica en Centro de rehabilitación de drogas san Vicente." },
  { number: "(4)", title: "ADOLESCENCIA", description: "Psicóloga clínica infanto juvenil y adultos en Centro público de salud integral." },
  { number: "(5)", title: "DIRECTORA", description: "Psicóloga clínica y fundadora de Integrando Salud." },
];

function ServiceItem({ icon, title, description }) {
  return (
    <div className="service-item">
      <div className="icon">{icon}</div>
      <div className="text">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

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

function App() {
  return (
    <div className="container">
      {/* Header */}


      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Ps. Gema Saldivar</h2>
          <p className="hero-description">
          Trabajo desde una orientación integrativa en pro del bienestar integral de las personas en sus aspectos fisiológicos, inconscientes, afectivos, familiares, cognitivos, conductuales y espirituales.
          </p>
          <a
            href="https://www.doctoralia.cl/gema-saldivar/psicologo/providencia"  
            className="cta-button"
            target="_blank" 
            rel="noopener noreferrer" 
          >
  Contacto
</a>
        </div>
        <div className="hero-image">
          <img src={ProfileImage} alt="Profile" className="responsive-image" />
        </div> {/* Placeholder for image */}
      </section>

      {/* Services Section */}
      <section id="services" className="services-container">
        <h2 className="section-title">Especialidades</h2>
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </section>

      {/* Experience Section */}
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
      
      {/* Formación Section */} 
      <section className="formation">
        <h2 className="section-title">Formación</h2>
        <div className="formation-grid">
          <div className="formation-column">
            <p className="formation-item"> Universidad Internacional de Valencia</p>
            <p className="formation-item"> Internationella Skolorna Barcelona</p>
            <p className="formation-item"> Universidad del Pacífico</p>
          </div>
          <div className="formation-column">
            <p className="formation-item"> Academia Fundación Honra</p>
            <p className="formation-item"> Centro de Estudios Sistémicos</p>
            <p className="formation-item"> Formación en Psicoterapia Sistémica</p>
          </div>
          <div className="formation-column">
            <p className="formation-item"> Universidad Católica del Maule</p>
            <p className="formation-item"> Instituto de Capacitación y especialización Padre Hurtado</p>
            <p className="formation-item"> Formación en Psicoterapia Humanista</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Gema Saldivar. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
