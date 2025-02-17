import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Íconos de hamburguesa y cerrar

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      {/* Contenedor principal */}
      <div className="max-w-6xl mx-auto px-10">
        <div className="flex justify-between items-center py-4">
          
          {/* Título */}
          <h1 className="text-5xl font-bold tracking-wide">R SERVA</h1>

          {/* Botón del menú en móvil */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Menú de navegación (oculto en móvil, visible en desktop) */}
          <ul className="hidden lg:flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-300">Inicio</Link>
            </li>
            <li>
              <Link to="/reservation" className="hover:text-gray-300">Reservas</Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-gray-300">Perfil</Link>
            </li>
          </ul>
        </div>

        {/* Menú desplegable en móviles */}
        {menuOpen && (
          <ul className="lg:hidden flex flex-col space-y-4 pb-4">
            <li>
              <Link to="/" className="block py-2 text-center hover:bg-gray-700" onClick={() => setMenuOpen(false)}>Inicio</Link>
            </li>
            <li>
              <Link to="/reservation" className="block py-2 text-center hover:bg-gray-700" onClick={() => setMenuOpen(false)}>Reservas</Link>
            </li>
            <li>
              <Link to="/profile" className="block py-2 text-center hover:bg-gray-700" onClick={() => setMenuOpen(false)}>Perfil</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}



