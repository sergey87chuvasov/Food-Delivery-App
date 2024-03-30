import { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState('Sign Up');
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt='log pic'
          />
        </div>
        <div className='login-popup-inputs'>
          <input type='text' placeholder='Ypur Name' required />
          <input type='email' placeholder='Your email' required />
          <input type='password' placeholder='Password' required />
        </div>
        <button>{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>
      </form>
    </div>
  );
}

export default LoginPopup;
