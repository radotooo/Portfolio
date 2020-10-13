import React from 'react'
import Card from './PortfolioCard'
import './styles/portfolio.css'




export default function Portfolio() {

    return (
        <div className="portfolio">
            <Card title="Quote Machine" img="https://raw.githubusercontent.com/radotooo/ReactJs/master/RandomQuoteMachine/img/Screenshot_20201001_020046.jpg" codeUrl="https://github.com/radotooo/ReactJs/tree/master/RandomQuoteMachine" liveView="https://pensive-boyd-fe627b.netlify.app/" />

            <Card title="Amazon clone" img="https://raw.githubusercontent.com/radotooo/ReactJs/master/AmazonClone/amazon-clone/public/screencapture-clone-aa0a9-web-app-2020-10-01-23_45_23.png" codeUrl="https://github.com/radotooo/ReactJs/tree/master/AmazonClone/amazon-clone" liveView="https://clone-aa0a9.web.app/" />
        </div>
    )
}