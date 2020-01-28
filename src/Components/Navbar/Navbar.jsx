import './Navbar.css';

import React from "react";
import Logo from "./Glyph.svg";
import Menu from "../Menu";


const Navbar = () => {


    return (

            <div className="bg-dark border-right" id="sidebar-wrapper">
                <div className="sidebar-heading"><Logo width={40}/></div>

                <Menu/>
            </div>

    );
};

export default Navbar;