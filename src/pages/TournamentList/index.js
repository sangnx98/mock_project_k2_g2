/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded'
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded'
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded'
import './index.css'

import {ref, child, get} from 'firebase/database'

import db from '../../configs/firebaseConfig'
const dbRef = ref(db)

const TournamentList = () => {
    const [game, setGame] = React.useState('')
    const [startAt, setStartAt] = React.useState('')
    // eslint-disable-next-line no-unused-vars
    const [tournamentData, getTournamentData] = React.useState('')

    useEffect(() => {
        get(child(dbRef, 'tournaments/')).then((snapshot)=>{
            if(snapshot.exists()){
                getTournamentData(snapshot.val())
            } else{
                console.log('No data found')
            }
        }).catch(err =>{
            console.error('DB Error: ' + err)
        })
    }, [])

    const handleChange = (event) => {
        setGame(event.target.value)
    }
    const handleChangeStarted = (event) => {
        setStartAt(event.target.value)
    }

    return (
        <div className='section-body'>
            <Container maxWidth='xl'>
                <div section className='section-body-title' >
                    <div className='section-title-left'>
                        <h1>Our Games</h1>
                    </div>
                    <div className='section-title-right'>
                        <Box sx={{ minWidth: 120 ,  display: { xs: 'none', md: 'flex' } }} >
                            <FormControl className='form-control' size='small' sx={{ m: 1, minWidth: 120 }} >
                                <InputLabel id='select-label-game'  style={{fontWeight: 600}}  >Filter Game</InputLabel>
                                <Select
                                    labelId='select-label-game'
                                    id='select-label-game'
                                    value={game}
                                    label='Age'
                                    onChange={handleChange}
                                >
                                    <MenuItem value='abc'>CSGO</MenuItem>
                                    <MenuItem value={20}>CSGO1</MenuItem>
                                    <MenuItem value={30}>CSGO2</MenuItem>
                                </Select>
                          
                            </FormControl>
                            <FormControl className='form-control' size='small' sx={{ m: 1, minWidth: 120 }} >
                                <InputLabel id='simple-select-label'  style={{fontWeight: 600}}  >Filter Started</InputLabel>
                                <Select
                                    labelId='simple-select-label'
                                    id='simple-select'
                                    value={startAt}
                                    label='Age'
                                    onChange={handleChangeStarted}
                                >
                                    <MenuItem value='abc'>CSGO</MenuItem>
                                    <MenuItem value={20}>CSGO1</MenuItem>
                                    <MenuItem value={30}>CSGO2</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>    
                <div className='section-featured-content'>
                    <Box sx={{ flexGrow: 1 ,display: { xs: '1', md: 'flex' } }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 6, md: 12 }}>
                            {Object.keys(tournamentData).map(itemId=>{
                                return(                                    
                                    <Grid item xs={1} sm={2} md={3} key={itemId}>
                                        <div className='box-content'>  
                                            <div className = 'box-content-img'>
                                                <Link to={'/tournaments/'+ itemId} ><img src='https://www.mobafire.com/images/champion/skins/landscape/jayce-arcane-762x.jpg'  className='img-content'></img></Link>
                                            </div>
                                            <div className = 'box-content-decs'>
                                                <div>
                                                    <Link to={'/tournaments/'+ itemId} >{tournamentData[itemId].name}</Link>
                                                </div>
                                                <div className = 'desc-content number'>
                                                    <PersonRoundedIcon/>
                                                    <a>{tournamentData[itemId].participantCount} người tham gia</a>
                                                </div>
                                                <div className = 'desc-content formula'>
                                                    <EmojiEventsRoundedIcon/>
                                                    <a>Thể thức: {tournamentData[itemId].format}</a>
                                                </div>
                                                <div className = 'desc-content game'>
                                                    <VideogameAssetRoundedIcon/>
                                                    <a>Game: {tournamentData[itemId].gameId}</a>
                                                </div>
                                                <div className = 'desc-content date'>
                                                    <EventNoteRoundedIcon/>
                                                    <a>Thời gian: {tournamentData[itemId].startAt}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>)
                            })}
                        </Grid>
                    </Box>
                </div>
            </Container>            
        </div>
    )
}

export default TournamentList