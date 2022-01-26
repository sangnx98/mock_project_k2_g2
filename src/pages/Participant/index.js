<<<<<<< HEAD
import React, { useState, useEffect} from 'react'
=======
import React from 'react'
>>>>>>> 6b423db (update branch and Create Edit Tournament with API)
import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import TabsUnstyled from '@mui/base/TabsUnstyled'
import TabsListUnstyled from '@mui/base/TabsListUnstyled'
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled'
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled'
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled'
<<<<<<< HEAD
import {ref, set, push} from 'firebase/database'
import db from '../../configs/firebaseConfig'
import './index.css'
=======

import './index.css'

>>>>>>> 6b423db (update branch and Create Edit Tournament with API)
import PlayerList from '../PlayerList'
import RequestQueue from '../RequestQueue'

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
<<<<<<< HEAD
    const [name, setName] = useState('')
    
    
    useEffect(() => {
    },)

    const onInputChange = (e) => {
        setName(e.target.value)
    }

 

    const handleAdd = (e) => {
     
        e.preventDefault()
        const participantRef = ref(db, 'participants/',)
        const addParticipant = push(participantRef)
        set(addParticipant,  {
            name,
            standingIndex : 0,
            totalScore: 0   ,
            tournamentId: 2374859,
        }).then(err => {
            console.log(err)
        })
    }
    
=======
>>>>>>> 6b423db (update branch and Create Edit Tournament with API)

    return (
        <div className='tournament-participant-root'>
            <div className='tournament-participant'>
<<<<<<< HEAD
                <form onSubmit={handleAdd} className='tournament-participant-add-member'>
                    <input className='tournament-participant-text-box' 
                        type='text' 
                        placeholder='Player Name'
                        name='name'
                        value={name}
                        onChange={onInputChange}/>
                      
                    <Button
                        className='tournament-participant-button' 
                        color='secondary'
                        onClick={handleAdd}
                    >
                        ADD
                    </Button>
                </form>
=======
                <div className='tournament-participant-add-member'>
                    <input className='tournament-participant-text-box' placeholder='Player Name'/>
                    <Button
                        className='tournament-participant-button' 
                        color='secondary'
                    >
                        ADD
                    </Button>
                </div>
>>>>>>> 6b423db (update branch and Create Edit Tournament with API)
                <div>
                    <TabsUnstyled defaultValue={0}>
                        <TabsList>
                            <Tab>Player List</Tab>
                            <Tab>Request list</Tab>
                        </TabsList>
                        <TabPanel value={0}><PlayerList/></TabPanel>
                        <TabPanel value={1}><RequestQueue/></TabPanel>
                    </TabsUnstyled>
                </div>
            </div>
        </div>
    )
}
