import React from 'react'
import "./styles/header.css"
import NavMenu from './HeaderNavMenu'

export default function Header() {
    return (
        <div className="nav">
            <div className="nav__content">
                <p>Home</p>
                <NavMenu />
                <div className="text">
                    <p>Portfolio</p>
                    <p>Resume</p>
                </div>
            </div>

        </div>
    )
}
