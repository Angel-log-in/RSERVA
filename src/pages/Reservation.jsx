import { useState, useEffect } from "react";

export default function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [editingReservation, setEditingReservation] = useState(null);

  useEffect(() => {
    const storedReservations = JSON.parse(localStorage.getItem("reservations")) || [];
    console.log("Reservas cargadas:", storedReservations);
    setReservations(storedReservations);
  }, []);

  const handleDelete = (id) => {
    const updatedReservations = reservations.filter(res => res.id !== id);
    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
  };

  const handleUpdate = () => {
    const updatedReservations = reservations.map(res =>
      res.id === editingReservation.id ? editingReservation : res
    );
    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
    setEditingReservation(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Tus Reservas</h1>
      <ul className="mt-4">
        {reservations.map((res) => (
          <li key={res.id} className="border p-4 rounded-lg flex flex-col gap-2">
            {editingReservation?.id === res.id ? (
              <div>
                <input
                  type="date"
                  className="border p-2"
                  value={editingReservation.date}
                  onChange={(e) => setEditingReservation({ ...editingReservation, date: e.target.value })}
                />
                <input
                  type="time"
                  className="border p-2"
                  value={editingReservation.time}
                  onChange={(e) => setEditingReservation({ ...editingReservation, time: e.target.value })}
                />
                <input
                  type="number"
                  min="1"
                  className="border p-2"
                  value={editingReservation.guests}
                  onChange={(e) => setEditingReservation({ ...editingReservation, guests: e.target.value })}
                />
                <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg">Guardar</button>
              </div>
            ) : (
              <>
                <p><strong>{res.restaurant}</strong></p>
                <p>{res.date} a las {res.time} para {res.guests} personas</p>
                <div className="flex gap-2">
                  <button onClick={() => setEditingReservation(res)} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Editar</button>
                  <button onClick={() => handleDelete(res.id)} className="bg-gray-900 text-white px-4 py-2 rounded-lg">Cancelar</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
