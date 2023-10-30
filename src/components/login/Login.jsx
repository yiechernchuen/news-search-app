/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, TextField, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../shared/Logo';

const dummyAccount = { username: 'Test', password: '12345' };

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showUsernameError, setShowUsernameError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.setItem('isLoggedIn', JSON.stringify(false));
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        if (username === dummyAccount.username && password === dummyAccount.password) {
            sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
            navigate('/home');
        } else {
            setShowUsernameError((prevShowFormInputError) => !prevShowFormInputError);
            setShowPasswordError((prevShowFormInputError) => !prevShowFormInputError);
        }
    }

    return (
        <>
            {/* {isLoggedIn && <Navigate to='/home' />} */}
            <Grid
                container
                justifyContent='center'
                spacing={3}
                alignItems='center'
                direction='column'
                height='100vh'
                component='form'
                onSubmit={handleSubmit}>
                <Grid item sx={{ marginBottom: '1rem' }}>
                    <Logo />
                </Grid>
                <Grid item>
                    <TextField
                        label='Username'
                        variant='outlined'
                        onChange={(e) => {
                            setUsername(e.target.value);
                            setShowUsernameError(false);
                        }}
                        value={username}
                        required
                        error={showUsernameError}
                        helperText={
                            showUsernameError && (
                                <p>
                                    Username does not exist. <br></br> Please refer below for login details
                                </p>
                            )
                        }
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label='Password'
                        type='password'
                        variant='outlined'
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setShowPasswordError(false);
                        }}
                        value={password}
                        required
                        error={showPasswordError}
                        helperText={
                            showPasswordError && (
                                <p>
                                    Incorrect password. <br></br> Please refer below for login details
                                </p>
                            )
                        }
                    />
                </Grid>
                <Grid item>
                    <Button variant='contained' size='large' sx={{ width: '223px' }} type='submit'>
                        Login
                    </Button>
                </Grid>
                <Grid item>
                    <Typography variant='caption' color='#adb5bd'>
                        Dummy Account: Test & 12345
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default Login;
