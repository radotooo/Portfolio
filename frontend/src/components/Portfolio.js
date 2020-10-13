import React from 'react'
import Card from './PortfolioCard'
import './styles/portfolio.css'

export default function Portfolio() {

    return (
        <div className="portfolio">
            <img src='./styles/img/amazon-clone.jpg' alt="" />
            <Card title="Quote Machine" img="https://live.staticflickr.com/65535/50474214391_059006306f_w.jpg" codeUrl="https://github.com/radotooo/ReactJs/tree/master/RandomQuoteMachine" liveView="https://pensive-boyd-fe627b.netlify.app/" />

            <Card title="Amazon clone" img="https://live.staticflickr.com/65535/50473509543_7733a8a15d_w.jpg" codeUrl="https://github.com/radotooo/ReactJs/tree/master/AmazonClone/amazon-clone" liveView="https://clone-aa0a9.web.app/" />
        </div>
    )
}