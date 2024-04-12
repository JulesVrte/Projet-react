import logo from './logo.svg';

const Navbar = () => {
    return ( 
        <nav className="navbar">

            <img className="logo" src={logo} alt="logo" />

            <div className="links">

                <a href="/">Accueil</a>

                <a href="/about">A propos</a>

            </div>
            
        </nav>
    );
}
 
export default Navbar;