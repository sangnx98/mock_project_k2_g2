/* eslint-disable no-unused-vars */
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AppContextProvider from './contexts/globalContext'
import Header from './components/Header'
import Footer from './components/Footer'
import TournamentList from './pages/TournamentList'
import TournamentPage from './pages/TournamentPage'
import Landingpage from './pages/Landingpage'
import UserRegister from './pages/UserRegister'
import UserLogin from './pages/UserLogin'
import TournamentCreate from './pages/TournamentCreate'

function App() {
    return (
        <div className='App'>
            <AppContextProvider>
                <Header/>
                <Routes>
                    <Route exact path='/' element={<Landingpage/>}/>
                    <Route path='/user/register' element={<UserRegister/>}/>
                    <Route path='/user/login' element={<UserLogin/>}/>
                    <Route path='/tournaments' element={<TournamentList/>}/>
                    <Route path={'/tournaments/:id'} element={<TournamentPage/>}/>
                    <Route path='/tournaments/create' element={<TournamentCreate/>}/>
                </Routes>
                <Footer/>
            </AppContextProvider>
        </div>
    )
}
export default App
