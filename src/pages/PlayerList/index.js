import React, {useContext, useEffect,} from 'react'
import { AppContext } from '../../contexts/globalContext'
import './index.css'
import { useParams } from 'react-router-dom'
import {ref, remove, update  } from 'firebase/database'
import db from '../../configs/firebaseConfig'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
export default function PlayerList() {    

    const {  participants, getParticipants , getIdParticipants } = useContext(AppContext)
    const [name, setName] = React.useState('')
    const [idParticipant, setIdParticipant] = React.useState(undefined)
    const [open, setOpen] = React.useState(false)
    const { id } = useParams()

    useEffect(() => {
        getIdParticipants()
        getParticipants()
    }, [])

   
  
    const handleClose = () => {
        setName('')
        setOpen(false)
    }
    const handleOnChangeName = (e) => {
        setName(e.target.value)
    }


    const onSubmit =(participantID) => {
        if( window.confirm('Bạn muốn xóa người chơi này? ')){
            remove(ref(db, `participants/${participantID}`))
            getParticipants()
        }  
    } 

    const handleUpdate = (participant, participantID) => {
        console.log(participant, participantID)
        setOpen(true)
        setIdParticipant(participantID)
        setName(participant.name)
    }
        


    const handleSubmitChange = (e) => {
        e.preventDefault()
        if(!name){
            alert('không được để trống')
            return
        }
        const keys = Object.keys(participants)
        for (let index = 0; index < keys.length; index++ )  {
            const element = participants[keys[index]]
            // setName(element.name)
            // const elementId = 
            if(element.name === name && element.tournamentId === id && keys[index] !== idParticipant) {
                alert('Tên người chơi đã tồn tại')
                return
            }
        }

        if(window.confirm(`Bạn muốn sửa tên người chơi thành ${name}`)){
            update(ref(db, `participants/${idParticipant}`), {
                name
            })}
        setOpen(false)
        getParticipants()
    }


    const renderData = () => {
        const rows = []
        const keys = Object.keys(participants)

        keys.forEach(participantID => {

            if(id !== participants[participantID].tournamentId) return
            
            const row = <React.Fragment key={participantID}>
                <div className='tournament-participant-list'>
                    <div className='tournament-participant-list-item'>
                        <span style={{margin: '14px' }}>{participants[participantID].name}</span>
                        <div className='list-item-button'>
                            <Button variant='contained'  className='list-item-button-common'  onClick={() =>handleUpdate(participants[participantID], participantID)}>
                                Edit
                            </Button>
                            <Button 
                                variant='contained'
                                className='list-item-button-common'  
                                onClick={()=>onSubmit(participantID)}>
                                Delete 
                            </Button>
                        </div>
                    </div>
                </div>
            </React.Fragment>

            rows.push(row)
            
        })

        return rows
    }


    return (
        <>
            {renderData()}   
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Bạn có chắc muốn thay đổi tên người chơi sẽ được thay đổi khi bạn bấm Submit 
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin='dense'
                        id='name'
                        label='Cập nhật tên người chơi'
                        type='text'
                        fullWidth
                        variant='standard'
                        value={name}
                        onChange={handleOnChangeName}
                    /> 
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmitChange}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )

}