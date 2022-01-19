/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'
import './CreateTour.css'
import {
    TextField, Button, InputLabel, MenuItem, FormControl, Select,
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from '@mui/material'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import StartTime from './StartTime'
import { useForm } from 'react-hook-form'
// import MaxPartic from './MaxPartic'
const filter = createFilterOptions()
const Createtournament = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    // Format Tour
    const [Format, setFormat] = React.useState('')
    const [open, setOpen] = React.useState(false)

    const handleChange = (event) => {
        setFormat(event.target.value)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }
    //Game 
    const [valueG, setValueG] = React.useState(null)
    const [openG, toggleOpenG] = React.useState(false)

    const handleCloseG = () => {
        setDialogValueG({
            title: '',
            year: '',
        })

        toggleOpenG(false)
    }

    const [dialogValueG, setDialogValueG] = React.useState({
        title: '',
        year: '',
    })

    const handleSubmitG = (event) => {
        event.preventDefault()
        setValueG({
            title: dialogValueG.title,
            year: parseInt(dialogValueG.year, 10),
        })

        handleCloseG()
    }
    const topGames = [
        { title: 'League of Legends'},
        { title: 'CrossFire'},
        { title: 'PUBG'},
        { title: 'Teamfight Tactics'},
    ]

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
                    </div>
                    {/* Tournament name */}
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

                        {/* Game */}
                        <div className='form-title'>
                            <div className='title'><b>Game</b> <span>*</span> :</div>
                            <Autocomplete
                                value={valueG}
                                onChange={(event, newValueG) => {
                                    if (typeof newValueG === 'string') {
                                        // timeout to avoid instant validation of the dialog's form.
                                        setTimeout(() => {
                                            toggleOpenG(true)
                                            setDialogValueG({
                                                title: newValueG,
                                                year: '',
                                            })
                                        })
                                    } else if (newValueG && newValueG.inputValue) {
                                        toggleOpenG(true)
                                        setDialogValueG({
                                            title: newValueG.inputValue,
                                            year: '',
                                        })
                                    } else {
                                        setValueG(newValueG)
                                    }
                                }}
                                filterOptions={(options, params) => {
                                    const filtered = filter(options, params)

                                    if (params.inputValue !== '') {
                                        filtered.push({
                                            inputValue: params.inputValue,
                                            title: `Add "${params.inputValue}"`,
                                        })
                                    }

                                    return filtered
                                }}
                                id='free-solo-dialog-demo'
                                options={topGames}
                                getOptionLabel={(option) => {
                                    // e.g valueG selected with enter, right from the input
                                    if (typeof option === 'string') {
                                        return option
                                    }
                                    if (option.inputValue) {
                                        return option.inputValue
                                    }
                                    return option.title
                                }}
                                selectOnFocus
                                clearOnBlur
                                handleHomeEndKeys
                                renderOption={(props, option) => <li {...props}>{option.title}</li>}
                                sx={{ width: 300 }}
                                freeSolo
                                renderInput={(params) => <TextField
                                    {...params} 
                                    label='Game'
                                    sx={{ minWidth: 600 }}
                                    color='warning'
                                    {...register('Game', { required: true})}
                                />}
                                
                            />
                            {errors?.Game?.type === 'required' && <small className='small-description'>Game is required !</small>}
                            <Dialog open={openG} onClose={handleCloseG}>
                                <form onSubmit={handleSubmitG}>
                                    <DialogTitle>Add a new Game</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Did you miss any game in our list? Please, add it!
                                        </DialogContentText>
                                        <TextField
                                            autoFocus
                                            margin='dense'
                                            id='name'
                                            value={dialogValueG.title}
                                            onChange={(event) =>
                                                setDialogValueG({
                                                    ...dialogValueG,
                                                    title: event.target.valueG,
                                                })
                                            }
                                            label='title'
                                            type='text'
                                            variant='standard'
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleCloseG}>Cancel</Button>
                                        <Button type='submit'>Add</Button>
                                    </DialogActions>
                                </form>
                            </Dialog>
                        </div>

                        {/* Format */}
                        <div className='form-title'>
                            <div className='title'><b>Format</b> <span>*</span> :</div>
                            <FormControl sx={{ minWidth: 600 }} >
                                <InputLabel id='demo-controlled-open-select-label' color='warning'>Format</InputLabel>
                                <Select
                                    labelId='demo-controlled-open-select-label'
                                    id='demo-helper-text-aligned-no-helper'
                                    open={open}
                                    onClose={handleClose}
                                    onOpen={handleOpen}
                                    value={Format}
                                    label='Format'
                                    color='warning'
                                    onChange={handleChange}

                                >
                                    <MenuItem value='Single Elimination'  {...register('Format', { required: true })}>Single Elimination</MenuItem>
                                    <MenuItem value='Leaderboard'  {...register('Format', { required: true })}>Leaderboard</MenuItem>

                                </Select>
                            </FormControl>
                            {errors?.Format?.type === 'required' && <small className='small-description'>Format is required !</small>}

                        </div>

                        {/* Description */}
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
                            {errors?.Description?.type === 'maxLength' && (
                                <small className='small-description'>Maximum length 256 characters !</small>
                            )}
                        </div>

                        {/* Start-Time */}
                        <div className='form-title'>
                            <div className='title'><b>Start-Time</b> <span>*</span> :</div>
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
