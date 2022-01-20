import './index.css'
import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Banner from '../../components/Banner/index'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'


export default function ColumnsGrid() {
    return (
        <>
            <div className='banner'>
                <Banner style={{position: 'relative'}} />
                <div className='banner-title'>
                    <div className='title'>
                        <h1>Simplify Tournament Management</h1>
                        <h3>Join the millions who trust Challonge to manage their tournaments.<br /> More than 28,575,585 brackets created around the world.</h3>
                    </div>
                    <Stack spacing={2} direction='row'>                   
                        <Button variant='contained'>Create Tournamets Now</Button>
                    </Stack>
                </div>
            </div>
            <div className='boxcontainer'>
                <Container maxWidth='xl'>
                    <div className='wrapper'>
                        <div className='Our-game-title'>
                            <h1>Our Games</h1>
                        </div>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2} columns={16}>
                                <div className='box-container-image'>
                                    <Grid item xs={8}>
                                        <div className='container-image'>
                                            <img className='container-boximage' src='https://www.riotgames.com/darkroom/350/a28dfa2308a772466c7d2018a87ac000:0e9fb5e8f3944bcd4375d6960d21962e/lol-logotype.png' />
                                            <img className='box-image' src='https://www.riotgames.com/darkroom/900/eea552a09c8074c6041b970449f529a6:f1fd53b7aa174e23cb2724b891aeb0bc/lol-card-bg-1800.jpg' />
                                        </div>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <div className='container-image'  >
                                            <img className='container-boximage-title' src='https://www.riotgames.com/darkroom/350/fc4d867e755e5215833d94e88068b0ab:ead77c56e200894c762889c3cd81a2e1/valorant-logotype.png' />
                                            <img className='box-image titletwo'  src='https://www.riotgames.com/darkroom/900/b242d13997145a7a5fb1b063ae14e428:070f7ba509ac0a718321d2f2c7dfc8e6/val-neon-card-bg-1800.jpg'  style={{ marginLeft: '17px' }}/>
                                        </div>
                                    </Grid>
                                </div>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className='grid-list-image'>
                                    {Array.from(Array(6)).map((_, index) => (
                                        <Grid item xs={2} sm={4} md={4} key={index}>
                                            <div className='container-listimage'>
                                                <img className='box-listimage-title' src='https://www.riotgames.com/darkroom/350/2877a75d4539547a238b481e200edd9f:b10a003b28b89d37cc0e446bab19f206/tft-logotype-2021.png' />
                                                <img className='box-listimage' src='https://www.riotgames.com/darkroom/900/d066e7a6446f7f6d512df07e788fbc35:ef7cf9d03d8ab4f103f41188d2c31c0f/tft-card-bg-1800.jpg' style={{ marginLeft: '8px' }} />
                                            </div>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </Container>
            </div>
        </>
    )
}
