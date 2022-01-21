import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import { useForm } from 'react-hook-form'

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
    const {register, handleSubmit, formState:{ errors }} = useForm()
    const onSubmit = (data) => console.log(data)

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     const data = new FormData(event.currentTarget)
    //     // eslint-disable-next-line no-console
    //     console.log({
    //         email: data.get('email'),
    //         password: data.get('password'),
    //     })
    // }
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
                        backgroundImage: 'url(https://i.pinimg.com/originals/bf/28/fb/bf28fbc917c53b40d1bee22667210b3a.jpg)',
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
                        <div 
                            className='form-sign-in' 
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <Typography component='h1' fontWeight={700} variant='h5'>
                                SIGN UP
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
                                            required: 'Password must be filled',
                                            minLength: {
                                                value: 8,
                                                message: 'Password must have at least 8 character'
                                            },
                                            maxLength: {
                                                value: 32,
                                                message: 'Password must have at least 8 character',
                                            }
                                        })}
                                    error ={!!errors.password}
                                    helperText={errors?.password ? errors.password.message : null}
                                />
                                <TextField
                                    margin='normal'
                                    required
                                    fullWidth
                                    id='displayName'
                                    label='Display Name'
                                    name='displayName'
                                    autoFocus
                                    {...register(
                                        'displayName', {
                                            required: 'Display Name must be filled',
                                            minLength: {
                                                value: 4,
                                                message: 'Display Name must have at least 8 character'
                                            },
                                            maxLength: {
                                                value: 16,
                                                message: 'Display Name must have at least 8 character',
                                            }
                                        })}
                                    error ={!!errors.displayName}
                                    helperText={errors?.displayName ? errors.displayName.message : null}
                                />
                                <br/>
                                <Button
                                    className='btn btn-sign-in'
                                    type='submit'
                                    variant='contained'
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Create
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
                                    <Grid item>
                                        <Link href='#' variant='body2'>
                                            {'If you have an account? Sign Up'}
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
