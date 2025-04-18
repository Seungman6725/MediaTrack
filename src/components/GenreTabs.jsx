import React from 'react';
import '../css/GenreTabs.css';

function GenreTabs({ genres, selectedGenre, handleGenreClick }) {
    return (
        <div className="genre-tabs">
            <h2>Genres</h2>
            {genres.map((genre) => (
                <button
                    key={genre}
                    className={`tab ${selectedGenre === genre ? 'active' : ''}`}
                    onClick={() => handleGenreClick(genre)}
                >
                    {genre}
                </button>
            ))}
        </div>
    );
}

export default GenreTabs;