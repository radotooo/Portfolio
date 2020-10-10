import React from 'react'
import Footer from './Footer'
import Header from './Header'
import PersonalInfo from './HomePersonalInfo'
import Portfolio from './Portfolio'
import './styles/home.css'

export default function Home() {
    return (
        <div className="home">
            <Header />
            <main>
                {/* <PersonalInfo /> */}
                <Portfolio />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
