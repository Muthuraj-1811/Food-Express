import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    setUser(null);
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">FoodDelivery</Link>
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li className="dropdown">
                  <button className="dropdown-btn">{user.name}</button>
                  <div className="dropdown-content">
                    <Link to="/profile">Profile</Link>
                    <button onClick={logoutHandler} className="logout-btn">
                      Logout
                    </button>
                  </div>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;