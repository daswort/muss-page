import React, { useEffect } from 'react';
import { HelmetProvider } from "react-helmet-async";
import StructuredData from "./components/StructuredData";

import "./App.css";
import Contactar from './components/Contactar';
import Especialidades from './components/Especialidades';
import Experiencia from './components/Experiencia';
import Formacion from './components/Formacion';

function App() {
  useEffect(() => {
    const analyticsId = "G-703YKC7KBX"; 
    // Verificar si el script ya existe
    if (!document.querySelector(`script[src="https://www.googletagmanager.com/gtag/js?id=${analyticsId}"]`)) {
      // Crear el script solo si no existe
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
      document.head.appendChild(script);
  
      // Configurar Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', analyticsId);
    }
  }, []);

  return (
    <HelmetProvider>
    <div className="container">
      {/* Header */}
      <StructuredData />

      {/* Contactar Section */}
      <Contactar />

      {/* Especialidades Section */}
      <Especialidades />

      {/* Experiencia Section */}
      <Experiencia />
      
      {/* Formación Section */} 
      <Formacion />

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Gema Saldívar. Todos los derechos reservados.</p>
      </footer>
    </div>
    </HelmetProvider>
  );
}

export default App;
