import { Link } from "react-router-dom";
import SingleItem from "./SingleItem";
import PropTypes from "prop-types";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <Link className="item-list__link" to={path}>
          <p>Mostrar tudo</p>
        </Link>
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < items)
          .map((currObj, index) => (
            <SingleItem 
            {...currObj} 
            idPath={idPath}
            path={path}
            key={`${title}-${index}`} />
          ))}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.number,
  id: PropTypes.number,
  itemsArray: PropTypes.array,
  path: PropTypes.string,
  idPath: PropTypes.string
};
export default ItemList;
