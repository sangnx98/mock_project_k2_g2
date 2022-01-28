/* eslint-disable no-unused-vars */
import React, { createContext } from 'react'
import { ref, child, get, } from 'firebase/database'
import db from '../configs/firebaseConfig'
import { set } from 'date-fns'




const dbRef = ref(db)

export const AppContext = createContext()

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
<<<<<<< HEAD
    const [tournaments, setTournaments] = React.useState('')
    const [matches, setMatches] = React.useState('')
    const [participants, setParticipants] = React.useState('')
    const [games, setGames] = React.useState('')
    // const navigate = useNavigate()
    const [users, setUser] = React.useState('')
<<<<<<< HEAD
    const [userLogged, setUserLogged] = React.useState('null')
=======
=======
>>>>>>> 4a3c3c7 (CRUD Playerlist)
    const [tournaments, setTournaments] = React.useState('')
    const [participants, setParticipants] = React.useState('')
    const [ idParticipants, setIdParticipants] = React.useState('')
>>>>>>> bff5dfc (fix conflict rebase)

    const [games, setGames] = React.useState('')
    const [users, setUsers] = React.useState('')
    const getTournaments = () => {
        get(child(dbRef, 'tournaments/')).then((snapshot) => {
            if (snapshot.exists()) {
                setTournaments(snapshot.val())
            } else {
                console.log('No data found')
            }
        }).catch(err => {
            console.error('DB Error: ' + err)
        })
    }

<<<<<<< HEAD
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



=======
>>>>>>> 4a3c3c7 (CRUD Playerlist)
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
    const getGames = () => {
        get(child(dbRef, 'games')).then((snapshot) => {
            if (snapshot.exists()) {
                setGames(snapshot.val())
            } else {
                console.log('No data found')
            }
        }).catch(err => {
            console.error('DB Error: ' + err)
        })
    }

    const onDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete')) {
            await db().ref(`participants/${id}`).remove((err) => {
                if (err) {
                    console.log('DB Error: ' + err)
                } else {
                    console.log('Delete success')
                }
            })
        }
    }
    
    const getUsers = () => {
        get(child(dbRef, 'users/')).then((snapshot) => {
            if (snapshot.exists()) {
                setUsers(snapshot.val())
                console.log('users', snapshot.val())
            } else {
                console.log('No data available')
            }
        }).catch((error) => {
            console.error(error)
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
    



    const getSingleTournament = (tourId) => {
        return tournaments?.find((item) => item == tourId)
    }




    const AppContextData = {
        getTournaments,
        getSingleTournament,
<<<<<<< HEAD
        getUser,
        getUserLogged,
        getParticipants, 
=======
        tournaments,
        getParticipants,
        participants,
        onDelete,
>>>>>>> bff5dfc (fix conflict rebase)
        getGames,
        getMatches,
        writeDataTable,
        onDeleteParticipant,
        users,
        userLogged,
        tournaments,
        games,
<<<<<<< HEAD
        participants,
<<<<<<< HEAD
        matches,     
=======
        matches,
        onDeleteParticipant,
     
=======
        getUsers ,
        users,
        getIdParticipants,
        idParticipants,

>>>>>>> 4a3c3c7 (CRUD Playerlist)
>>>>>>> bff5dfc (fix conflict rebase)
    }

    return (
        <AppContext.Provider
            value={AppContextData}>{children}
        </AppContext.Provider>
    )
}

export default AppContextProvider