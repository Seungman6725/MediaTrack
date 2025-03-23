import { Link } from "react-router-dom";
import '../css/NavBar.css'

function NavBar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">MediaTrack</Link>
            </div>

            <div className="navbar-links">
                <Link to="/" className="navbar-link">Watch</Link>
                <Link to="/play" className="navbar-link">Play</Link>
                <Link to="/my-picks" className="navbar-link">My Picks</Link>
                <Link to="/favourites" className="navbar-link">Favourites</Link>
            </div>
        </nav>
    );
}

export default NavBar;