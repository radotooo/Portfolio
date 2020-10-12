import React from 'react'
import Footer from './Footer'
import Header from './Header'
import PersonalInfo from './HomePersonalInfo'
import Portfolio from './Portfolio'
import './styles/home.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";


export default function Home() {
    return (
        <BrowserRouter>
            <div className="home">
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/"  >
                            <PersonalInfo />
                        </Route>
                        <Route path="/portfolio"  >
                            <Portfolio />
                        </Route>
                    </Switch>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </BrowserRouter>
    )
}
