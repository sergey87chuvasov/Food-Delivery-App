import { assets } from '../../assets/assets';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-options'>
        <div className='sidebar-option'>
          <img src={assets.add_icon} alt='icon pic' />
          <p>Add Items</p>
        </div>
        <div className='sidebar-option'>
          <img src={assets.order_icon} alt='icon pic' />
          <p>List Items</p>
        </div>
        <div className='sidebar-option'>
          <img src={assets.order_icon} alt='icon pic' />
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
