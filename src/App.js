import React from 'react'
import Homepage from './pages/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landingpage'

function App() {
    return (
        <div className='App'>
            <Landing />
            <Header/>
            <Homepage/>
            <Footer/>
        </div>
    )
}
export default App
