import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './OrderScreen.css';

const OrderScreen = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    
    if (!userInfo) {
      setError('Please login to view this order');
      setLoading(false);
      return;
    }
    
    const fetchOrder = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`
          }
        };
        
        const { data } = await axios.get(
          `http://localhost:5000/api/orders/${id}`,
          config
        );
        
        setOrder(data);
        setLoading(false);
      } catch (error) {
        setError(error.response?.data?.message || 'Failed to fetch order details');
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  // For demo purposes, if no order is fetched, use sample data
  useEffect(() => {
    if (!loading && !order && !error) {
      // Sample order data
      setOrder({
        _id: id,
        user: {
          name: 'John Doe',
          email: 'john@example.com'
        },
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
        ],
        deliveryAddress: '123 Main St, Anytown, USA',
        paymentMethod: 'Credit Card',
        totalPrice: 27.96,
        isPaid: true,
        paidAt: '2023-05-15T10:35:00Z',
        isDelivered: true,
        deliveredAt: '2023-05-15T11:20:00Z',
        createdAt: '2023-05-15T10:30:00Z'
      });
    }
  }, [loading, order, error, id]);

  if (loading) {
    return <div className="loading">Loading order details...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!order) {
    return <div className="error-message">Order not found</div>;
  }

  return (
    <div className="order-screen">
      <h1>Order Details</h1>
      <div className="order-id">Order ID: {order._id}</div>
      
      <div className="order-grid">
        <div className="order-info">
          <div className="order-section">
            <h2>Shipping</h2>
            <p><strong>Name:</strong> {order.user.name}</p>
            <p><strong>Email:</strong> {order.user.email}</p>
            <p><strong>Address:</strong> {order.deliveryAddress}</p>
            <div className="delivery-status">
              {order.isDelivered ? (
                <div className="status-success">
                  Delivered on {new Date(order.deliveredAt).toLocaleDateString()}
                </div>
              ) : (
                <div className="status-pending">Not Delivered</div>
              )}
            </div>
          </div>
          
          <div className="order-section">
            <h2>Payment Method</h2>
            <p>{order.paymentMethod}</p>
            <div className="payment-status">
              {order.isPaid ? (
                <div className="status-success">
                  Paid on {new Date(order.paidAt).toLocaleDateString()}
                </div>
              ) : (
                <div className="status-pending">Not Paid</div>
              )}
            </div>
          </div>
          
          <div className="order-section">
            <h2>Order Items</h2>
            <div className="order-items">
              {order.orderItems.map((item, index) => (
                <div key={index} className="order-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-name">
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </div>
                  <div className="item-quantity">
                    {item.quantity} x ${item.price.toFixed(2)} = ${(item.quantity * item.price).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Items:</span>
            <span>${order.totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>$0.00</span>
          </div>
          <div className="summary-row">
            <span>Tax:</span>
            <span>$0.00</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>${order.totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;