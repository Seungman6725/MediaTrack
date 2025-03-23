import { Link, useLocation} from "react-router-dom";
import '../css/NavBar.css'

function NavBar(){
    const location = useLocation();
    
    function isActive(path) {
        return location.pathname === path;
    }

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">MediaTrack</Link>
            </div>

            <div className="navbar-links">
                <Link to="/" className={`navbar-link ${isActive('/') ? 'active' : ''}`}>Watch</Link>
                <Link to="/play" className={`navbar-link ${isActive('/play') ? 'active' : ''}`}>Play</Link>
                <Link to="/my-picks" className={`navbar-link ${isActive('/my-picks') ? 'active' : ''}`}>My Picks</Link>
                <Link to="/favourites" className={`navbar-link ${isActive('/favourites') ? 'active' : ''}`}>Favourites</Link>
            </div>
        </nav>
    );
}

export default NavBar;