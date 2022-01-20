import React from 'react'
import './index.css'
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

const Home = () => {
    const [game, setGame] = React.useState('')
    const [startAt, setStartAt] = React.useState('')


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
                        <h1>Our Game</h1>
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
                                    <MenuItem value='abc'>CSGOCSGOCSGOCSGOCSGOCSGOCSGOCSGOCSGOCSGO</MenuItem>
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
                                    <MenuItem value='abc'>CSGOCSGOCSGOCSGOCSGOCSGOCSGOCSGOCSGOCSGO</MenuItem>
                                    <MenuItem value={20}>CSGO1</MenuItem>
                                    <MenuItem value={30}>CSGO2</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>    
                <div className='section-featured-content'>
                    <Box sx={{ flexGrow: 1 ,display: { xs: '1', md: 'flex' } }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                            {Array.from(Array(6)).map((_, index) => (
                                <Grid item xs={1} sm={3} md={4} key={index}>
                                    <div className='box-content' >
                                        <div className = 'box-content-img'>
                                            <img src='https://www.mobafire.com/images/champion/skins/landscape/jayce-arcane-762x.jpg'  className='img-content'></img>
                                        </div>
                                        <div className = 'box-content-decs'>
                                            <div>
                                                <a href='#' >League of Kid Academy</a>
                                            </div>
                                            <div className = 'desc-content number'>
                                                <PersonRoundedIcon/>
                                                <a >2 người</a>
                                            </div>
                                            <div className = 'desc-content formula'>
                                                <EmojiEventsRoundedIcon/>
                                                <a href='#'>Single Elimination</a>
                                            </div>
                                            <div className = 'desc-content game'>
                                                <VideogameAssetRoundedIcon/>
                                                <a href='#'  className = 'desc-content game' >League of Legends</a>
                                            </div>
                                            <div className = 'desc-content date'>
                                                <EventNoteRoundedIcon/>
                                                <a href='#'>January 22, 2022, 4:09 PM </a>
                                            </div>

                                        </div>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </Container>  
        </div>
    )
}
export default Home