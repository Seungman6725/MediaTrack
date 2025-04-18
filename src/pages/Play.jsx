import Card from '../components/Card.jsx'
import { useState, useEffect } from 'react'
import { getPopularGames, searchGames, getGamesByGenre } from '../services/videoGames.js';
import GenreTabs from '../components/GenreTabs.jsx'


import '../css/Home.css'


function Play() {
    const [searchQuery, setSearchQuery] = useState("");

    const [games, setGames] = useState([]);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedGenre, setSelectedGenre] = useState('All');

    const genres = ['All', 'Action', 'Adventure', 'RPG', 'Shooter', 'Strategy', 'Fighting', 'Sports', 'Indie', 'Racing'];

    useEffect(() => {

        const loadPopularGames = async () => {
            try {
                setLoading(true);
                if (selectedGenre === 'All') {
                    const popularGames = await getPopularGames();
                    setGames(popularGames);
                }

                else {
                    const popularGames = await getGamesByGenre(selectedGenre);
                    setGames(popularGames);
                }
                setError(null);
            }
            catch (error) {
                console.log(error);
                setError("Failed to load games");
            }
            finally {
                setLoading(false);
            }
        }

        loadPopularGames();
    }, [selectedGenre]);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) {
            return;
        }

        if (loading) {
            return;
        }

        setLoading(true);
        try {
            const searchResults = await searchGames(searchQuery);
            setGames(searchResults);
            setError(null);
        }
        catch (error) {
            console.log(error);
            setError("Failed to search games");
        }
        finally {
            setLoading(false);
        }
    };

    const handleGenreClick = (genre) => {
        setSelectedGenre(genre);
    }

    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for a game"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">
                    Search
                </button>
            </form>

            {error && <div className="error">{error}</div>}
            <div className="content-container">
                <GenreTabs
                    genres={genres}
                    selectedGenre={selectedGenre}
                    handleGenreClick={handleGenreClick}
                />
                {loading ? (<div className="loading">Loading...</div>)
                    : (
                        <div className="movies-grid">
                            {games.map((game) =>
                                <Card information={game} type="game" key={game.id} />)}
                        </div>)}
            </div>
        </div>
    );
}

export default Play;