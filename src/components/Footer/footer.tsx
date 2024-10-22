// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Página orientada a ventas de artesanias locales - Team Chancleta. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
