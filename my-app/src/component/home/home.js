import React, { useState, useEffect } from "react";
import Link from "next/link";
import Login from "../login/login.js"; // Importar el componente Login

// Componente Home comentado
/*
const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1>Bienvenido a la página principal</h1>
      <Link href="/login" legacyBehavior>
        <a>Ir a la página de inicio de sesión</a>
      </Link>
      <div className="mt-4 text-center">
        <Link href="/profile" legacyBehavior>
          <a className="text-white hover:text-blue-700">Ir a Perfil</a>
        </Link>
      </div>
      <div className="mt-4 text-center">
        <Link href="/my-entries" legacyBehavior>
          <a className="text-white hover:text-blue-700">Ir a Mis Entradas</a>
        </Link>
      </div>
    </div>
  );
};
*/

const HomeWithLogin = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default HomeWithLogin;
