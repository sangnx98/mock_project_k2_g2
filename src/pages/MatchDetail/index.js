import React from 'react'
import './index.css'
// Dialog MUI
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'

// img file MUI 
import IconButton from '@mui/material/IconButton'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import { styled } from '@mui/material/styles'


export default function index() {
    // img file 
    const Input = styled('input')({
        display: 'none',
    })
    // dialog report
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    const handleSubitReport = () => {
        setOpen(false)
        alert('Report successfully')
    }
    // dialog setting 
    const [openSetting, setOpenSetting] = React.useState(false)

    const handleClickOpenSetting = () => {
        setOpenSetting(true)
    }

    const handleCloseSetting = () => {
        setOpenSetting(false)
    }
    const handleSubitSetting = () => {
        setOpenSetting(false)
        alert('Setting successfully')
    }

    return (
        <div className = 'form-matchdetail'>

            <div className='bannerMatch'>
                <div className='name-page'>
                </div>
                <div className='bannerMatch-child1'>
                    <div className='infoTeam'>
                        <div className='logo-team'>
                            <img src='https://upload.wikimedia.org/wikipedia/vi/thumb/b/b1/GAMesportslogo.png/220px-GAMesportslogo.png' />
                            <h2 className='nameTeam'>GAM ESPORT</h2>
                        </div>
                    </div>
                    <div className='matchOver'>
                        <h1 className='gameWin'>2</h1>
                    </div>
                    {/* Dialog */}
                    <div className='btn-dialog'>
                        <Button variant='outlined'>
                            REMAKE
                        </Button>

                    </div>
                </div>

                <div className='bannerMatch-child2'>
                    <div className='infoTeam'>
                        <span className='gameTime'>23:45</span>
                        <p className='text-TournamentName'>League of Legends World Championship</p>
                        <p className='date-takesPlace'>dd/mm/yyyy</p>
                    </div>
                    <div className='matchOver'>
                        <h1 className='gameWin'>Match Over</h1>
                    </div>
                    {/* Dialog */}
                    <div className='btn-dialog'>
                        <Button variant='outlined' onClick={handleClickOpen}>
                            Report Score
                        </Button>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>YOU WANT REPORT SCORE?</DialogTitle>
                            <hr/>
                            <DialogContent>
                                <table className='tb-report-score'>
                                    <thead>
                                        <tr className='line1'>
                                            <th> Participant </th>
                                            <th>Score</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td className='name participant_name'>
                                                <div className='user-details -padbot'>
                                                    <span className='name'>GAM ESPORT </span>
                                                </div>
                                            </td>
                                            <td>
                                                <TextField
                                                    id='outlined-basic'
                                                    label='Score'
                                                    variant='outlined'
                                                    autoFocus
                                                    color='warning'
                                                />
                                            </td>
                                        </tr>
                                        <tr className='line2'>
                                            <td className='name participant_name'>
                                                <div className='user-details -padbot'>
                                                    <span className='name'> DAMWON KIA </span>
                                                </div>
                                            </td>
                                            <td>
                                                <TextField
                                                    id='outlined-basic'
                                                    label='Score'
                                                    variant='outlined'
                                                    color='warning'
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} variant='outlined' className='btn-handle'>Cancel</Button>
                                <Button onClick={handleSubitReport} variant='outlined' className='btn-handle'>Sumbit Scores</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    <div />
                </div>

                <div className='bannerMatch-child3'>
                    <div className='infoTeam'>
                        <div className='logo-team'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/4/4b/DWG_KIA_logo.png' />
                            <h2 className='nameTeam'>DAMWON KIA</h2>
                        </div>
                    </div>
                    <div className='matchOver'>
                        <h1 className='gameWin'>3</h1>
                    </div>

                    {/* Dialog */}
                    <div className='btn-dialog'>
                        <Button variant='outlined' onClick={handleClickOpenSetting}>
                            SETTING
                        </Button>
                        <Dialog
                            open={openSetting}
                            onClose={handleCloseSetting}
                            aria-labelledby='alert-dialog-title'
                            aria-describedby='alert-dialog-description'
                        >
                            <DialogTitle id='alert-dialog-title'>
                                SETTINGS BASIC INFO
                            </DialogTitle>
                            <hr/>
                            <DialogContent>
                                <p><b>Image URL :</b></p>
                                <label htmlFor='icon-button-file'>
                                    <Input accept='image/*' id='icon-button-file' type='file' />
                                    <IconButton color='warning' aria-label='upload picture' component='span'>
                                        <PhotoCamera />
                                    </IconButton>
                                </label>
                                <p><b>Description :</b></p>
                                <TextField
                                    id='demo-helper-text-aligned-no-helper'
                                    color='warning'
                                    sx={{ minWidth: 400 }}
                                    label='Description'
                                    multiline
                                    rows={4}

                                />

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseSetting} variant='outlined' className='btn-handle'>Cancel</Button>
                                <Button onClick={handleSubitSetting} variant='outlined' autoFocus className='btn-handle'>
                                    Save Changes
                                </Button>
                            </DialogActions>
                        </Dialog>

                    </div>

                </div>
            </div>

            <div className='description-match'>
                <h1>Description</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque purus sit amet metus rhoncus, dictum pellentesque lectus semper. Suspendisse efficitur laoreet nibh, vitae tincidunt justo sodales at. Morbi lacinia arcu nec augue varius, eu congue justo ultricies. Aenean convallis sagittis magna quis volutpat. Integer vel ullamcorper dui, sit amet elementum tellus. Aenean finibus purus eget ipsum ornare lacinia. Aliquam vitae leo non ligula egestas auctor. Proin pulvinar turpis quis consequat varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce aliquam eros id dolor gravida suscipit.</p>
            </div>

        </div>
    )
}
