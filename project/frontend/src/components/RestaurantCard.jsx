import { Link } from 'react-router-dom';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <Link to={`/restaurant/${restaurant._id}`}>
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="restaurant-image" 
        />
        <div className="restaurant-info">
          <h3 className="restaurant-name">{restaurant.name}</h3>
          <p className="restaurant-cuisine">{restaurant.cuisine}</p>
          <div className="restaurant-rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(restaurant.rating) ? 'star filled' : 'star'}>
                ★
              </span>
            ))}
            <span className="rating-text">{restaurant.rating.toFixed(1)}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;