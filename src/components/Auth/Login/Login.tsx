"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Obtener usuarios desde el local storage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Verificar si existe un usuario con el email y la contraseña ingresados
    const user = users.find(
      (user: { email: string; password: string }) =>
        user.email === email && user.password === password
    );

    if (user) {
      // Redirigir a la página principal o dashboard después del login exitoso
      router.push("/");
    } else {
      setError("Email o contraseña incorrectos.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md text-black">
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Contraseña</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded">Iniciar Sesión</button>
        <p className="mt-4 text-center">
          ¿No tienes una cuenta?{" "}
          <Link href="/Auth/Register" className="text-blue-500 underline">
            Regístrate aquí
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
