import React from 'react'
import db from '../../configs/firebaseConfig'
// import { AppContext } from '../../contexts/globalContext'
import {
    TextField, Button, InputLabel, MenuItem, FormControl, Select,
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from '@mui/material'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import { useForm } from 'react-hook-form'

//TimePicker
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateTimePicker from '@mui/lab/DateTimePicker'
import Stack from '@mui/material/Stack'
import './index.css'
// eslint-disable-next-line no-unused-vars
import { ref, child, get, push, set } from 'firebase/database'

const filter = createFilterOptions()
const TournamentCreate = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
    }



    // API push tournament
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const createTour = (e) => {
        if (name, description, format == '') {
            handleSubmit(onSubmit)
        } else {

            e.preventDefault()
            const tourRef = ref(db, 'tournaments/')
            const newTourRef = push(tourRef)
            set(newTourRef, {
                name,
                description,
                format,
                gameId: 3333333,
                hostId: 213123,
                participantCount: '11',
                startAt: Date()
            })
            alert('Create Success ')
                
        }

    }
    const handleOnChangeName = (e) => {
        setName(e.target.value)
    }
    const handleOnChangeDes = (e) => {
        setDescription(e.target.value)
    }

    // API get Game
    // const { games, getGames } = React.useContext(AppContext)
    // React.useEffect(() => {
    //     getGames()
    // }, [])





    // Format Tour
    const [format, setFormat] = React.useState('')
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
        })

        toggleOpenG(false)
    }

    const [dialogValueG, setDialogValueG] = React.useState({
        title: '',
    })

    const handleSubmitG = (event) => {
        event.preventDefault()
        setValueG({
            title: dialogValueG.title,
        })

        handleCloseG()
    }
    const topGames = [
        { title: 'League of Legends' },
        { title: 'CrossFire' },
        { title: 'PUBG' },
        { title: 'Teamfight Tactics' },
    ]
    // Time 
    const [startAt, setStartAt] = React.useState(new Date())
    const handleChangeTime = (newValue) => {
        setStartAt(newValue)
    }
    
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
                                {...register('name', { required: true, minLength: 3, maxLength: 32 })}
                                onChange={handleOnChangeName}
                                value={name}
                            />

                            {errors?.name?.type === 'required' && <small>Tournament Name is required !</small>}
                            {errors?.name?.type === 'minLength' && (
                                <small>Minimum length of 3 characters !</small>
                            )}
                            {errors?.name?.type === 'maxLength' && (
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
                                    {...register('game_name', { required: true })}
                                />}

                            />
                            {errors?.game_name?.type === 'required' && <small className='small-description'>Game is required !</small>}
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
                                    value={format}
                                    label='Format'
                                    color='warning'
                                    onChange={handleChange}

                                >
                                    <MenuItem value='Single Elimination'  {...register('format', { required: true })}>Single Elimination</MenuItem>
                                    <MenuItem value='Leaderboard'  {...register('format', { required: true })}>Leaderboard</MenuItem>

                                </Select>
                            </FormControl>
                            {errors?.format?.type === 'required' && <small className='small-description'>Format is required !</small>}

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
                                {...register('description', { minLength: 0, maxLength: 256 })}
                                rows={4}
                                onChange={handleOnChangeDes}
                                value={description}
                            />
                            {errors?.description?.type === 'maxLength' && (
                                <small className='small-description'>Maximum length 256 characters !</small>
                            )}
                        </div>

                        {/* Start-Time */}
                        <div className='form-title'>
                            <div className='title'><b>Start-Time</b> <span>*</span> :</div>
                            <LocalizationProvider dateAdapter={AdapterDateFns} >
                                <Stack spacing={3} sx={{ minWidth: 600 }}>
                                    <DateTimePicker

                                        renderInput={(params) => <TextField {...params} />}
                                        label='Start-Time'
                                        value={startAt}
                                        onChange={handleChangeTime}
                                        minDateTime={new Date()}

                                    />

                                </Stack>
                            </LocalizationProvider>
                        </div>
                        <Button
                            sx={{ minWidth: 250 }}
                            className='btn-EditT'
                            type='submit'
                            onClick={createTour}
                        >
                            Create Tournament

                        </Button>


                    </div>
                </div>
            </form>
        </>
    )
}

export default TournamentCreate
