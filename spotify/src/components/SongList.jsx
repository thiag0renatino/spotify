import SongItem from "./SongItem";
import PropTypes from "prop-types";

const SongList = ({ songsArray }) => {
  return (
    <div className="song-list">
      {songsArray.map((currentSongObj, index) => (
        <SongItem key={index} {...currentSongObj} index={index}/>
      ))}

      <div className="song-list__see-more">
        <p>Ver mais</p>
      </div>
    </div>
  );
};

SongList.propTypes = {
  songsArray: PropTypes.array,
};

export default SongList;
