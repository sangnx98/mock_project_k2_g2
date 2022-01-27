import React, {useContext, useEffect} from 'react'
import { AppContext } from '../../contexts/globalContext'
import './index.css'
import { useParams } from 'react-router-dom'
import {ref, remove,} from 'firebase/database'
import db from '../../configs/firebaseConfig'

export default function PlayerList() {    
    const {  participants, getParticipants} = useContext(AppContext)
    const { id } = useParams()
    useEffect(() => {
        getParticipants()
    })

    const onSubmit =(participantID) => {
        if( window.confirm('Bạn muốn xóa người chơi này? ')){
            remove(ref(db, `participants/${participantID}`))      
        }  
    }

    return (
        <>
            {Object.keys(participants).map(participantID => {
                if(id == participants[participantID].tournamentId){
                    return(
                        <React.Fragment key={participantID}>
                            <div className='tournament-participant-list'>
                                <div className='tournament-participant-list-item'>
                                    <p>{participants[participantID].name}</p>
                                    <div className='list-item-button'>
                                        <button className='list-item-button-common'>Edit</button>
                                        <button className='list-item-button-common'
                                            onClick={()=>onSubmit(participantID)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }
            })}
                
        </>
    )

}
