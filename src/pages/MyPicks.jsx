import { useAddContext } from '../contexts/AddContext';
import Card from '../components/Card';

function MyPicks(){
    const { added } = useAddContext();
  
  if (added){
    return (
      <div className='added'>
        <h2>My Picks</h2>
        <div className="movies-grid">
          {added.map((movie) => 
          <Card information={movie} key={movie.id}/>)}
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