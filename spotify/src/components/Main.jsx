import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray} from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      <ItemList title="Artistas" items={5} itemsArray={artistArray}/>
      <ItemList title="Músicas" items={10} itemsArray={songsArray}/>

    </div>
  );
};

export default Main;
