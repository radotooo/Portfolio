import React from 'react'
import Header from './Header'
import NavMenu from './HeaderNavMenu'

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <NavMenu />
            </main>
            <footer></footer>
        </div>
    )
}
