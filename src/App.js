/* eslint-disable no-unused-vars */
import React from 'react'
<<<<<<< HEAD
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
=======
import MatchDetail from './pages/MatchDetail'
import Footer from './components/Footer'
// import Header from './components/Header'

>>>>>>> 9df4795 (display static match detail)

function App() {
    const [isLoggedIn] = React.useState(false)

    return (
        <div className='App'>
<<<<<<< HEAD
            <AppContextProvider>
                <Header loginState={isLoggedIn}/>

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
            
=======
            <MatchDetail/>
            <Footer/>
            {/* <Header/> */}
>>>>>>> 9df4795 (display static match detail)
        </div>
    )
}
export default App
