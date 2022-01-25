/* eslint-disable no-unused-vars */
import React from 'react'
import {useSelector} from 'react-redux'
import {Routes,Route,Link} from 'react-router-dom'
import TournamentList from './pages/TournamentList'
import Landingpage from './pages/Landingpage'
import UserRegister from './pages/UserRegister'
import UserLogin from './pages/UserLogin'
import TournamentCreate from './pages/TournamentCreate'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useDispatch} from 'react-redux'
import TournamentPage from './pages/TournamentPage'


function App() {
    const dispatch = useDispatch()
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const user = useSelector(state => state.auth.user)
    const getLocalStorageData = () =>{
        const userData = localStorage.getItem('user')
        const format = JSON.parse(userData)
        if(userData){
            dispatch({type: 'SAVE_USER', payload: format})
        }
    }
    React.useEffect(()=>{
        getLocalStorageData()
    },[])

    React.useEffect(() => {
        if (user == '') {
            setIsLoggedIn(false)
        }else{
            setIsLoggedIn(true)
        }
    }, [user])
    return (
        <div className='App'>
            <Header loginState={isLoggedIn}/>
            <Routes>
                <Route exact path='/' element={<Landingpage/>}/>
                <Route path='/tournaments' element={<TournamentList/>}/>
                <Route path='/tournaments/create' element={<TournamentCreate/>}/>
                <Route path='/tournaments/detail' element={<TournamentPage/>}/>
                <Route path='/user/register' element={<UserRegister/>}/>
                <Route path='/user/login' element={<UserLogin/>}/>
            </Routes>
            <Footer/>
            <ToastContainer/>
        </div>
    )
}
export default App
