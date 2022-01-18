/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'
import './CreateTour.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormatTour from './FormatTour'
import StartTime from './StartTime'
import { useForm } from 'react-hook-form'
// import MaxPartic from './MaxPartic'
const Createtournament = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)
    return (
        <>
            <div className='bg-Ct'>
                <div className='text-Ct'>
                    <p>Start</p>
                    <h1>New Tournament</h1>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-Ct'>
                    <div className='slogan'>
                        {/* <h1>Practice winning every day </h1>
                    <i className='fa fa-handshake-o' aria-hidden='true'></i> */}
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
                                {...register('nameTour', { required: true, minLength: 3, maxLength: 32 })}
                            />

                            {errors?.nameTour?.type === 'required' && <small>Tournament Name is required !</small>}
                            {errors?.nameTour?.type === 'minLength' && (
                                <small>Minimum length of 3 characters !</small>
                            )}
                            {errors?.nameTour?.type === 'maxLength' && (
                                <small>Maximum length 32 characters !</small>
                            )}

                        </div>
                        <div className='form-title'>
                            <div className='title'><b>Game</b> <span>*</span> :</div>
                            <TextField
                                sx={{ minWidth: 600 }}
                                helperText=' '
                                color='warning'
                                id='demo-helper-text-aligned-no-helper'
                                label='Game'
                                {...register('Game', { required: true })}
                            />
                            {errors?.Game?.type === 'required' && <small>Game is required !</small>}
                        </div>

                        <div className='form-title'>
                            <div className='title'><b>Format</b> <span>*</span> :</div>
                            <FormatTour {...register('item', { required: true })}/>
                            {errors?.item?.select === 'None' && <small>Format is required !</small>}

                        </div>

                        <div className='form-title'>
                            <div className='title'><b>Description</b> :</div>
                            <TextField
                                id='demo-helper-text-aligned-no-helper'
                                color='warning'
                                sx={{ minWidth: 600 }}
                                label='Description'
                                multiline
                                {...register('Description', { minLength: 0, maxLength: 256 })}
                                rows={4}

                            />
                            {errors?.nameTour?.type === 'maxLength' && (
                                <small>Maximum length 256 characters !</small>
                            )}
                        </div>

                        <div className='form-title'>
                            <div className='title'><b>Start-Time</b> <span>*</span> :</div>
                            {/* <TextField

                            sx={{ minWidth: 600 }}
                            id='datetime-local'
                            label='Start-Time'
                            color='warning'
                            type='datetime-local'
                            defaultValue='2019-09-19T19:19'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        /> */}
                            <StartTime />
                        </div>
                        {/* <div className='form-title'>
                            <div className='title'><b>Start-Time</b> <span>*</span> :</div>
                            <MaxPartic/>
                        </div> */}
                        <Button
                            sx={{ minWidth: 250 }}
                            className='btn-CreatT'
                            type='submit'
                        >
                            Create Tournament
                        </Button>

                    </div>
                </div>
            </form>
        </>
    )
}

export default Createtournament
