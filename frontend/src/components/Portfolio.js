import React from 'react'
import './styles/portfolio.css'
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Portfolio() {
    const eyeIcon = <FontAwesomeIcon className="resume__icon" icon={faEye} />
    const githubIcon = <FontAwesomeIcon className="resume__icon" icon={faGithub} />
    return (
        <div className="portfolio">
            <div className="card">
                <div className="card__title">
                    <p>Tittle</p>
                </div>
                <img className="card__image" src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png" alt="" />
                <div className="card__nav">
                    <a href=""> {eyeIcon} Live</a>
                    <a href=""> {githubIcon} Code</a>
                </div>
            </div>
            <div className="card">
                <div className="card__title">
                    <p>Tittle</p>
                </div>
                <img className="card__image" src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png" alt="" />
                <div className="card__nav">
                    <a href=""> {eyeIcon} Live</a>
                    <a href=""> {githubIcon} Code</a>
                </div>
            </div>
        </div>
    )
}