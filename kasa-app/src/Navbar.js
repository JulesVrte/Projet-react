import logo from './logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">

            <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>

            <div className="links">

                <Link to="/">Accueil</Link>

                <Link to="/about">A propos</Link>

            </div>
            
        </nav>
    );
}
 
export default Navbar;