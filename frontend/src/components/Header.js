import React from 'react'
import "./styles/header.css"
import NavMenu from './HeaderNavMenu'
import { faFileDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    const resumeIcon = <FontAwesomeIcon className="resume__icon" icon={faFileDownload} />

    return (
        <div className="nav">
            <div className="nav__content">
                <p>Home</p>
                <NavMenu />
                <div className="nav__content__text">
                    <p>Portfolio</p>
                    <p> {resumeIcon} Resume</p>
                </div>
            </div>

        </div>
    )
}
