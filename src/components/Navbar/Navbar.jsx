import './navbar.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import React, {useEffect} from "react";

function Navbar(){
    useEffect(() => {
        const toggleBtnIcon = document.querySelector('.toggle-btn i');
        const toggleBtn = document.querySelector('.toggle-btn');
        const dropdownMenu = document.querySelector('.dropdown_menu');
        
        const handleToggleClick = () => {
            dropdownMenu.classList.toggle('open');
            const isOpen = dropdownMenu.classList.contains('open');
            toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        };

        toggleBtn.addEventListener('click', handleToggleClick);

        return () => {
            toggleBtn.removeEventListener('click', handleToggleClick);
        };
    }, []);
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
        <div className="dropdown_menu">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/tour-packages"}>Tour Packages</Link></li>
            <li><Link to={"/contact-us"}>Contact Us</Link></li>
        </div>
        </>
    )
}
export default Navbar