import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import './styles/header-nav-menu.css'

export default function NavMenu() {
    const [toggleNavMenu, setToggleNavMenu] = useState("")

    const handleClick = (e) => {
        if (e.target.nodeName !== "A") {
            setToggleNavMenu("")
        }
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
        <div className="menu">
            {handleIcons()}
            <div className={["menu__content", toggleNavMenu].join(" ")}
                onClick={handleClick} >
                <a>Home</a>
                <a>Portfolio</a>
                <a>Resume</a>
            </div>
        </div >
    )
}
