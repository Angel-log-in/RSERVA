import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const restaurants = [
  { id: 1, name: "Restaurante Italiano", location: "Centro", type: "Italiana", price: "$$", rating: 4.5, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Comida Mexicana", location: "Norte", type: "Mexicana", price: "$", rating: 4.0, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Sushi Bar", location: "Sur", type: "Japonesa", price: "$$$", rating: 4.8, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Parrilla Argentina", location: "Centro", type: "Argentina", price: "$$", rating: 4.7, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Cafetería Francesa", location: "Norte", type: "Francesa", price: "$$", rating: 4.3, image: "https://via.placeholder.com/150" }
];

export default function RestaurantDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = restaurants.find(r => r.id === parseInt(id));
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [reservation, setReservation] = useState({ date: "", time: "", guests: 1 });

  const handleAddReview = () => {
    if (newReview.trim() !== "") {
      setReviews([...reviews, { user: "Usuario", comment: newReview }]);
      setNewReview("");
    }
  };

  const handleConfirmReservation = () => {
    if (!reservation.date || !reservation.time || !reservation.guests) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const existingReservations = JSON.parse(localStorage.getItem("reservations")) || [];
    const newReservation = { ...reservation, id: Date.now(), restaurant: restaurant.name };
    localStorage.setItem("reservations", JSON.stringify([...existingReservations, newReservation]));

    navigate("/reservations");  // Redirige instantáneamente
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{restaurant?.name}</h1>
      <img src={restaurant?.image} alt={restaurant?.name} className="w-full h-40 object-cover rounded-lg" />
      
      <h2 className="text-2xl font-semibold mt-6">Menú</h2>
      <ul className="list-disc pl-6">
        <li>Platillo 1 - $10</li>
        <li>Platillo 2 - $12</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Reseñas</h2>
      <ul className="border p-4 rounded-lg">
        {reviews.map((review, index) => (
          <li key={index} className="border-b py-2">
            <strong>{review.user}:</strong> {review.comment}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <textarea
          className="border w-full p-2"
          placeholder="Escribe tu reseña..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg"
          onClick={handleAddReview}
        >
          Agregar Reseña
        </button>
      </div>

      {/* Botón de Reservar */}
      <div className="mt-6">
        <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white px-6 py-3 rounded-lg block text-center text-lg font-semibold">
          Hacer una Reserva
        </button>
      </div>

      {/* Modal de Reserva */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Reservar en {restaurant?.name}</h2>
            
            <label className="block">Fecha:</label>
            <input type="date" className="border w-full p-2 mb-2" value={reservation.date} onChange={(e) => setReservation({ ...reservation, date: e.target.value })} />
            
            <label className="block">Hora:</label>
            <input type="time" className="border w-full p-2 mb-2" value={reservation.time} onChange={(e) => setReservation({ ...reservation, time: e.target.value })} />
            
            <label className="block">Número de personas:</label>
            <input type="number" min="1" className="border w-full p-2 mb-2" value={reservation.guests} onChange={(e) => setReservation({ ...reservation, guests: e.target.value })} />
            
            <button onClick={handleConfirmReservation} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg w-full">
              Confirmar Reserva
            </button>
            <button onClick={() => setShowModal(false)} className="bg-gray-900 text-white px-4 py-2 mt-2 rounded-lg w-full">
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
