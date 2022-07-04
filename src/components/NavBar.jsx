import react, {useState} from 'react';
import logo from '../images/logo.svg'
import {FaAlignRight} from "react-icons/fa";
import {Link} from "react-router-dom";


export default function NavBar() {
    const [toggle, setToggle] = useState(true)

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
                </div>
            </div>
        </nav>
    )
}