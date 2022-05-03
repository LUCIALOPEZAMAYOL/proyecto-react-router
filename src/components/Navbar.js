import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    return(
        <nav className="ui raised very padded segment">
            <Link className="ui teal inverted segment" to="/">Lucia</Link>
            <div className="ui right floated header">
                <button className="ui button"><Link to="/">Home</Link></button>
                <button className="ui button"><NavLink to="/about">About</NavLink></button>
                <button className="ui button"><Link to="/contact">Contact</Link></button>
            </div>

        </nav>
    )
};

export default Navbar;