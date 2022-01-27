/* eslint-disable no-unused-vars */
import React, {useContext, useEffect} from 'react'
import './index.css'
import { AppContext } from '../../contexts/globalContext'
import db from '../../configs/firebaseConfig'

const sortByScore = (arrObj) => {
    
}

export default function Bracket({tournamentId, format}) {    
    const {participants, getParticipants} = useContext(AppContext)

    useEffect(() => {
        getParticipants()
    }, [])

    let participantsData = []
    let matches = []

    sortByScore(participantsData)

    Object.keys(participants).map(itemId =>{
        if(participants[itemId].tournamentId == tournamentId){
            participantsData.push(participants[itemId])
        }

    })

    console.log(participantsData)

    if(participantsData.length>32) return(<p className='playerRequiredText'>Tournament currently not support more than 32 participants</p>)

    if(participantsData.length<2) return(<p className='playerRequiredText'>You should have 2 or more participant to view bracket</p>)

    if(format == 'Leaderboard') return(<div>
        <p>This is Leaderboard bracket</p>
    </div>)

    if(format == 'Single Elimination') return(<div>
        <p>This is Single Elimination bracket</p>
    </div>)

    else return(<p>Setting up, please wait or contact the host for more information</p>)

}
