import SongItem from "./SongItem"

const SongList = () => {
  return (
    <div className="song-list">
        <SongItem/>

        <div className="song-list__see-more">
            <p>Ver mais</p>
        </div>
    </div>
  )
}

export default SongList