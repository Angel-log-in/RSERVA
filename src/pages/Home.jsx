import { useState } from "react";
import { Link } from "react-router-dom";

const restaurants = [
  { id: 1, name: "Restaurante Italiano", location: "Centro", type: "Italiana", price: "$$", rating: 4.5, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Comida Mexicana", location: "Norte", type: "Mexicana", price: "$", rating: 4.0, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Sushi Bar", location: "Sur", type: "Japonesa", price: "$$$", rating: 4.8, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Parrilla Argentina", location: "Centro", type: "Argentina", price: "$$", rating: 4.7, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Cafetería Francesa", location: "Norte", type: "Francesa", price: "$$", rating: 4.3, image: "https://via.placeholder.com/150" }
];

export default function Home() {
  const [filters, setFilters] = useState({ location: "", type: "", price: "", rating: "" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 1; // Número de restaurantes visibles a la vez

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredRestaurants = restaurants.filter((restaurant) => {
    return (
      (filters.location === "" || restaurant.location === filters.location) &&
      (filters.type === "" || restaurant.type === filters.type) &&
      (filters.price === "" || restaurant.price === filters.price) &&
      (filters.rating === "" || restaurant.rating >= parseFloat(filters.rating))
    );
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleCount) % filteredRestaurants.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - visibleCount + filteredRestaurants.length) % filteredRestaurants.length);
  };

  const visibleRestaurants = filteredRestaurants.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Restaurantes Disponibles</h1>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4 mb-4">
        <select name="location" onChange={handleFilterChange} className="p-2 border rounded">
          <option value="">Ubicación</option>
          <option value="Centro">Centro</option>
          <option value="Norte">Norte</option>
          <option value="Sur">Sur</option>
        </select>

        <select name="type" onChange={handleFilterChange} className="p-2 border rounded">
          <option value="">Tipo de Cocina</option>
          <option value="Italiana">Italiana</option>
          <option value="Mexicana">Mexicana</option>
          <option value="Japonesa">Japonesa</option>
        </select>

        <select name="price" onChange={handleFilterChange} className="p-2 border rounded">
          <option value="">Precio</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
        </select>

        <select name="rating" onChange={handleFilterChange} className="p-2 border rounded">
          <option value="">Calificación</option>
          <option value="4.0">4.0+</option>
          <option value="4.5">4.5+</option>
        </select>
      </div>

      {/* Carrusel de restaurantes */}
      <div className="relative">
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <div className="flex gap-4 mx-10">
          {visibleRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white shadow-md rounded-lg p-4 flex-1">
              <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover rounded-md" />
              <h2 className="text-xl font-semibold mt-2">{restaurant.name}</h2>
              <p className="text-gray-600">{restaurant.location} | {restaurant.type} | {restaurant.price}</p>
              <p className="text-yellow-500 font-bold">⭐ {restaurant.rating}</p>
              <Link to={`/restaurant/${restaurant.id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg">
                Ver detalles
              </Link>
            </div>

          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}