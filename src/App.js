import React from 'react'
import Homepage from './pages/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'
import './assets/styles/app.css'

function App() {
    return (
        <div className='App'>
            <Header/>
            <Homepage/>
            <Footer/>
        </div>
    )
}
export default App
