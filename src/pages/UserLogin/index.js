import * as React from 'react'
import './index.css'

import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import { useForm } from 'react-hook-form'
// import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { AppContext } from '../../contexts/globalContext'

function Copyright(props) {
    return (
        <Typography variant='body2' color='text.secondary' align='center' {...props}>
            {'Copyright © '}
            <Link color='inherit' href='https://rikkeisoft.com/en/'>
                RikkeiSoft
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}
  
const theme = createTheme()

export default function Login() {
    const { getUserLogged, users, writeDataTable, getUser } = React.useContext(AppContext)
    const navigate = useNavigate()
    const {register, handleSubmit, formState:{ errors }} = useForm()
    const listUser = [...users]

    const onSubmit = ( data) => {
        const email = data.email
        const password = data.password
        for (let i = 0; i < listUser.length; i++) {
            console.log('current data',email, password )
            console.log('listUser[i]',listUser[i].email, listUser[i].password  == password)
            if (listUser[i].email === email && listUser[i].password == password) {
                writeDataTable(listUser[i], 'userLogged')
                navigate('/tournaments')
                break
            } else {
                alert('Wrong email or password')
                continue
            }
        }
    }
    

    React.useEffect(() => {
        getUser(),
        getUserLogged()
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Grid container component='main' sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://www.hdnicewallpapers.com/Walls/Big/Games/Assassins_Creed_Valhalla_Game_4K_Wallpaper.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid className='right-content' item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <div className='form-sign-in' onSubmit={handleSubmit(onSubmit)}>
                            <Typography component='h1' fontWeight={700} variant='h5'>
                                ACCOUNT LOGIN
                            </Typography>
                            <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <TextField
                                    margin='normal'
                                    required
                                    fullWidth
                                    id='email'
                                    label='Email Address'
                                    name='email'
                                    autoComplete='email'
                                    autoFocus
                                    {...register(
                                        'email', {
                                            required: 'Email must be filled',
                                            pattern: {
                                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                                message: 'Invalid email'
                                            }
                                        })}
                                    error ={!!errors.email}
                                    helperText={errors?.email ? errors.email.message : null}
                                />
                                <TextField
                                    margin='normal'
                                    required
                                    fullWidth
                                    name='password'
                                    label='Password'
                                    type='password'
                                    id='password'
                                    autoComplete='current-password'
                                    {...register(
                                        'password', {
                                            required: 'Password must be filled'
                                        })}
                                    error ={!!errors.password}
                                    helperText={errors?.password ? errors.password.message : null}
                                />
                                <FormControlLabel
                                    control={<Checkbox value='remember' color='primary' />}
                                    label='Remember me'
                                />
                                <br/>
                                <Button
                                    className='btn btn-sign-in'
                                    type='submit'
                                    variant='contained'
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <div className='btn-login-social'>
                                    <Button 
                                        className='btn btn-social'
                                        type='submit'
                                        variant='contained'
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        <FacebookIcon/>
                                    </Button>
                                    <Button
                                        className='btn btn-social btn-google'
                                        type='submit'
                                        variant='contained'
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        <GoogleIcon/>
                                    </Button>
                                </div>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href='#' variant='body2'>
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href='#' variant='body2'>
                                            {'Dont have an account? Sign Up'}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Copyright sx={{ mt: 5 }} />
                            </Box>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}
