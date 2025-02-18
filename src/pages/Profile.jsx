import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
      setIsRegistered(true);
    }
  }, []);

  const handleRegister = () => {
    if (!name || !email || !password) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (localStorage.getItem("user")) {
      setError("Ya hay un usuario registrado.");
      return;
    }

    const newUser = { name, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    setIsRegistered(true);
    setError("");
  };

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
      setError("Correo o contraseña incorrectos.");
      return;
    }

    setUser(savedUser);
    setError("");
  };

  const handleLogout = () => {
    setUser(null);
    setEmail("");
    setPassword("");
  };

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const reservations = JSON.parse(localStorage.getItem("reservations")) || [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Perfil</h1>

      {!user ? (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">
            {isRegistered ? "Iniciar Sesión" : "Registrarse"}
          </h2>

          {!isRegistered && (
            <input
              type="text"
              placeholder="Nombre"
              className="border w-full p-2 mb-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Correo electrónico"
            className="border w-full p-2 mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border w-full p-2 mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-center mb-2">{error}</p>}

          <button
            onClick={isRegistered ? handleLogin : handleRegister}
            className="bg-blue-500 text-white px-4 py-2 w-full rounded-lg"
          >
            {isRegistered ? "Iniciar Sesión" : "Registrarse"}
          </button>
        </div>
      ) : (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center">¡Bienvenido, {user.name}!</h2>
          <p className="text-center text-gray-600">{user.email}</p>

          <h3 className="text-xl font-semibold mt-6">Restaurantes Favoritos</h3>
          {favorites.length > 0 ? (
            <ul className="list-disc pl-6">
              {favorites.map((fav, index) => (
                <li key={index}>{fav}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No tienes restaurantes favoritos aún.</p>
          )}

          <h3 className="text-xl font-semibold mt-6">Reservas</h3>
          {reservations.length > 0 ? (
            <ul className="list-disc pl-6">
              {reservations.map((res, index) => (
                <li key={index}>
                  {res.restaurant} - {res.date} a las {res.time} ({res.guests} personas)
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No tienes reservas aún.</p>
          )}

          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white px-4 py-2 mt-4 w-full rounded-lg"
          >
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
}
