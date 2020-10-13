import React from 'react'
import './styles/homePersonalInfo.css'
import { data } from '../data/TechnologiesData'

export default function PersonalInfo() {
    return (
        <div className="information">
            <div className="information__container">

                <div className="information__container__text">
                    <p>Hello!</p>
                    <p>My name is Radislav Danev.</p>
                    <p>I am a self taught Web Developer.</p>
                </div>
                <div className="information__container__images">
                    {data.map((x, i) => <div className="portfolio__card" key={i}>
                        <img src={x.img} alt="" />
                        <p>{x.name}</p>
                    </div>)}
                </div>
            </div>
        </div>
    )
}
