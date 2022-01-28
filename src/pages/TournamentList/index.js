/* eslint-disable no-unused-vars */
import React, {useContext, useEffect} from 'react'
import { AppContext } from '../../contexts/globalContext'
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded'
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded'
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded'
import './index.css'
import {ref, child, get} from 'firebase/database'

const TournamentList = () => {
    const { games, getGames } = useContext(AppContext)
    const { tournaments, getTournaments, getUserLogged } = useContext(AppContext)
    const [game, setGame] = React.useState('')
    const [startAt, setStartAt] = React.useState('')

    useEffect(() => {
        getGames()
        getTournaments(),
        getUserLogged()
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
                    <Link to='/tournaments/create'><Button  sx={{ minWidth: 250 }}
                        className='btn-create-tou'
                        type='submit'>
                        Create Tournaments Now
                    </Button></Link>
                    
                    <Box sx={{ flexGrow: 1 ,display: { xs: '1', md: 'flex' } }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 6, md: 12 }}>
                            {Object.keys(tournaments).map(itemId=>{
                                return(                                    
                                    <Grid item xs={1} sm={2} md={3} key={itemId}>
                                        <div className='box-content'>  
                                            <div className = 'box-content-img'>
                                                <Link to={'/tournaments/'+ itemId} ><img src='https://www.mobafire.com/images/champion/skins/landscape/jayce-arcane-762x.jpg'  className='img-content'></img></Link>
                                            </div>
                                            <div className = 'box-content-decs'>
                                                <div>
                                                    <Link to={'/tournaments/'+ itemId} >{(tournaments[itemId].name)? tournaments[itemId].name: 'Untitiled Tournament'}</Link>
                                                </div>
                                                <div className = 'desc-content number'>
                                                    <PersonRoundedIcon/>
                                                    <a>{(tournaments[itemId].participantCount)? tournaments[itemId].participantCount: '0'} người tham gia</a>
                                                </div>
                                                <div className = 'desc-content formula'>
                                                    <EmojiEventsRoundedIcon/>
                                                    <a>Thể thức: {(tournaments[itemId].format)? tournaments[itemId].format: 'Unspecified'}</a>
                                                </div>
                                                <div className = 'desc-content game'>
                                                    <VideogameAssetRoundedIcon/>
                                                    <a>Game: {(games[tournaments[itemId].gameId])? games[tournaments[itemId].gameId]: 'Unspecified'}</a>
                                                </div>
                                                <div className = 'desc-content date'>
                                                    <EventNoteRoundedIcon/>
                                                    <a>Thời gian: {(tournaments[itemId].startAt)? tournaments[itemId].startAt: 'Unspecified'}</a>
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