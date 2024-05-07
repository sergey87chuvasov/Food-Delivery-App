import './Navbar.css';
import { assets } from '../../assets/assets';

function Navbar() {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt='logo pic' />
      <img className='profile' src={assets.profile_image} alt='profile pic' />
    </div>
  );
}

export default Navbar;
