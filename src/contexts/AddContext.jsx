import { createContext, useState, useContext, useEffect } from "react";

const AddContext = createContext();

export const useAddContext = () => useContext(AddContext);

export const AddProvider = ({children}) => {
    const [added, setAdded] = useState([]);
    
    useEffect(() => {
        const storedAdded = localStorage.getItem("added");

        if (storedAdded) {
            setAdded(JSON.parse(storedAdded));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("added", JSON.stringify(added));
    }, [added]);

    const add = (movie) => {
        setAdded(f => [...f, movie]);
    }

    const removeAdded = (movieToRemove) => {
        setAdded(f => f.filter(added => added.id !== movieToRemove.id));
    }

    const isAdded = (movieId) => {
        return added.some(movie => movie.id === movieId);
    }

    const value = {
        added,
        add,
        removeAdded,
        isAdded
    }
    return <AddContext.Provider value={value}>
        {children}
    </AddContext.Provider>
};