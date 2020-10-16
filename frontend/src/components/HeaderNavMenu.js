import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import './styles/header-nav-menu.css'
import { Link } from "react-router-dom";
import ResumeButton from './ResumeButton';


export default function NavMenu({ toggleNavMenu, setToggleNavMenu }) {

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
                onClick={() => setToggleNavMenu("")} >
                <Link to="/portfolio">Portfolio</Link>
                <ResumeButton />
            </div>
        </div >
    )
}
