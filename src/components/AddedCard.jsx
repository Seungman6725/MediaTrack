import '../css/AddedCard.css'
import { useFavouriteContext } from '../contexts/FavouriteContext';
import { useAddContext } from '../contexts/AddContext';
import { useLocation } from 'react-router-dom';
import imageNotFound from '../assets/image-not-found-scaled.png';


function AddedCard({ information, type }) {
    const { isFavourite, addFavourite, removeFavourite } = useFavouriteContext();
    const favourite = isFavourite(information.id);

    const { isAdded, add, removeAdded } = useAddContext();
    const added = isAdded(information.id);
    const location = useLocation();

    const imageUrl = type === "movie" 
    ? `https://image.tmdb.org/t/p/w500${information.backdrop_path}` 
    : information.background_image;
    
    const title = type === "movie" ? information.title : information.name;

    const releaseDate = type === "movie" 
        ? information.release_date 
        : information.released;

    function handleRemoveClick(e) {
        e.preventDefault();

        if(location.pathname === "/favourites"){
            if(favourite){
                removeFavourite(information);
            }
            else{
                addFavourite(information);
            }
        }else{
            if(added){
                removeAdded(information);
            }
            else{
                add(information);
            }
        }
    }

    return (
    <div className="card">
        <div className="card-image">
        <img src={imageUrl ||imageNotFound} alt="Image not found" />

            <div className="card-overlay">
                <button className="remove-btn"
                    onClick={handleRemoveClick}>
                    ✖
                </button>
            </div>
        </div>
        

        <div className="card-info">
            <h3>{title}</h3>
            <p>{releaseDate?.split("-")[0]}</p>
        </div>
    </div>
  );
}

export default AddedCard;