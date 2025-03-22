import { createContext, useState, useContext, useEffect } from "react";

const FavouriteContext = createContext();

export const useFavouriteContext = () => useContext(FavouriteContext);

export const FavouriteProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);
    
    useEffect(() => {
        const storedFavourites = localStorage.getItem("favourites");

        if (storedFavourites) {
            setFavourites(JSON.parse(storedFavourites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    const addFavourite = (movie) => {
        setFavourites(f => [...f, movie]);
    }

    const removeFavourite = (movie) => {
        setFavourites(f => f.filter(movie => movie.id !== movie.id));
    }

    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.id === movieId);
    }

    const value = {
        favourites,
        addFavourite,
        removeFavourite,
        isFavourite
    }
    return <FavouriteContext.Provider value={value}>
        {children}
    </FavouriteContext.Provider>
};