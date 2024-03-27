import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import Link for navigation
import { Context } from '../Context';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu visibility
  const { logout, getWatched } = useContext(Context)
  const navigate = useNavigate()

  const toggleMenu = () => setIsOpen(!isOpen); // Function to toggle menu visibility

  const handleLogout = ()=> {
    logout()
    navigate('/')
  }

  const handleWatching = ()=> {
    getWatched()
    navigate('/watching')
    setIsOpen(prev => !prev)
}

const handleCoinList = ()=> {
    navigate('/coin-list')
    setIsOpen(prev => !prev)
  }

  return (
    <nav className='navbar'>
        <button onClick={toggleMenu}>Menu</button>
      {isOpen && <ul className="nav-links">
        <li><button onClick={handleCoinList}>All Coins</button></li>
        <li><button onClick={handleWatching}>Watching</button></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>}
      
    </nav>
  );
};

export default Navbar;
