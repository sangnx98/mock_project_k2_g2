<<<<<<< HEAD
import React, { createContext } from 'react'
import {ref, child, get,} from 'firebase/database'
import db from '../configs/firebaseConfig'




=======
/* eslint-disable react/prop-types */
import React, { createContext } from 'react'

import { ref, child, get } from 'firebase/database'
import db from '../configs/firebaseConfig'

>>>>>>> 6b423db (update branch and Create Edit Tournament with API)
const dbRef = ref(db)

export const AppContext = createContext()

<<<<<<< HEAD
// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
    const [tournaments, setTournaments] = React.useState('')
    const [participants, setParticipants] = React.useState('')

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

    const getParticipants = () => {
        get(child(dbRef, 'participants/')).then((snapshot) => {
            if(snapshot.exists()){
                setParticipants(snapshot.val())
            }else{
                console.log('No data found')
            }
        }).catch(err =>{
            console.error('DB Error: ' + err)
        })
    }

    const onDelete = async (id) => {
        if(window.confirm('Are you sure you want to delete')){
            await  db().ref(`participants/${id}`).remove((err) => {
                if(err) {
                    console.log('DB Error: ' + err)
                } else {
                    console.log('Delete success')
                }
            })
        }
    }

  

    const getSingleTournament =  (tourId) =>{
        return tournaments?.find((item)=>item == tourId)
    }


    


=======
const AppContextProvider = ({ children }) => {
    const [tournaments, setTournaments] = React.useState('')
    const [games, setGames] = React.useState('')

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
    // GAme
    const getGames = () => {
        get(child(dbRef, 'games/')).then((snapshot) => {
            if (snapshot.exists()) {
                setGames(snapshot.val())
            } else {
                console.log('No data found')
            }
        }).catch(err => {
            console.error('DB Error: ' + err)
        })
    }
    const getSingleTournament = (tourId) => {
        return tournaments?.find((item) => item == tourId)
    }

>>>>>>> 6b423db (update branch and Create Edit Tournament with API)
    const AppContextData = {
        getTournaments,
        getSingleTournament,
        tournaments,
<<<<<<< HEAD
        getParticipants, 
        participants,
        onDelete,
     
=======
        games,
        getGames
>>>>>>> 6b423db (update branch and Create Edit Tournament with API)
    }

    return (
        <AppContext.Provider
            value={AppContextData}>{children}
        </AppContext.Provider>
    )
}

export default AppContextProvider