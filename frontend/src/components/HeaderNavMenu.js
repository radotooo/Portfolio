import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import './styles/header-nav-menu.css'
import { Link } from "react-router-dom";


export default function NavMenu() {
    const [toggleNavMenu, setToggleNavMenu] = useState("")

    const handleClick = (e) => {
        setToggleNavMenu("")
    }

    const handleIcons = () => {
        if (toggleNavMenu === "menu__show") {

            return <IconButton onClick={() => setToggleNavMenu("")} >
                <CloseIcon />
            </IconButton>
        }
        return <IconButton onClick={() => setToggleNavMenu("menu__show")}  >
            <MenuIcon />
        </IconButton>
    }

    return (
        <div className="nav__menu">
            {handleIcons()}
            <div className={["menu__content", toggleNavMenu].join(" ")}
                onClick={handleClick} >
                <Link to="/" onClick={handleClick}>Home</Link>
                <Link to="/portfolio" onClick={handleClick}>Portfolio</Link>
                <a>Resume</a>
            </div>
        </div >
    )
}
