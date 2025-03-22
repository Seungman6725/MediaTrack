import '../css/Card.css'

function Card({ information }) {
    
    function handleFavouriteClick() {
        alert("Favourite button clicked");
    }

    return (
    <div className="card">
        <div className="card-image">
            <img src={`https://image.tmdb.org/t/p/w500${information.poster_path}`} 
                alt={information.title} />

            <div className="card-overlay">
                <button className="favourite-btn" onClick={handleFavouriteClick}>
                    ❤︎
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