import { assets } from '../../assets/assets';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt='logo' />
      <ul className='navbar-menu'>
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact Us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='search-icon' />
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt='basket-icon' />
          <div className='dot'></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
