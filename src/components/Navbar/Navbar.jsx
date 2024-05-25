import './navbar.css';
import logo from '../../assets/logo.png'

function Navbar(){
    
    return(
        <>
        <header>
            <div className="header-content">
            <img src={logo} alt="logo" />
            <div className="nav-links">
                <ul>
                    <li>
                        <a href="#">Home</a>
                        <a href="about.php">About</a>
                        <a href="#services">Services</a>
                        <a href="tours.php">Tour Packages</a>
                        <a href="feedback.php">Reviews</a>
                        <a href="contact.php">Contact</a>
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