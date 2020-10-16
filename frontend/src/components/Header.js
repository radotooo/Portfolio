import React, { useState } from 'react'
import "./styles/header.css"
import NavMenu from './HeaderNavMenu'
import { Link } from "react-router-dom";
import ResumeButton from './ResumeButton'

export default function Header() {
    const [toggleNavMenu, setToggleNavMenu] = useState("")

    return (
        <div className="nav">
            <div className="nav__content">
                <Link to="/" onClick={() => setToggleNavMenu("")}>Home</Link>
                <NavMenu toggleNavMenu={toggleNavMenu} setToggleNavMenu={setToggleNavMenu} />
                <div className="nav__content__text">
                    <Link to="/portfolio">Portfolio</Link>
                    <ResumeButton />
                </div>
            </div>

        </div>
    )
}
