import React from 'react'
import Homepage from './pages/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'
import Matchgroup from './components/Matchgroup'

function App() {
    return (
        <div className='App'>
            <Matchgroup />
            <Header/>
            <Homepage/>
            <Footer/>
        </div>
    )
}

export default App
