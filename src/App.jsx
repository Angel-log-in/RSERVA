import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RestaurantDetails from './pages/RestaurantDetails';
import Reservation from './pages/Reservation';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

