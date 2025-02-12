import SingleItem from "./SingleItem";
import PropTypes from 'prop-types';


const ItemList = ({ title, items }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <a className="item-list__link" href="/">
          <p>Mostrar tudo</p>
        </a>
      </div>

      <div className="item-list__container">
        {items === 5 ? (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        ) : (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        )}
      </div>
    </div>
  );
  
};

ItemList.propTypes = {
    title: PropTypes.string,
    items: PropTypes.number,
  };
export default ItemList;
