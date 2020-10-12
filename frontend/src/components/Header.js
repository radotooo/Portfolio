import React from 'react'
import "./styles/header.css"
import NavMenu from './HeaderNavMenu'
import { faFileDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

export default function Header() {
    const resumeIcon = <FontAwesomeIcon className="resume__icon" icon={faFileDownload} />

    return (
        <div className="nav">
            <div className="nav__content">
                <Link to="/">Home</Link>
                <NavMenu />
                <div className="nav__content__text">
                    <Link to="/portfolio">Portfolio</Link>
                    <p>{resumeIcon} Resume</p>
                </div>
            </div>

        </div>
    )
}
