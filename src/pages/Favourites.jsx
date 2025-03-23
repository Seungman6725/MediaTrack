import '../css/Favourites.css'
import { useFavouriteContext } from '../contexts/FavouriteContext';
import Card from '../components/Card';

function Favourites() {

  const { favourites } = useFavouriteContext();
  
  if (favourites.length > 0){
    return (
      <div className='favourites'>
        <h2>Your Favourites</h2>
        <div className="movies-grid">
          {favourites.map((movie) => 
          <Card information={movie} key={movie.id}/>)}
        </div>
      </div>
      );
  }
  else{ 
    return (
      <div className="favourites-empty">
        <h2>No Favourites Yet</h2>
        <p>Start adding your favourites and they will appear here</p>
      </div>
    );
  }
}

export default Favourites;