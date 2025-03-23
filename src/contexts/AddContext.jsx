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

    const removeAdded = (movie) => {
        setAdded(f => f.filter(movie => movie.id !== movie.id));
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