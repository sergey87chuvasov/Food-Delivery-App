import { assets } from '../../assets/assets';
import './Footer.css';

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} alt='logo pic' />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            in obcaecati corporis nemo eaque voluptatum, labore perspiciatis
            aliquam praesentium odio officia ut, maxime voluptate quibusdam!{' '}
          </p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt='icon pic' />
            <img src={assets.twitter_icon} alt='icon pic' />
            <img src={assets.linkedin_icon} alt='icon pic' />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+33-44-55-33-11</li>
            <li>contact@tom.com</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Footer;
