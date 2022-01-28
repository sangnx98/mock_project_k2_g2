import React, { createContext } from 'react'

import {ref, child, get, set} from 'firebase/database'
import db from '../configs/firebaseConfig'

const dbRef = ref(db)

export const AppContext = createContext()

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
    const [tournaments, setTournaments] = React.useState('')
    const [matches, setMatches] = React.useState('')
    const [participants, setParticipants] = React.useState('')
    const [ idParticipants, setIdParticipants] = React.useState('')
    const [games, setGames] = React.useState('')
    // const navigate = useNavigate()
    const [users, setUser] = React.useState('')
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

    const getGames = () =>{
        get(child(dbRef, 'games/')).then((snapshot)=>{
            if(snapshot.exists()){
                setGames(snapshot.val())
            } else{
                console.log('No data found')
            }
        }).catch(err =>{
            console.error('DB Error: ' + err)
        })
    }

    const getMatches = () =>{
        get(child(dbRef, 'matches/')).then((snapshot)=>{
            if(snapshot.exists()){
                setMatches(snapshot.val())
            } else{
                console.log('No data found')
            }
        }).catch(err =>{
            console.error('DB Error: ' + err)
        })
    }



    const getParticipants = () => {
        get(child(dbRef, 'participants/')).then((snapshot) => {
            if (snapshot.exists()) {
                setParticipants(snapshot.val())
            } else {
                console.log('No data found')
            }
        }).catch(err => {
            console.error('DB Error: ' + err)
        })
    }
    
    const getIdParticipants = () => {
        get(child(dbRef, 'participants')).then((snapshot) => {
            snapshot.forEach((participant) => {
                setIdParticipants(participant.key)
            })
        }).catch(err => {
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
        getUser,
        getUserLogged,
        getParticipants, 
        getGames,
        getMatches,
        writeDataTable,
        users,
        userLogged,
        tournaments,
        games,
        participants,
        matches,     
        getIdParticipants,
        idParticipants
    }

    return (
        <AppContext.Provider
            value={AppContextData}>{children}
        </AppContext.Provider>
    )
}

export default AppContextProvider