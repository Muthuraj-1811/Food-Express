import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AuthScreen.css';

const LoginScreen = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError('');
      
      const { data } = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password
      });
      
      localStorage.setItem('userInfo', JSON.stringify(data));
      setUser(data);
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'Invalid email or password');
    } finally {
      setLoading(false);
      // navigate('/');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h1>Sign In</h1>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="auth-redirect">
          New Customer? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;