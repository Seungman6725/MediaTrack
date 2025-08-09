import Card from '../components/Card.jsx'
import { useState, useEffect } from 'react'
import { searchMovies, getPopularMovies, getMoviesByGenre } from '../services/movies.js'
import GenreTabs from '../components/GenreTabs.jsx'
import Pagination from '../components/Pagination.jsx'
import '../css/Home.css'

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedGenre, setSelectedGenre] = useState('All');

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const genres = ['All', 'Action', 'Comedy', 'Adventure', 'Sci-Fi', 'Horror', 'Thriller', 'Fantasy', 'Romance', 'Crime'];

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                setLoading(true);
                let data;

                if (selectedGenre === 'All') {
                    data = await getPopularMovies(currentPage);
                } else {
                    data = await getMoviesByGenre(selectedGenre, currentPage);
                }

                setMovies(data.results);
                setTotalPages(data.total_pages);
                setTotalResults(data.total_results);
                setError(null);
            }
            catch (error) {
                console.log(error);
                setError("Failed to load movies");
            }
            finally {
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, [selectedGenre, currentPage]);


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
            const data = await searchMovies(searchQuery, 1); // Start search at page 1
            setMovies(data.results);
            setTotalPages(data.total_pages);
            setTotalResults(data.total_results);
            setCurrentPage(1);
            setError(null);
        }
        catch (error) {
            console.log(error);
            setError("Failed to search movies");
        }
        finally {
            setLoading(false);
        }
    };

    const handleGenreClick = (genre) => {
        setSelectedGenre(genre);
        setCurrentPage(1);
    }

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for a movie"
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
                        <div className='movies-section'>
                            <div className="movies-grid">
                                {movies.map((movie) =>
                                    <Card information={movie} key={movie.id} />)}
                            </div>

                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    )}

            </div>
        </div>
    );
}

export default Home;