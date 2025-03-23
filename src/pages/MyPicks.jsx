import { useAddContext } from '../contexts/AddContext';
import Card from '../components/Card';

function MyPicks(){
    const { added } = useAddContext();
  
  if (added.length > 0){
    return (
      <div className='added'>
        <h2>Watch & Play List</h2>
        <div className="movies-grid">
          {added.map((movie) => 
          <Card information={movie} type="movie" key={movie.id}/>)}
        </div>
      </div>
      );
  }
  else{
    return (
      <div className="favourites-empty">
        <h2>Nothing to Watch/Play Yet</h2>
        <p>Your Watch & Play List is empty. Add movies, shows, and games you're excited to check out!</p>      </div>
    );
  }
}

export default MyPicks;