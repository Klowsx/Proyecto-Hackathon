"use client";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import fondoArtesImage from '@/app/assets/images/fondo_artesanias.png';
import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <div className="relative text-center text-white w-full" style={{ height: '60vh' }}>
      <Image
        src={fondoArtesImage}
        alt="Descripción de la imagen"
        fill
        className="object-cover"
      />
    </div>
  );
};


const PurposeSection: React.FC = () => {
  return (
    <div className="p-6 m-4 bg-gray-100 rounded-lg text-center">
      <h2 className="text-3xl text-gray-800">Nuestro Propósito</h2>
      <p className="mt-4 text-lg text-gray-700">
        Este portal de comercio tiene como objetivo conectar a los consumidores con la esencia de Panamá. Promovemos la sostenibilidad y el comercio justo al ofrecer una plataforma donde los artesanos y productores locales pueden compartir sus creaciones. Al elegir nuestros productos, no solo adquieres un objeto, sino que también apoyas a comunidades, preservas tradiciones y fomentas un impacto social positivo.
      </p>
    </div>
  );
};

export default function Inicio() {
  const router = useRouter();
  const regresarInicio = () => {
    router.push("/");
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-white">
        <div className="flex flex-col justify-center items-center">
          <WelcomeSection/>
          <PurposeSection/>
        </div>
        <div>
          <button onClick={regresarInicio} className="p-3 m-5 bg-purple-500 rounded-lg">
            Inicio
          </button>
        </div>
      </div>
    </>
  );
}