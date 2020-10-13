import React from 'react'
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/portfolio_card.css'


export default function Card(props) {
    const eyeIcon = <FontAwesomeIcon className="resume__icon" icon={faEye} />
    const githubIcon = <FontAwesomeIcon className="resume__icon" icon={faGithub} />
    return (
        <div className="card">
            <div className="card__title">
                <p>{props.title}</p>
            </div>
            <img className="card__image" src={props.img} alt="" />
            <div className="card__nav">
                <a href={props.liveView} target="_blank" rel="noopener noreferrer" > {eyeIcon} Live</a>
                <a href={props.codeUrl} target="_blank" rel="noopener noreferrer"> {githubIcon} Code</a>
            </div>
        </div >
    )
}
