import React from "react";
import { Helmet } from "react-helmet-async";

const StructuredData = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ps. Gema Saldívar",
    "description": "Psicóloga clínica especializada en terapias y consulta online.",
    "url": "https://psgemasaldivar.com",
    "image": "https://psgemasaldivar.com/static/media/ps-gema-saldivar.92223515b8f9947eb0d5.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Guardia Vieja #181 – of. 801, Providencia",
      "addressLocality": "Santiago",
      "postalCode": "7510186",
      "addressCountry": "Chile"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+56 9 8954 4641",
      "contactType": "Customer Service",
      "areaServed": "ES",
      "availableLanguage": ["Spanish"]
    },
    "sameAs": [
      "https://www.linkedin.com/in/gema-saldivar-12b052a0",
      "https://www.instagram.com/psicologa.gemasaldivar"
    ],
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00"
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ps. Gema Saldívar",
    "jobTitle": "Psicóloga Clínica",
    "image": "https://psgemasaldivar.com/static/media/ps-gema-saldivar.92223515b8f9947eb0d5.jpg",
    "url": "https://psgemasaldivar.com",
    "sameAs": [
      "https://www.linkedin.com/in/gema-saldivar-12b052a0",
      "https://www.instagram.com/psicologa.gemasaldivar"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
