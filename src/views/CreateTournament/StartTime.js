import * as React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateTimePicker from '@mui/lab/DateTimePicker'
import Stack from '@mui/material/Stack'

export default function DateTimeValidation() {
    const [value, setValue] = React.useState(new Date())

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} >
            <Stack spacing={3} sx={{ minWidth: 600 }}>
                <DateTimePicker
                    
                    renderInput={(params) => <TextField {...params} />}
                    label='Start-Time'
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue)
                    }}
                    minDateTime={new Date()}
                />
            </Stack>
        </LocalizationProvider>
    )
}
