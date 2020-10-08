import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import './styles/footer.css'

export default function Footer() {
    const envelopIcon = <FontAwesomeIcon icon={faEnvelope} />
    return (
        <div className="footer">
            <div className="footer__container">
                <p>
                    {envelopIcon} radotooo@gmail.com
                </p>
            </div>
        </div>
    )
}
