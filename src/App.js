import React from 'react'
import './App.css'
import NavigationBar from './components/navigationBar/navigationBar'
import FooterInner from './components/footer/footerInner'
import Home from './views/homepage/home'





function App() {
    return (
        <div className='App'>
            <NavigationBar/>
            <Home/>
            <FooterInner/>
        </div>
    )
}



export default App
