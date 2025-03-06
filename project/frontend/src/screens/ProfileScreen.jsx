import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProfileScreen.css';

const ProfileScreen = ({ user }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      setName(user.name);
      setEmail(user.email);
      setAddress(user.address);
      setPhone(user.phone);
      
      // Fetch user orders
      const fetchOrders = async () => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          };
          
          const { data } = await axios.get(
            'http://localhost:5000/api/orders/myorders',
            config
          );
          
          setOrders(data);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };
      
      fetchOrders();
    }
  }, [user, navigate]);

  // For demo purposes, if no orders are fetched, use sample data
  useEffect(() => {
    if (user && orders.length === 0) {
      // Sample order data
      setOrders([
        {
          _id: '1',
          createdAt: '2023-05-15T10:30:00Z',
          totalPrice: 24.97,
          isPaid: true,
          isDelivered: true,
          orderItems: [
            {
              name: 'Classic Burger',
              quantity: 2,
              price: 8.99,
              image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            },
            {
              name: 'French Fries',
              quantity: 1,
              price: 3.99,
              image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            },
            {
              name: 'Chocolate Milkshake',
              quantity: 1,
              price: 5.99,
              image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            }
          ]
        },
        {
          _id: '2',
          createdAt: '2023-05-10T18:45:00Z',
          totalPrice: 19.98,
          isPaid: true,
          isDelivered: true,
          orderItems: [
            {
              name: 'Cheese Burger',
              quantity: 2,
              price: 9.99,
              image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            }
          ]
        }
      ]);
    }
  }, [user, orders]);

  const submitHandler = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      setLoading(true);
      setError('');
      
      // In a real app, this would update the user profile
      // For this demo, we'll just show a success message
      setMessage('Profile updated successfully');
      setLoading(false);
    } catch (error) {
      setError(error.response?.data?.message || 'Update failed');
      setLoading(false);
    }
  };

  return (
    <div className="profile-screen">
      <div className="profile-container">
        <div className="profile-update">
          <h2>User Profile</h2>
          
          {message && <div className="success-message">{message}</div>}
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button type="submit" className="update-btn" disabled={loading}>
              {loading ? 'Updating...' : 'Update'}
            </button>
          </form>
        </div>
        
        <div className="profile-orders">
          <h2>My Orders</h2>
          
          {orders.length === 0 ? (
            <p className="no-orders">You have no orders</p>
          ) : (
            <div className="orders-list">
              {orders.map((order) => (
                <div key={order._id} className="order-item">
                  <div className="order-header">
                    <div className="order-date">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </div>
                    <div className="order-id">
                      Order ID: {order._id}
                    </div>
                  </div>
                  
                  <div className="order-summary">
                    <div className="order-total">
                      Total: ${order.totalPrice.toFixed(2)}
                    </div>
                    <div className="order-status">
                      {order.isDelivered ? (
                        <span className="status delivered">Delivered</span>
                      ) : (
                        <span className="status pending">Pending</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="order-items-preview">
                    {order.orderItems.slice(0, 3).map((item, index) => (
                      <div key={index} className="order-item-preview">
                        <img src={item.image} alt={item.name} />
                      </div>
                    ))}
                    {order.orderItems.length > 3 && (
                      <div className="more-items">
                        +{order.orderItems.length - 3} more
                      </div>
                    )}
                  </div>
                  
                  <button 
                    className="view-order-btn"
                    onClick={() => navigate(`/order/${order._id}`)}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;