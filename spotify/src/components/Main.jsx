import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import PropTypes from "prop-types";

const Main = ({ type }) => {
  return (
    <div className="main">
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={10}
          itemsArray={artistArray}
          path="/artists"
          idPath="artist"
        />
      ) : (
        <></>
      )}

      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={20}
          itemsArray={songsArray}
          path="/songs"
          idPath="song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};
Main.propTypes = {
  type: PropTypes.string,
};

export default Main;
