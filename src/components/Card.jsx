import '../css/Card.css'
import { useFavouriteContext } from '../contexts/FavouriteContext';
import { useAddContext } from '../contexts/AddContext';
import imageNotFound from '../assets/image-not-found-scaled.png';
import { useLocation } from "react-router-dom";

import React, { useState } from 'react';

function Card({ information}) {
    const { isFavourite, addFavourite, removeFavourite } = useFavouriteContext();
    const favourite = isFavourite(information.id);

    const { isAdded, add, removeAdded } = useAddContext();
    const added = isAdded(information.id);

    const imageUrl = information.backdrop_path
        ? `https://image.tmdb.org/t/p/w500${information.backdrop_path}`
        : information.background_image || imageNotFound;
    
    const title = information.title || information.name || "Title not found";
    const releaseDate = information.release_date || information.released || "Unknown";

    const location = useLocation();
    const [isRemoving, setIsRemoving] = useState(false);

    function handleFavouriteClick(e) {
        e.preventDefault();
        if(favourite){
            removeFavourite(information);
        }
        else{
            addFavourite(information);
        }
    }

    function handleAddClick(e){
        e.preventDefault();
        if(added){
            removeAdded(information);
        }
        else{
            add(information);
        }
    }

    function handleRemoveClick(e) {
        e.preventDefault();
        setIsRemoving(true);

        setTimeout(() => {
            if(location.pathname === "/favourites"){
                if(favourite){
                    removeFavourite(information);
                }
                else{
                    addFavourite(information);
                }
            }else{
                if(added){
                    removeAdded(information);
                }
                else{
                    add(information);
                }
            }
        }, 300);
    }

    let overlay = null;

    if(location.pathname === "/" || location.pathname === "/video-games"){
        overlay = (<div className="card-overlay">
            <button className={`favourite-btn ${favourite ? "active" : ""}`}
                onClick={handleFavouriteClick}>
                ❤
            </button>

            <button className={`add-btn ${added ? "active" : ""}`} 
                onClick={handleAddClick}>
                {added ? "✔" : "✚"}
            </button>
        </div>);
    }
    else{
        overlay =(<div className="card-overlay">
            <button className="remove-btn"
                onClick={handleRemoveClick}>
                ✖
            </button>
        </div>);
    }
    return (
    <div className={`card ${isRemoving ? "removing" : ""}`}>
        <div className="card-image">
            <img src={imageUrl ||imageNotFound} alt="Image not found" />
            {overlay}
        </div>
        <div className="card-info">
            <h3>{title}</h3>
            <p>{releaseDate?.split("-")[0]}</p>
        </div>
    </div>
  );
}

export default Card;