import { useState } from 'react';
import { assets } from '../../assets/assets';
import './FoodItem.css';

function FoodItem({ id, name, price, description, image }) {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt='item pic' />
        {!itemCount ? (
          <img
            className='add'
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_white}
            alt='item pic'
          />
        ) : (
          <div className='food-item-counter'>
            <img
              onClick={() => setItemCount((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt='item pic'
            />
            <p>{itemCount}</p>
            <img
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt='item pic'
            />
          </div>
        )}
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='stars' />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>$ {price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
