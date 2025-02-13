import { Link } from "react-router-dom";

const SongItem = () => {
  return (
    <Link className="song-item" to="/song/1">
      <div className="song-item__number-album">
        <p>1</p>

        <div className="song-item__album">
          <img
            className="song-item__image"
            src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
            alt="Imagem música x"
          />

          <p className="song-item__name">Última saudade - Ao Vivo</p>
        </div>
      </div>

      <p>02:40</p>
    </Link>
  );
};

export default SongItem;
