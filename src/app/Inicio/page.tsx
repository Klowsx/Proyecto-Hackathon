"use client";
import Image from 'next/image';
import fondoArtesImage from '@/app/assets/images/kuna.jpg'; // Asegúrate de cambiar esto por la imagen que desees
import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-screen bg-pink-50 overflow-hidden">
      <div className="relative md:w-1/2 h-screen flex justify-center items-center">
        <div className="overflow-hidden rounded-lg shadow-lg border-2 border-gray-300">
          <Image
            src={fondoArtesImage}
            alt="Descripción de la imagen"
            width={600} 
            height={700} 
            className="object-cover" 
          />
        </div>
      </div>
      <div className="flex flex-col justify-center text-left md:w-1/2 p-6">
        <h1 className="text-4xl font-bold text-gray-800">¡Team chancleta les da la bienvenida!</h1>
        <p className="mt-2 max-w-xl text-gray-700 text-lg">
          Este portal de comercio tiene como objetivo conectar a los consumidores con la esencia de Panamá. Promovemos la sostenibilidad y el comercio justo al ofrecer una plataforma donde los artesanos y productores locales pueden compartir sus creaciones.
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











