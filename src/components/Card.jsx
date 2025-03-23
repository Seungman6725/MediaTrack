import '../css/Card.css'
import { useFavouriteContext } from '../contexts/FavouriteContext';

function Card({ information, type }) {
    const { isFavourite, addFavourite, removeFavourite } = useFavouriteContext();
    const favourite = isFavourite(information.id);

    const imageUrl = type === "movie" 
    ? `https://image.tmdb.org/t/p/w500${information.backdrop_path}` 
    : information.background_image;
    
    const title = type === "movie" ? information.title : information.name;

    const releaseDate = type === "movie" 
        ? information.release_date 
        : information.released;

    function handleFavouriteClick(e) {
        e.preventDefault();
        if(favourite){
            removeFavourite(information);
        }
        else{
            addFavourite(information);
        }
    }

    function handleAddClick(e){
        e.preventDefault();
        console.log("Add button clicked");
        //
        //
        // Fill in
        //
        //
    }

    return (
    <div className="card">
        <div className="card-image">
            <img src={imageUrl} 
                alt={title} />

            <div className="card-overlay">
                <button className={`favourite-btn ${favourite ? "active" : ""}`}
                    onClick={handleFavouriteClick}>
                    ❤
                </button>

                <button className="add-btn" onClick="handleAddClick">✚</button>
            </div>
        </div>
        

        <div className="card-info">
            <h3>{title}</h3>
            <p>{releaseDate?.split("-")[0]}</p>
        </div>
    </div>
  );
}

export default Card;