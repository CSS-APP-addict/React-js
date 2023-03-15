import { useState } from 'react'
import Navbar from "./Navbar"
import Main from "./MainContent"
import Footer from "./Footer"
import './style.css'

export default function App_me() {
    return (
        <div className="container">
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}
