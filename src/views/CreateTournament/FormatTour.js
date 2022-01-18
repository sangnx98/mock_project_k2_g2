// import * as React from 'react'
// import InputLabel from '@mui/material/InputLabel'
// import MenuItem from '@mui/material/MenuItem'
// import FormControl from '@mui/material/FormControl'
// import Select from '@mui/material/Select'

// export default function FormatTour() {
//     const [Format, setFormat] = React.useState('')
//     const [open, setOpen] = React.useState(false)

//     const handleChange = (event) => {
//         setFormat(event.target.value)
//     }

//     const handleClose = () => {
//         setOpen(false)
//     }

//     const handleOpen = () => {
//         setOpen(true)
//     }

//     return (
//         <>
//             <FormControl sx={{ minWidth: 600 }} >
//                 <InputLabel id='demo-controlled-open-select-label' color='warning'>Format</InputLabel>
//                 <Select
//                     labelId='demo-controlled-open-select-label'
//                     id='demo-helper-text-aligned-no-helper'
//                     open={open}
//                     onClose={handleClose}
//                     onOpen={handleOpen}
//                     value={Format}
//                     label='Format'
//                     color='warning'
//                     onChange={handleChange}
                    
//                 >
//                     <MenuItem value='Single Elimination' >Single Elimination</MenuItem>
//                     <MenuItem value='Leaderboard' >Leaderboard</MenuItem>
                    
//                 </Select>          
//             </FormControl>
//         </>
//     )
// }
