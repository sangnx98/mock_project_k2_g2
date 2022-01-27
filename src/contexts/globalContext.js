import React, { createContext } from 'react'
import {ref, child, get,} from 'firebase/database'
import db from '../configs/firebaseConfig'




const dbRef = ref(db)

export const AppContext = createContext()

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
    const [tournaments, setTournaments] = React.useState('')
    const [participants, setParticipants] = React.useState('')
    const [games, setGames] = React.useState('')

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

    const onDeleteParticipant = async (id) => {
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

    const AppContextData = {
        getTournaments,
        getSingleTournament,
        getParticipants, 
        getGames,
        tournaments,
        games,
        participants,
        onDeleteParticipant,
     
    }

    return (
        <AppContext.Provider
            value={AppContextData}>{children}
        </AppContext.Provider>
    )
}

export default AppContextProvider