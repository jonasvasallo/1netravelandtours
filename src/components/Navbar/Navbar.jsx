import './navbar.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

function Navbar(){
    
    return(
        <>
        <header>
            <div className="header-content">
            <img src={logo} alt="logo" />
            <div className="nav-links">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/tour-packages"}>Tour Packages</Link>
                        <Link to={"/contact-us"}>Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="toggle-btn">
                <i className="fa-solid fa-bars" id="hamburger"></i>
            </div>
            </div>
            
        </header>
        </>
    )
}
export default Navbar