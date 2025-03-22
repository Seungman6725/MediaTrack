import '../css/Card.css'

function Card({ information }) {
    
    function handleFavouriteClick() {
        alert("Favourite button clicked");
    }

    return (
    <div className="card">
        <div className="card-image">
            <img src={information.image} alt={information.title} />

            <div className="card-overlay">
                <button className="favourite-btn" onClick={handleFavouriteClick}>
                    ❤︎
                </button>
            </div>
        </div>
        

        <div className="card-info">
            <h3>{information.title}</h3>
            <p>{information.releaseDate}</p>
        </div>
    </div>
  );
}

export default Card;