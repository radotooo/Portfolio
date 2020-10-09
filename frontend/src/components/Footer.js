import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import './styles/footer.css'


export default function Footer() {
    const envelopIcon = <FontAwesomeIcon className="email" size="lg" icon={faEnvelope} />
    const githubIcon = <FontAwesomeIcon icon={faGithub} size="lg" />
    const linkedIcon = <FontAwesomeIcon icon={faLinkedin} size="lg" />

    return (
        <div className="footer">
            <div className="footer__container">
                <p>Contact me:</p>
                <a href="mailto:radotooo@gmail.com" target="_blank" rel="noopener noreferrer" className="footer__container__email">
                    {envelopIcon}
                </a>
                <a href="https://github.com/radotooo" target="_blank" rel="noopener noreferrer">
                    {githubIcon}
                </a>
                <a href="https://www.linkedin.com/in/radislav-danev-44a371a8/" target="_blank" rel="noopener noreferrer">
                    {linkedIcon}
                </a>
            </div>
        </div>
    )
}
