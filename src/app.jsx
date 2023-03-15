import { useState } from 'react'
import Navbar from "./Navbar"
import Main from "./MainContent"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}
