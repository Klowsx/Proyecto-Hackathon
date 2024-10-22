"use client";
import { useRouter } from "next/navigation";
import Image from 'next/image';

import fernandoImage from "@/app/assets/images/fernando.jpg";
import gerardoImage from "@/app/assets/images/yo.jpg";
import javierImage from "@/app/assets/images/javier.jpg";

const teamMembers = [
  {
    name: "Fernando Barrios",
    title: "Soy un desarrollador de software y soluciones de inteligencia artificial con una pasión por la creación de herramientas innovadoras que impacten positivamente en la vida de las personas. Con una sólida formación en ciencia y tecnología, me especializo en el desarrollo de aplicaciones web y móviles, así como en la implementación de modelos de inteligencia artificial. Soy un entusiasta del aprendizaje continuo y busco siempre mejorar mis habilidades para afrontar nuevos desafíos.",
    image: fernandoImage, 
  },
  {
    name: "Gerardo Vásquez",
    title: "Soy un estudiante de desarrollo de software apasionado por la tecnología, con experiencia en proyectos académicos y personales. Me especializo en crear aplicaciones funcionales, explorando diversas herramientas y lenguajes de programación. Estoy comprometido a seguir aprendiendo y creciendo en el campo del desarrollo para contribuir a soluciones tecnológicas que impacten positivamente en la sociedad.",
    image: gerardoImage, 
  },
  {
    name: "Javier Hernández",
    title: "Apasionado por la tecnología con experiencia en desarrollo de aplicaciones web utilizando Angular, HTML, CSS y JavaScript. Poseo un enfoque orientado a resolver problemas complejos con soluciones eficientes y escalables. Cuento con habilidades en diseño de interfaces responsivas y adaptación de contenido para diferentes dispositivos.",
    image: javierImage, 
  },
];

export default function SobreNosotros() {
  const router = useRouter();
  
  return (
    <>
      <div className="min-h-screen flex flex-col items-center p-8">
        <div className="flex flex-col justify-center items-center mb-8 mt-18">
          <h1 className="text-4xl font-bold mb-4 text-black">Sobre Nosotros</h1>
          <p className="text-center text-lg text-black">A continuación se presentan a los integrantes que conforman nuestro equipo</p>
        </div>
        <div className="flex-grow flex justify-center items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16"> 
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center bg-gray-100 rounded-lg p-4 py-8 shadow-lg">
                <Image
                   src={member.image}
                   alt={member.name}
                   width={100}  
                   height={100} 
                   className="rounded-full mb-2 object-cover"
                />
                <h2 className="text-xl font-semibold text-black">{member.name}</h2>
                <p className="text-gray-600 text-justify">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}






