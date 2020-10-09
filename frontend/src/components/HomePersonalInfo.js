import React from 'react'
import './styles/homePersonalInfo.css'
import cssImg from './styles/img/iconfinder_badge-css-3_317756.png'
import nodeImg from './styles/img/iconfinder_233_Node_Js_logo_4375017.png'
import gitImg from './styles/img/iconfinder_social_media_social_media_logo_git_2993773.png'
import htmlImg from './styles/img/iconfinder_badge-html-5_317755.png'
import jsImg from './styles/img/iconfinder_187_Js_logo_logos_4373213.png'
import reactImg from './styles/img/iconfinder_React.js_logo_1174949.png'
import mongoImg from './styles/img/logo-mongodb-png-mongodb-logo-png-400.png'
import csharpImg from './styles/img/223px-C_Sharp_logo.png'
import netCoreImg from './styles/img/240px-.NET_Core_Logo.svg.png'
import sqlImg from './styles/img/officedatabase_103574.png'

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
                    <img src={csharpImg} alt="" />
                    <img src={netCoreImg} alt="" />
                    <img src={jsImg} alt="" />
                    <img src={nodeImg} alt="" />
                    <img src={reactImg} alt="" />
                    <img src={htmlImg} alt="" />
                    <img src={cssImg} alt="" />
                    <img src={sqlImg} alt="" />
                    <img src={mongoImg} alt="" />
                    <img src={gitImg} alt="" />

                </div>
            </div>
        </div>
    )
}
