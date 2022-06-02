import React from 'react';
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigation = useNavigate();

    const handleClick = () => {
        localStorage.removeItem('login');
        navigation('/');
        window.location.reload();
    }

    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand"></a>
            <button onClick={handleClick} className="btn btn-outline-success my-2 my-sm-0 m-5">Выход</button>
        </nav>
    );
};

export default Navbar;