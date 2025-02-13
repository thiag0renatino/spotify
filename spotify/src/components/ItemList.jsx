import SingleItem from "./SingleItem";
import PropTypes from "prop-types";
import { artistArray } from "../assets/database/artists.js";

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
        {artistArray
          .filter((currentValue, index) => index < items)
          .map((currObj, index) => (
            <SingleItem {...currObj} key={`${title}-${index}`} />
          ))}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.number,
  id: PropTypes.number,
};
export default ItemList;
