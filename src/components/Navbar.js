import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    return(
        <nav className="ui raised very padded segment">
            <Link className="ui teal inverted segment" href="/">Lucia</Link>
            <div className="ui right floated header">
                <button className="ui button"><Link href="/">Home</Link></button>
                <button className="ui button"><NavLink href="/about">About</NavLink></button>
                <button className="ui button"><a href="/contact">Contact</a></button>
            </div>

        </nav>
    )
};

export default Navbar;