import React, { createContext } from 'react'

import {ref, child, get} from 'firebase/database'
import db from '../configs/firebaseConfig'

const dbRef = ref(db)

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [tournaments, setTournaments] = React.useState('')

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

    const AppContextData = {
        getTournaments,
        getSingleTournament,
        tournaments
    }

    return (
        <AppContext.Provider
            value={AppContextData}>{children}
        </AppContext.Provider>
    )
}

export default AppContextProvider