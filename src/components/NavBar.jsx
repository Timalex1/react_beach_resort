import React, {useState} from 'react';
import logo from '../images/logo.svg'
import {FaAlignRight} from "react-icons/fa";
import {Link} from "react-router-dom";


export default function NavBar() {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Beach Resort" />
                    </Link>
                    <button type="button" onClick={handleToggle} className="nav-btn">
                        <FaAlignRight className="nav-icon" />
                    </button>
                </div>
                <ul className={toggle? "nav-links show-nav" : "nav-links"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/rooms">Rooms</Link></li>
                </ul>
            </div>
        </nav>
    )
}