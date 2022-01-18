// import * as React from 'react'
// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import Dialog from '@mui/material/Dialog'
// import TextField from '@mui/material/TextField'
// import DialogActions from '@mui/material/DialogActions'
// import DialogContent from '@mui/material/DialogContent'
// import DialogTitle from '@mui/material/DialogTitle'
// import FormControl from '@mui/material/FormControl'


// export default function MaxPartic() {
//     const [open, setOpen] = React.useState(false)



//     const handleClickOpen = () => {
//         setOpen(true)
//     }

//     const handleClose = (event, reason) => {
//         if (reason !== 'backdropClick') {
//             setOpen(false)
//         }
//     }

//     return (
//         <div className='check-custom'>
//             <input type='checkbox' onClick={handleClickOpen} /> <b>Max Participant Allowed</b>
//             <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
//                 <DialogTitle>Limit people joining the tournament?</DialogTitle>
//                 <DialogContent>
//                     <Box component='form' sx={{ display: 'flex', flexWrap: 'wrap' }}>
//                         <FormControl sx={{ m: 1, minWidth: 200 }}>
//                             <TextField
//                                 sx={{ minWidth: 200 }}
//                                 helperText=' '
//                                 color='warning'
//                                 id='demo-helper-text-aligned-no-helper , check-custom'
//                                 label='Max Participant Allowed'
//                             />
//                         </FormControl>
//                     </Box>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClose}>Cancel</Button>
//                     <Button onClick={handleClose}>Ok</Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     )
// }
