import { useState } from "react";

export default function RegisterUsuario() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la lógica de envío del formulario
    console.log("Datos del formulario: ", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Registrate</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Nombre</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-lg" 
              required
            />
          </div>
          <div>
            <label className="block font-medium">Correo Electrónico</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-lg" 
              required
            />
          </div>
          <div>
            <label className="block font-medium">Contraseña</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-lg" 
              required
            />
          </div>
          <div>
            <label className="block font-medium">Confirmar Contraseña</label>
            <input 
              type="password" 
              name="confirmPassword" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-lg" 
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-green-900 transition">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}