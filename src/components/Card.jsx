import '../css/Card.css'
import { useFavouriteContext } from '../contexts/FavouriteContext';

function Card({ information }) {
    const { isFavourite, addFavourite, removeFavourite } = useFavouriteContext();
    const favourite = isFavourite(information.id);

    function handleFavouriteClick(e) {
        e.preventDefault();
        if(favourite){
            removeFavourite(information);
        }
        else{
            addFavourite(information);
        }
    }

    return (
    <div className="card">
        <div className="card-image">
            <img src={`https://image.tmdb.org/t/p/w500${information.poster_path}`} 
                alt={information.title} />

            <div className="card-overlay">
                <button className={`favourite-btn ${favourite ? "active" : ""}`}
                    onClick={handleFavouriteClick}>
                    ❤
                </button>
            </div>
        </div>
        

        <div className="card-info">
            <h3>{information.title}</h3>
            <p>{information.release_date?.split("-")[0]}</p>
        </div>
    </div>
  );
}

export default Card;