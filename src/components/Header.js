import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");
    
    console.log("Header rendered");

    useEffect(() => {
        console.log("Header useEffect called");
    },[]);

    return (
        <div className="header">
            <div className='logo'>
                <img src={LOGO_URL} alt="logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <Link to="/about">About Us</Link></li>
                    <li>
                        <Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
                        }
                    }
                    >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;