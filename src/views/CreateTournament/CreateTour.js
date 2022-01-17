import React from 'react'
import './CreateTour.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormatTour from './FormatTour'
const Createtournament = () => {

    return (
        <>
            <div className='bg-Ct'>
                <div className='text-Ct'>
                    <p>Start</p>
                    <h1>New Tournament</h1>
                </div>
            </div>
            <div className='form-Ct'>
                <div className='slogan'>
                    <h1>Practice winning every day </h1>
                    <i className='fa fa-handshake-o' aria-hidden='true'></i>


                </div>
                <div className='form-input'>
                    <div className='form-title'>
                        <div className='title'><b>Tournament Name</b> <span>*</span> :</div>
                        <TextField
                            sx={{ minWidth: 600, }}
                            helperText=' '
                            color='warning'
                            id='demo-helper-text-aligned-no-helper'
                            label='Tournament Name'
                            className='textField-custom'
                        />
                    </div>
                    <div className='form-title'>
                        <div className='title'><b>Game</b> <span>*</span> :</div>
                        <TextField
                            sx={{ minWidth: 600 }}
                            helperText=' '
                            color='warning'
                            id='demo-helper-text-aligned-no-helper'
                            label='Game'
                        />
                    </div>
                    <div className='form-title'>
                        <div className='title'><b>Format</b> <span>*</span> :</div>
                        <FormatTour />
                    </div>

                    <div className='form-title'>
                        <div className='title'><b>Description</b> :</div>
                        <TextField
                            id='demo-helper-text-aligned-no-helper'
                            color='warning'
                            sx={{ minWidth: 600 }}
                            label='Description'
                            multiline
                            rows={4}

                        />
                    </div>

                    <div className='form-title'>
                        <div className='title'><b>Start-Time</b> <span>*</span> :</div>
                        <TextField

                            sx={{ minWidth: 600 }}
                            id='datetime-local'
                            label='Start-Time'
                            color='warning'
                            type='datetime-local'
                            defaultValue='2019-09-19T19:19'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <Button
                        sx={{ minWidth: 250 }}
                        className='btn-CreatT'
                    >
                        Create Tournament
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Createtournament
