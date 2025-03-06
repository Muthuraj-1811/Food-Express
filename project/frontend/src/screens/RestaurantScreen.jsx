import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MenuItem from '../components/MenuItem';
import './RestaurantScreen.css';

const RestaurantScreen = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/restaurants/${id}`);
        setRestaurant(data);
        setLoading(false);
      } catch (error) {
        setError(error.response?.data?.message || 'Failed to fetch restaurant details');
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  // For demo purposes, if no restaurant is fetched, use sample data
  useEffect(() => {
    if (!loading && !restaurant && !error) {
      // Sample restaurant data
      setRestaurant({
        _id: id,
        name: 'Burger Palace',
        description: 'The best burgers in town with fresh ingredients and homemade sauces.',
        address: '123 Main St, Anytown, USA',
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        cuisine: 'American',
        rating: 4.5,
        menu: [
          {
            _id: '101',
            name: 'Classic Burger',
            description: 'Beef patty with lettuce, tomato, onion, and our special sauce',
            price: 8.99,
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'Burgers'
          },
          {
            _id: '102',
            name: 'Cheese Burger',
            description: 'Classic burger with American cheese',
            price: 9.99,
            image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'Burgers'
          },
          {
            _id: '103',
            name: 'Bacon Burger',
            description: 'Classic burger with crispy bacon strips',
            price: 10.99,
            image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'Burgers'
          },
          {
            _id: '104',
            name: 'French Fries',
            description: 'Crispy golden fries with sea salt',
            price: 3.99,
            image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'Sides'
          },
          {
            _id: '105',
            name: 'Onion Rings',
            description: 'Crispy battered onion rings',
            price: 4.99,
            image: 'https://images.unsplash.com/photo-1581410388640-cbe53d77c7f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'Sides'
          },
          {
            _id: '106',
            name: 'Chocolate Milkshake',
            description: 'Rich and creamy chocolate milkshake',
            price: 5.99,
            image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            category: 'Drinks'
          }
        ]
      });
    }
  }, [loading, restaurant, error, id]);

  const addToCart = (item) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    const existingItem = cartItems.find(
      (cartItem) => cartItem._id === item._id
    );
    
    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem._id === item._id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [
        ...cartItems,
        {
          _id: item._id,
          name: item.name,
          price: item.price,
          image: item.image,
          restaurant: {
            _id: restaurant._id,
            name: restaurant.name
          },
          quantity: 1
        }
      ];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
    
    alert(`${item.name} added to cart!`);
  };

  if (loading) {
    return <div className="loading">Loading restaurant details...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!restaurant) {
    return <div className="error-message">Restaurant not found</div>;
  }

  // Group menu items by category
  const menuByCategory = restaurant.menu.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="restaurant-screen">
      <div className="restaurant-header" style={{ backgroundImage: `url(${restaurant.image})` }}>
        <div className="restaurant-header-content">
          <h1>{restaurant.name}</h1>
          <p className="restaurant-cuisine">{restaurant.cuisine}</p>
          <div className="restaurant-rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(restaurant.rating) ? 'star filled' : 'star'}>
                ★
              </span>
            ))}
            <span className="rating-text">{restaurant.rating.toFixed(1)}</span>
          </div>
          <p className="restaurant-address">{restaurant.address}</p>
        </div>
      </div>
      
      <div className="restaurant-description">
        <p>{restaurant.description}</p>
      </div>
      
      <div className="restaurant-menu">
        <h2>Menu</h2>
        
        {Object.keys(menuByCategory).map((category) => (
          <div key={category} className="menu-category">
            <h3>{category}</h3>
            <div className="menu-items-grid">
              {menuByCategory[category].map((item) => (
                <MenuItem key={item._id} item={item} addToCart={addToCart} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantScreen;