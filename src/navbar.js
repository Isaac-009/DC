import {Link} from 'react-router-dom'

function Navbar() {
    return(
        <nav className="navbar">
        <h2>Everything DC</h2>
        <div className="navlinks">
        <Link to="/">Home</Link>
        <Link to="/photos">Photos</Link>
        <Link to="/poems">Poems</Link>
        </div>
        </nav>
    );
}

export default Navbar;