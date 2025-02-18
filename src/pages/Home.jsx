import { useState } from "react";
import { Link } from "react-router-dom";

const restaurants = [
  { id: 1, name: "Restaurante Italiano", location: "Centro", type: "Italiana", price: "Medio", rating: 4.5, image: "https://cdn.pixabay.com/photo/2021/09/02/13/36/pizza-6593504_960_720.jpg" },
  { id: 2, name: "Comida Mexicana", location: "Norte", type: "Mexicana", price: "Bajo", rating: 4.0, image: "https://cdn.pixabay.com/photo/2020/12/02/19/00/tacos-5798445_960_720.jpg" },
  { id: 3, name: "Sushi Bar", location: "Sur", type: "Japonesa", price: "Alto", rating: 4.8, image: "https://cdn.pixabay.com/photo/2020/03/22/08/43/sushi-4956246_960_720.jpg" },
  { id: 4, name: "Parrilla Argentina", location: "Centro", type: "Argentina", price: "Medio", rating: 4.7, image: "https://cdn.pixabay.com/photo/2017/10/06/16/28/bbq-2823707_1280.jpg" },
  { id: 5, name: "Cafetería Francesa", location: "Norte", type: "Francesa", price: "Medio", rating: 4.3, image: "https://cdn.pixabay.com/photo/2016/08/04/18/16/coffee-1569682_960_720.jpg" },
  { id: 6, name: "Como dice el dicho", location: "Centro", type: "Mexicana", price: "Bajo", rating: 4.3, image: "https://cdn.pixabay.com/photo/2016/09/01/22/43/coffee-1637907_640.jpg" },
  { id: 7, name: "Tacos los primos", location: "Norte", type: "Mexicana", price: "Bajo", rating: 4.3, image: "https://cdn.pixabay.com/photo/2014/01/14/22/14/tacos-245241_640.jpg" },
  { id: 8, name: "Manduca", location: "Sur", type: "Italiana", price: "Alto", rating: 4.3, image: "https://cdn.pixabay.com/photo/2021/05/18/15/15/pasta-6263653_640.jpg" },
  { id: 9, name: "Mushu Sushi", location: "Centro", type: "Japonesa", price: "Medio", rating: 5.0, image: "https://cdn.pixabay.com/photo/2023/07/07/17/47/sushi-8113165_1280.jpg" },
  { id: 10, name: "Mi refugio", location: "Norte", type: "Mexiacana", price: "Alto", rating: 4.3, image: "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_640.jpg" },
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
          <option value="Francesa">Francesa</option>
          <option value="Argentina">Argentina</option>
        </select>

        <select name="price" onChange={handleFilterChange} className="p-2 border rounded">
          <option value="">Precio</option>
          <option value="$">Bajo</option>
          <option value="$$">Medio</option>
          <option value="$$$">Alto</option>
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