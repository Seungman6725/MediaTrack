import { useAddContext } from '../contexts/AddContext';
import AddedCard from '../components/AddedCard';

function MyPicks(){
    const { added } = useAddContext();
  
  if (added){
    return (
      <div className='added'>
        <h2>Watch & Play List</h2>
        <div className="movies-grid">
          {added.map((movie) => 
          <AddedCard information={movie} type="movie" key={movie.id}/>)}
        </div>
      </div>
      );
  }
  return (
    <div className="favourites-empty">
      <h2>Nothing to Watch/Play Yet</h2>
    </div>
  );
}

export default MyPicks;