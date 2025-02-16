import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const SongItem = ({ image, name, duration,id, index}) => {
  return (
    <Link className="song-item" to={`/song/${id}`}>
      <div className="song-item__number-album">
        <p>{index + 1}</p>

        <div className="song-item__album">
          <img
            className="song-item__image"
            src={image}
            alt={`Imagem música ${name}`}
          />

          <p className="song-item__name">{name}</p>
        </div>
      </div>

      <p>{duration}</p>
    </Link>
  );
};
SongItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  duration: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number,
};

export default SongItem;
