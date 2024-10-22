"use client";
import Image from 'next/image';
import fondoArtesImage from '@/app/assets/images/artesanias_panameñas.jpg'; // Asegúrate de cambiar esto por la imagen que desees
import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-[120vh] bg-pink-50 overflow-hidden">
      <div className="relative md:w-1/2 h-full flex justify-center items-center">
        <div className="w-full h-full overflow-hidden rounded-lg shadow-lg border-2 border-gray-300">
          <Image
            src={fondoArtesImage}
            alt="Descripción de la imagen"
            layout="fill" // Para que ocupe todo el contenedor
            objectFit="cover" // Para mantener la proporción de la imagen
            className="object-cover" 
          />
        </div>
      </div>
      <div className="flex flex-col justify-center text-left md:w-1/2 p-6">
        <h1 className="text-4xl font-bold text-gray-800">¡Team chancleta les da la bienvenida!</h1>
        <p className="mt-2 max-w-2xl text-gray-700 text-md">
          Este portal de comercio conecta a los consumidores con la esencia de Panamá, promoviendo la sostenibilidad y el comercio justo. Ofrecemos una plataforma para que artesanos y productores locales compartan sus creaciones, empoderando a las comunidades y fomentando su desarrollo económico. Cada compra contribuye al bienestar de Panamá y a la conservación de sus tradiciones.
        </p>
        <div className="mt-4">
          <span className="text-2xl font-bold text-gray-800">¡Descubre lo mejor de Panamá en nuestro ecommerce!</span>
        </div>
      </div>
    </div>
  );
};

export default function Inicio() {
  return (
    <>
      <div className="h-screen flex justify-start items-center bg-white overflow-hidden">
        <WelcomeSection />
      </div>
    </>
  );
}












