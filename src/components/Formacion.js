import React from 'react';

const Formacion = () => {
   return (
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
  );
};

export default Formacion;
