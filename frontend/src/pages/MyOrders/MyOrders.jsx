import { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

function MyOrders() {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + '/api/order/userorders',
      {},
      { headers: { token } }
    );

    setData(response.data.data);
    // console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className='container'>
        {data.map((order, index) => {
          return (
            <div key={index} className='my-orders-order'>
              <img src={assets.parcel_icon} alt='order icon pic' />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length) {
                  }
                })}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyOrders;
