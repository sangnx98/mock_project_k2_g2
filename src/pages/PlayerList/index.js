import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/globalContext'
import './index.css'


export default function PlayerList() {
    const { participants, getParticipants, onDelete } = useContext(AppContext)

    useEffect(() => {
        getParticipants()
    })

    const onSubmit = (participantID) => {
        onDelete(participantID)
    }

    return (
        <>
            {Object.keys(participants).map(participantID => {
                return (
                    <React.Fragment key={participantID}>
                        <div className='tournament-participant-list'>
                            <div className='tournament-participant-list-item'>
                                <p>{participants[participantID].name}</p>
                                <div className='list-item-button'>
                                    <button className='list-item-button-common'>Edit</button>
                                    <button className='list-item-button-common'
                                        onClick={() => onSubmit(participantID)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}

        </>
    )

}
