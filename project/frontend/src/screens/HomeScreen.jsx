import { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantCard from '../components/RestaurantCard';
import './HomeScreen.css';

const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/restaurants');
        setRestaurants(data);
        setLoading(false);
      } catch (error) {
        setError(error.response?.data?.message || 'Failed to fetch restaurants');
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // For demo purposes, if no restaurants are fetched, use sample data
  useEffect(() => {
    if (!loading && restaurants.length === 0 && !error) {
      setRestaurants([
        {
          _id: '1',
          name: 'Burger Palace',
          cuisine: 'American',
          rating: 4.5,
          image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          _id: '2',
          name: 'Pizza Heaven',
          cuisine: 'Italian',
          rating: 4.2,
          image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          _id: '3',
          name: 'Sushi World',
          cuisine: 'Japanese',
          rating: 4.7,
          image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          _id: '4',
          name: 'Taco Fiesta',
          cuisine: 'Mexican',
          rating: 4.0,
          image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          _id: '5',
          name: 'Curry House',
          cuisine: 'Indian',
          rating: 4.6,
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          _id: '6',
          name: 'Noodle Bar',
          cuisine: 'Chinese',
          rating: 4.3,
          image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        }
      ]);
    }
  }, [loading, restaurants, error]);

  return (
    <div className="home-screen">
      <div className="hero-section">
        <h1>Food Delivery</h1>
        <p>Order food from your favorite restaurants</p>
      </div>
      
      <div className="restaurants-section">
        <h2>Popular Restaurants</h2>
        
        {loading ? (
          <p>Loading restaurants...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <div className="restaurant-grid">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;