import React from "react";
import { bubble as Menu } from "react-burger-menu";
// pushRotate

export default props => {
    return (
        <Menu {...props}>
            <a className="menu-item" href="/">Home</a>
            <a className="menu-item" href="/Blog">Blog</a>
            <a className="menu-item" href="/Projects">Projects</a>
            <a className="menu-item" href="/About">About</a>
            <a className="menu-item" href="/Contact">Contact</a>
            <a className="menu-item" href="/Login">Login</a>
        </Menu>
    );
};