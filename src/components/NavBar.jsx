import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">MediaTrack</Link>
            </div>

            <div className="navbar-links">
                <Link to="/" className="navbar-link">Watch</Link>
                <Link to="/favourites" className="navbar-link">Favourites</Link>
            </div>
        </nav>
    );
}

export default NavBar;