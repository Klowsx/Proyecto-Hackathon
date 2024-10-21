"use client";
import { useRouter } from "next/navigation";
export default function SobreNosotros() {
  const router = useRouter();
  const regresarInicio = () => {
    router.push("/");
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1>Sobre Nosotros</h1>
          <p>Esta es una página de información sobre la empresa.</p>
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
