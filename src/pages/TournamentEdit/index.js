import React from 'react'
import {
    TextField, Button, InputLabel, MenuItem, FormControl, Select,
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from '@mui/material'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import { useForm } from 'react-hook-form'
import db from '../../configs/firebaseConfig'
//TimePicker
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateTimePicker from '@mui/lab/DateTimePicker'
import Stack from '@mui/material/Stack'
import './index.css'
// eslint-disable-next-line no-unused-vars
import { ref, child, get, push, set, remove } from 'firebase/database'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../contexts/globalContext'

//
const TournamentEdit = () => {
    const { id } = useParams()
    const { tournaments, getTournaments, getGames, games } = React.useContext(AppContext)
    React.useEffect(() => {
        getTournaments()
        getGames()
    }, [])


    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
    }

    // API 
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')

    function handleEdit() {
        if (name, description, Format == '') {
            handleSubmit(onSubmit)
        } else {
            set(ref(db, `tournaments/${id}`), {
                name: name,
                description: description,
                participantCount: '',
                format: Format,
                gameId: valueG.title,
                hostId: 1232131,
                startAt: `${startAts}`

            })
                .then(() => {
                    alert('Update sucess !')
                })
                .catch(err => {
                    alert(err, 'Update failed !')
                })

        }
    }
    const handleOnChangeName = (e) => {
        setName(e.target.value)
    }
    const handleOnChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const onDeleteTour = () => {
        remove(ref(db, `tournaments/${id}`))
            .then(() => {
                alert('Delete sucess !')
            })
            .catch(err => {
                alert(err, 'Delte failed !')
            })
    }
    const onClickDele = () => {
        const handleConfirm = confirm('Are you sure you want to delete Tournaments')
        if (handleConfirm) {
            onDeleteTour()
        } else {
            alert('Bye!')
        }
    }



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
    // Game 
    const filter = createFilterOptions()
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
        { title: games[3574638] },
        { title: games[3828291] },
        { title: games[3999483] },
    ]
    // Time 
    const [startAts, setStartAts] = React.useState(new Date())
    return (
        <>
            {Object.keys(tournaments).map(tournamentsId => {
                if (id == tournamentsId) {
                    return (
                        <form onSubmit={handleSubmit(onSubmit)} key={tournamentsId}>
                            <div className='form-Et'>
                                <div className='namePages'>
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
                                            value={name}
                                            onChange={handleOnChangeName}
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
                                            <InputLabel id='demo-controlled-open-select-label' color='warning'>Format   </InputLabel>
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
                                            value={description}
                                            onChange={handleOnChangeDescription}

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
                                                    value={startAts}
                                                    onChange={(newValue) => {
                                                        setStartAts(newValue)
                                                    }}
                                                    minDateTime={new Date()}
                                                />
                                            </Stack>
                                        </LocalizationProvider>
                                    </div>
                                    <Button
                                        sx={{ minWidth: 250 }}
                                        className='btn-EditT'
                                        type='submit'
                                        onClick={handleEdit}
                                    >
                                        Edit Tournament
                                    </Button>
                                    <h2 className='or'>OR</h2>
                                    <Button
                                        sx={{ minWidth: 250 }}
                                        id='btn-DeleteT'
                                        onClick={onClickDele}
                                    >
                                        Delete Tournament
                                    </Button>
                                </div>
                            </div>
                        </form>
                    )
                }
            })}
        </>
    )
}

export default TournamentEdit
