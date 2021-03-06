import React from 'react'
import Card from './PortfolioCard'
import './styles/portfolio.css'

export default function Portfolio() {

    return (
        <div className="container">
            <div className="portfolio">
                <Card title="Quote Machine" img="https://live.staticflickr.com/65535/50474214391_059006306f_w.jpg" codeUrl="https://github.com/radotooo/ReactJs/tree/master/RandomQuoteMachine" liveView="https://pensive-boyd-fe627b.netlify.app/" />

                <Card title="Amazon clone" img="https://live.staticflickr.com/65535/50516365768_083cd9d034_o.png" codeUrl="https://github.com/radotooo/ReactJs/tree/master/AmazonClone/amazon-clone" liveView="https://clone-aa0a9.web.app/" />

                <Card title="Portfolio" img="https://live.staticflickr.com/65535/50495662926_93635dd588_w.jpg" codeUrl="https://github.com/radotooo/Portfolio/tree/main/frontend" liveView="" />

                <Card title="To-do List" img="https://live.staticflickr.com/65535/50745095402_106e386914_w.jpg" codeUrl="https://github.com/radotooo/VueJs" liveView="" />

            </div>
        </div>
    )
}