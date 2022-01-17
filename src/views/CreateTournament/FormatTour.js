import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function FormTour() {
    const [age, setAge] = React.useState('')
    const [open, setOpen] = React.useState(false)

    const handleChange = (event) => {
        setAge(event.target.value)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <div>
            <FormControl sx={{minWidth: 600 }}>
                <InputLabel id='demo-controlled-open-select-label' color='warning'>Format</InputLabel>
                <Select
                    labelId='demo-controlled-open-select-label'
                    id='demo-helper-text-aligned-no-helper'
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}
                    label='Format'
                    color='warning'
                    onChange={handleChange}
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Single Elimination</MenuItem>
                    <MenuItem value={20}>Double Elimination</MenuItem>
                    <MenuItem value={30}>Free For All</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
