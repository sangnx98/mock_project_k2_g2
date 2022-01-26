import React, { createContext } from 'react'
// import { useNavigate } from 'react-router-dom'

import {ref, child, get, set} from 'firebase/database'
import db from '../configs/firebaseConfig'

const dbRef = ref(db)

export const AppContext = createContext()

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
    // const navigate = useNavigate()
    const [users, setUser] = React.useState('')
    const [tournaments, setTournaments] = React.useState('')
    const [userLogged, setUserLogged] = React.useState('null')

    const getTournaments = () =>{
        get(child(dbRef, 'tournaments/')).then((snapshot)=>{
            if(snapshot.exists()){
                setTournaments(snapshot.val())
            } else{
                console.log('No data found')
            }
        }).catch(err =>{
            console.error('DB Error: ' + err)
        })
    }

    const getSingleTournament = (tourId) =>{
        return tournaments?.find((item)=>item == tourId)
    }

    const getUser = () => {
        get(child(dbRef, 'users/')).then((snapshot) => {
            if (snapshot.exists()) {
                setUser(snapshot.val())
                console.log('users', snapshot.val())
            } else {
                console.log('No data available')
            }
        }).catch((error) => {
            console.error(error)
        })
    }

    const getUserLogged = () => {
        get(child(dbRef, 'userLogged/')).then((snapshot) => {
            if (snapshot.exists()) {
                setUserLogged(snapshot.val())
                console.log('user logged', snapshot.val())
            } else {
                console.log('No one loggin')
            }
        }).catch((error) => {
            console.error(error)
        })
    }

    const writeDataTable = (data, table_name) => {
        set(ref(db, table_name),data)
    }

    const AppContextData = {
        getTournaments,
        getSingleTournament,
        writeDataTable,
        getUser,
        getUserLogged,
        users,
        userLogged,
        tournaments
    }

    return (
        <AppContext.Provider
            value={AppContextData}>{children}
        </AppContext.Provider>
    )
}

export default AppContextProvider