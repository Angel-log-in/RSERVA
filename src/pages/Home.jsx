import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebook,FaTwitter, FaTiktok } from "react-icons/fa";

export default function HomePage() {
  const [showModal, setShowModal]= useState(false);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      {/* About Section */}
      <section className="p-6 text-center bg-gray-800">
        <h3 className="text-3xl text-neutral-100  font-semibold mb-4">Sobre R Serva</h3>
        <p className="text-neutral-100 max-w-3xl mx-auto">
          R Serva es una plataforma diseñada para facilitar la reserva de citas en restaurantes de manera sencilla y rápida.
          Con nuestra interfaz intuitiva, los usuarios pueden explorar opciones y agendar fácilmente.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <div className="w-80 h-48 mr-4 mb-10 bg-gray-300 flex items-center justify-center"><img src="https://cdn.pixabay.com/photo/2021/09/02/13/36/pizza-6593504_960_720.jpg" alt="restaurante representativo"/> </div>
          <div className="w-80 h-48 ml-4 mb-10  float-left mr-7 bg-gray-300 flex items-center justify-center"><img src="https://cdn.pixabay.com/photo/2016/08/04/18/16/coffee-1569682_960_720.jpg" alt="imagen representativa" /></div>
          <div className="w-80 h-48 mr-4 mr-4 bg-gray-300 flex items-center justify-center"><img src="https://cdn.pixabay.com/photo/2023/07/07/17/47/sushi-8113165_1280.jpg" alt="imagen representativa" /></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="p-6 bg-neutra-l00 text-center">
        <h3 className="text-4xl font-bold mb-4">¿Por qué elegirnos?</h3>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          <div className="w-72 p-4 bg-gray-800 shadow-lg rounded-lg">
            <h4 className="text-xl text-white font-bold mb-2">Fácil de usar</h4>
            <p className="text-neutral-100">Nuestra plataforma es intuitiva y permite agendar citas en pocos pasos.</p>
          </div>
          <div className="w-72 p-4 bg-gray-800 shadow-lg rounded-lg">
            <h4 className="text-xl text-white font-bold mb-2">Acceso en cualquier momento</h4>
            <p className="text-neutral-100">Reserva desde cualquier dispositivo, sin descargas ni instalaciones.</p>
          </div>
          <div className="w-72 p-4 bg-gray-800 shadow-lg rounded-lg">
            <h4 className="text-xl text-white font-bold mb-2">Confirmación instantánea</h4>
            <p className="text-neutral-100">Recibe notificaciones y confirma tus citas al instante.</p>
          </div>
        </div>
      </section>

     

      {/* Hero Section (moved to the end) */}
      <header className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-gray-800 text-white">
        <h2 className="text-4xl font-bold mb-4">Registrate ahora</h2>
        <div className="mt-6">
          <button onClick={() => setShowModal(true)} className="px-6 py-3 bg-white text-green-900 rounded-lg text-lg font-semibold shadow-md transition-transform transform hover:scale-105 hover:bg-gray-200 cursor-pointer">
            Registrarse
          </button>
        </div>
      </header>
      {/*Modal*/}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
          <h3 className="text-xl font-semibold mb-4">Elige tu tipo de cuenta</h3>
          <div className="flex gap-4">
            <div 
              className="w-1/2 p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
              onClick={() => navigate("/LoginUsuario")}
            >
              <div className="w-full h-32 bg-gray-300 flex items-center justify-center">Imagen Usuario</div>
              <p className="mt-2 font-semibold">Usuario</p>
              <p className="mt-2 text-gray-800 items-center justify-center">Comienza a reservar ahora</p>
            </div>
            <div 
              className="w-1/2 p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
              onClick={() => navigate("/LoginAdmin")}
            >
              <div className="w-full h-32 bg-gray-300 flex items-center justify-center">Imagen Administrador</div>
              <p className="mt-2 font-semibold">Administrador</p>
              <p className="mt-2 text-gray-800 items-center justify-center">Comienza ahora y haz crecer tu negocio</p>
            </div>
          </div>
          <button onClick={() => setShowModal(false)} className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-green-900">
            Cerrar
          </button>
        </div>
      </div>
      )}
        

       {/* Contact Section */}
       <section className="p-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">Síguenos</h3>
        <p className="text-gray-700">Síguenos en nuestras redes sociales o envíanos un mensaje.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-pink-600 text-3xl hover:scale-110 transition-transform"><FaInstagram /></a>
          <a href="#" className="text-blue-600 text-3xl hover:scale-110 transition-transform"><FaFacebook /></a>
          <a href="#" className="text-black text-3xl hover:scale-110 transition-transform"><FaTiktok /></a>
          <a href="#" className="text-blue-400 text-3xl hover:scale-110 transition-transform"><FaTwitter /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-white text-center">
        <p>&copy; 2025 R Serva. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}