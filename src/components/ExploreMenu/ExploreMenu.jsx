import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

function ExploreMenu() {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt autem
        natus quia, repellendus iste odit voluptate vitae. Voluptates excepturi
        praesentium deleniti, voluptatem expedita molestias, fuga aut
        necessitatibus sed omnis officiis.
      </p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div key={index} className='explore-menu-list-item'>
              <img src={item.menu_image} alt='menu-item' />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExploreMenu;
