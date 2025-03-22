import Card from '../components/Card.jsx'
import { useState } from 'react'
import '../css/Home.css'

function Home(){    

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "The Shawshank Redemption", year: 1994, rating: 9.3},
        {id: 2, title: "The Godfather", year: 1972, rating: 9.2},
        {id: 3, title: "The Dark Knight", year: 2008, rating: 9.0},
        {id: 4, title: "The Godfather: Part II", year: 1974, rating: 9.0},
    ]

    function handleSearch(e){
        e.preventDefault();
        alert(`Searching for ${searchQuery}`)
    }

    return( 
        <div className="home">

            <form onSubmit={handleSearch} className="seach-form">
                <input 
                    type="text" 
                    placeholder="Search for a movie" 
                    className="search-input" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">
                    Search
                </button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => 
                    <Card information={movie} key={movie.id}/>)}
            </div>
        </div>
    );
}

export default Home;