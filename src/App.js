import React from "react";
import { HelmetProvider } from "react-helmet-async";
import StructuredData from "./components/StructuredData";
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
    title: "Psicoterapia cognitivo conductual (TCC)",
    description: "Se centra en la relación entre pensamientos, emociones y comportamientos. Parte de la idea de que los pensamientos distorsionados o irracionales influyen en las emociones y las acciones, lo que puede generar malestar psicológico. El objetivo de la TCC es identificar y modificar esos patrones de pensamiento y comportamiento disfuncionales mediante técnicas estructuradas, como la reestructuración cognitiva, el entrenamiento en habilidades y la exposición gradual. Es un enfoque práctico, orientado al presente y basado en la resolución de problemas."
  },
  {
    icon: <FaComments />,
    title: "Psicología de la mujer.",
    description: "Se centra en las experiencias psicológicas únicas de las mujeres, considerando los factores biológicos, sociales y culturales que influyen en su bienestar mental. Este enfoque reconoce las desigualdades de género, los roles tradicionales, la identidad femenina y las presiones sociales que afectan la salud emocional de las mujeres. En terapia, se abordan temas como el autoestima, la imagen corporal, la maternidad, las relaciones, el acoso o la violencia de género, y la conciliación de la vida profesional y personal. El objetivo es empoderar a las mujeres, validando sus experiencias y promoviendo su autonomía y crecimiento personal."
  },
  {
    icon: <FaInfoCircle />,
    title: "Tratamiento trastornos de la conducta alimentaria (TCA)",
    description: "se centra en modificar los pensamientos, emociones y comportamientos disfuncionales relacionados con la alimentación, el peso y la imagen corporal. La terapia cognitivo-conductual (TCC) ayuda a los pacientes a identificar patrones de pensamiento distorsionados y a cambiar comportamientos perjudiciales como la restricción alimentaria o los atracones. También se acompaña de terapia familiar, especialmente con adolescentes, y la terapia dialéctico-conductual (TDC) para mejorar la regulación emocional. El tratamiento busca promover una relación más saludable con la comida y mejorar el bienestar emocional."
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
    <HelmetProvider>
    <div className="container">
      {/* Header */}
      <StructuredData />

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
          Contactar por Doctoralia
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
    </HelmetProvider>
  );
}

export default App;
