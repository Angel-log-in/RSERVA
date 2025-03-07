import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DashboardClient from './pages/DashboardClient'
import RestaurantDetails from './pages/RestaurantDetails';
import Reservation from './pages/Reservation';
import Navbar from './components/Navbar';
import RegisterAdmin from './pages/RegisterAdmin';
import RegisterUsuario from './pages/RegisterUsuario';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path='/cliente'element={<DashboardClient/>} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/LoginAdmin" element={<RegisterAdmin/>} />
          <Route path="/LoginUsuario" element={<RegisterUsuario/>} />
        </Routes>
    </Router>
  );
}

export default App;

