/* eslint-disable no-unused-vars */
import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import TournamentList from './pages/TournamentList'
import Landingpage from './pages/Landingpage'
import UserRegister from './pages/UserRegister'
import UserLogin from './pages/UserLogin'
import TournamentCreate from './pages/TournamentCreate'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    const [isLoggedIn] = React.useState(false)

    return (
        <div className='App'>
            <Header loginState={isLoggedIn}/>
            <Routes>
                <Route exact path='/' element={<Landingpage/>}/>
                <Route path='/tournaments' element={<TournamentList/>}/>
                <Route path='/tournaments/create' element={<TournamentCreate/>}/>
                <Route path='/user/register' element={<UserRegister/>}/>
                <Route path='/user/login' element={<UserLogin/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}
export default App
