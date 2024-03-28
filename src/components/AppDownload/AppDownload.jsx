import './AppDownload.css';
import { assets } from '../../assets/assets';

function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className='app-download-platforms'>
        <img src={assets.play_store} alt='app icon' />
        <img src={assets.app_store} alt='app icon' />
      </div>
    </div>
  );
}

export default AppDownload;
