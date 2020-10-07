import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import './styles/header-nav-menu.css'


export default function NavMenu() {
    const [toggleNavMenu, setToggleNavMenu] = useState("")

    const handleClick = (e) => {
        if (e.target.nodeName !== "A") {
            setToggleNavMenu("")
        }
    }

    return (
        <div className="menu">
            <IconButton onClick={() => setToggleNavMenu("menu__show")}>
                <MenuIcon fontSize="large" />
            </IconButton>
            <div className={["menu__content", toggleNavMenu].join(" ")}
                onClick={handleClick} >
                <a>Home</a>
                <a>Portfolio</a>
                <a>Resume</a>
            </div>
        </div >
    )
}
