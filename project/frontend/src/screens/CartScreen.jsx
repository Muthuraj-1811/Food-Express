import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CartScreen.css';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
    
    // Calculate total price
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, []);

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter(item => item._id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    
    // Recalculate total price
    const total = updatedCartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    
    const updatedCartItems = cartItems.map(item =>
      item._id === id ? { ...item, quantity } : item
    );
    
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    
    // Recalculate total price
    const total = updatedCartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const checkoutHandler = () => {
    const userInfo = localStorage.getItem('userInfo');
    
    if (!userInfo) {
      navigate('/login');
    } else {
      // In a real app, this would navigate to a checkout page
      // For this demo, we'll just show an alert
      alert('Order placed successfully!');
      
      // Clear cart
      localStorage.removeItem('cartItems');
      setCartItems([]);
      setTotalPrice(0);
    }
  };

  return (
    <div className="cart-screen">
      <h1>Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/" className="btn-continue-shopping">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item._id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="item-restaurant">
                    From: {item.restaurant.name}
                  </p>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                </div>
                
                <div className="cart-item-quantity">
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                
                <div className="cart-item-subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item._id)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Items ({cartItems.reduce((a, c) => a + c.quantity, 0)}):</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery:</span>
              <span>$5.00</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${(totalPrice + 5).toFixed(2)}</span>
            </div>
            <button 
              className="checkout-btn"
              onClick={checkoutHandler}
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;