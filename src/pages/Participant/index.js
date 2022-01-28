import React, { useState, useEffect,useRef, useContext} from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import TabsUnstyled from '@mui/base/TabsUnstyled'
import TabsListUnstyled from '@mui/base/TabsListUnstyled'
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled'
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled'
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled'
import {ref, set, push} from 'firebase/database'
import db from '../../configs/firebaseConfig'
import './index.css'
import PlayerList from '../PlayerList'
import RequestQueue from '../RequestQueue'
import { AppContext } from '../../contexts/globalContext'
import { useParams } from 'react-router-dom'



const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75'
}

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 13px 16px;
  margin: 20px 10px 20px 0px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;

  &:hover {
    background-color: #2AB6CF;
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`

const TabsList = styled(TabsListUnstyled)`
  width: 22rem;
  background-color: #21252F;
  border-radius: 5px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`

export default function Participant() {
    const [name, setName] = useState('')
    const {  participants, getParticipants} = useContext(AppContext)
    const errAddPlayer = useRef(null)
    const playerRef = useRef(null)
    const {id } = useParams()
    
    useEffect(() => {
        getParticipants()
    }, [])

    const onInputChange = (e) => {
        setName(e.target.value)
    }

    function handleAddPlayer(e) {
        e.preventDefault()
        const keys = Object.keys(participants)
        let checkNamePlayer, checkNumberPlayer= false
        if(playerRef.current.value === ''){
            errAddPlayer.current.innerText = 'Chưa điền tên người chơi '
            playerRef.current.focus()
            return
        }
        for(let index = 0; index < keys.length; index++ )  {
            const element = participants[keys[index]]
            console.log(participants[keys])
            const elementId = element.tournamentId === id
            const limit  =  elementId === true 
            if(element.name === playerRef.current.value && elementId  ) {
                checkNamePlayer = true
            } if ( limit > 16){
                checkNumberPlayer= true
                break
            }
        }
    
        if(checkNamePlayer) {
            errAddPlayer.current.innerText = 'Người chơi đã tồn tại'
            playerRef.current.focus()
            return
        }
        if(checkNumberPlayer) {
            errAddPlayer.current.innerText = 'Số người chơi không thể vượt quá 32'
            playerRef.current.focus()
            return
        }

        if (window.confirm(`Bạn muốn thêm người chơi ${playerRef.current.value}`)){
            const participantRef = ref(db, 'participants/')
            const addParticipant = push(participantRef)
            const name = playerRef.current.value
            set(addParticipant,  {
                name,
                standingIndex : 0, 
                totalScore: 0   ,
                tournamentId: id,
            }).then(err => {
                console.log(err)
            })
        }

    }

    return (
        <div className='tournament-participant-root'>
            <div className='tournament-participant'>
                <form className='tournament-participant-add-member'>
                    <input className='tournament-participant-text-box' 
                        type='text' 
                        placeholder='Player Name'
                        name='name'
                        value={name}
                        onChange={onInputChange}
                        ref={playerRef}/>
                    <Button
                        className='tournament-participant-button' 
                        color='secondary'
                        onClick={handleAddPlayer}
                    >
                        ADD
                    </Button>
                </form>
                <span ref={errAddPlayer} className='err-'></span>
                <div>
                    <TabsUnstyled defaultValue={0}>
                        <TabsList>
                            <Tab >Player List </Tab>
                            <Tab>Request list</Tab>
                        </TabsList>
                        <TabPanel value={0} ><PlayerList/></TabPanel>
                        <TabPanel value={1}><RequestQueue/></TabPanel>
                    </TabsUnstyled>
                </div>
            </div>
        </div>
    )
}