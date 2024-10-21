"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface User {
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.find((user) => user.username === username);

    if (userExists) {
      alert("El usuario ya existe.");
      return;
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registro exitoso.");

    // Limpiar los campos después del registro
    setUsername("");
    setEmail("");
    setPassword("");
    router.push("/Auth/Login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded-lg shadow-md text-black">
        <h2 className="text-2xl font-bold mb-4">Registro</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nombre de Usuario</label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
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
        <button className="w-full bg-blue-500 text-white p-2 rounded">Registrarse</button>
        <p className="mt-4 text-center">
          <Link href="/Auth/Login" className="text-red-500 underline">
            Cancelar
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
