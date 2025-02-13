import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

const SingleItem = ( {name , image, artist}) => {

  return (
    <div className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={image}
            alt={`Imagem de ${name}`}
          />
        </div>

        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
      </div>

      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{name}</p>
        </div>
        <p className="single-item__type">
            {artist ?? "Artista"}
        </p>
      </div>
    </div>
  );
};
SingleItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    banner: PropTypes.string,
    artist: PropTypes.any
}
export default SingleItem;
