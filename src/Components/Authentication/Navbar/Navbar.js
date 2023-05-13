import './Navbar.css'
import { useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Navbardetails } from './Navbardetails';
import logo from '../../../images/logo.png';
const Navbar = () => {
    const navRef = useRef()

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive-nav")
    }
    return ( 
        <div className="navbar">
            <div className="navbar-inner">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="navbar-links menu" ref={navRef}>
                    <div className="navbar-close">
                        <button className='nav-btn nav-close' onClick={showNavbar}>
                            <FaTimes />
                        </button>
                    </div>
                    <nav >
                        {Navbardetails.map((val, key)=>{
                            return(
                                <li
                                    key={key}
                                    className="link-path"
                                    onClick={showNavbar}
                                >
                                    <Link to={val.link}>
                                        <div className="address-name">{val.title}</div>
                                    </Link>
                                </li>
                            )
                        })}
                    </nav>
                    {/* <div className="auth-button">
                        <Link to="/login"><button className="login">Log in</button></Link>
                        <Link to="/signup"><button className="signup-2">Sign up</button></Link>
                    </div> */}
                </div>
                <button className='nav-btn nav-close' onClick={showNavbar}>
                    <FaBars/>
                </button>
            </div>
        </div>
    );
}
 
export default Navbar;