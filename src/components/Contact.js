import React from "react";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

const Contact = () => {
    
    // al hacer click en contact pasaran 2seg y se cambiara a la vista de about
    /*let navigate = useNavigate();
        useEffect(() => {
            setTimeout(() => {
                navigate("/about");
            }, 2000);
        }, [navigate]);*/
    
    return(
        <div>
            <div className="ui raised very padded text container segment"
            style={{marginTop:'80px'}}
            >
                <Link to='/card/chiqui' className="ui header">Chiqui</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="ui raised very padded text container segment"
            style={{marginTop:'80px'}}
            >
                <Link to='/card/lucas' className="ui header">Lucas</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
};

export default Contact;