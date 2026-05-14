"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* LOGO */}
          <div className="shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Distribuidora Astros
            </Link>
          </div>

          {/* LINKS PRINCIPALES */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Inicio
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600">
              Productos
            </Link>
            <Link href="/nosotros" className="text-gray-700 hover:text-blue-600">
              Nosotros
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-blue-600">
              Contacto
            </Link>
          </div>

          {/* BOTÓN CTA (por ejemplo: Iniciar sesión o Unirse) */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Iniciar sesión
            </Link>
          </div>

          {/* MENU MOBILE */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none" aria-label="Abrir menú">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 transition">
              Inicio
            </Link>
            <Link href="/products" className="block text-gray-700 hover:text-blue-600 transition">
              Productos
            </Link>
            <Link href="/nosotros" className="block text-gray-700 hover:text-blue-600 transition">
              Nosotros
            </Link>
            <Link href="/contacto" className="block text-gray-700 hover:text-blue-600 transition">
              Contacto
            </Link>
            <Link href="/login" className="block text-white bg-blue-600 rounded-lg px-4 py-2 hover:bg-blue-700 transition">
              Iniciar sesión
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
