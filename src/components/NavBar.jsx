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
                <Link to="/movies">MediaTrack</Link>
            </div>

            <div className="navbar-links">
                <Link to="/movies" className={`navbar-link ${isActive('/movies') ? 'active' : ''}`}>Movies</Link>
                <Link to="/video-games" className={`navbar-link ${isActive('/video-games') ? 'active' : ''}`}>Video Games</Link>
                <Link to="/watch&play-list" className={`navbar-link ${isActive('/watch&play-list') ? 'active' : ''}`}>Watch & Play List</Link>
                <Link to="/favourites" className={`navbar-link ${isActive('/favourites') ? 'active' : ''}`}>Favourites</Link>
            </div>
        </nav>
    );
}

export default NavBar;