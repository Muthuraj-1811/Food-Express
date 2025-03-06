import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderScreen from './screens/OrderScreen';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Header user={user} setUser={setUser} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen setUser={setUser} />} />
            <Route path="/register" element={<RegisterScreen setUser={setUser} />} />
            <Route path="/restaurant/:id" element={<RestaurantScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/profile" element={<ProfileScreen user={user} />} />
            <Route path="/order/:id" element={<OrderScreen />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;