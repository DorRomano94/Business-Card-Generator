import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import { LoginAction } from '../../Redux/actions/userActions';
import { Redirect } from 'react-router-dom';
import {
    Link
} from "react-router-dom";




const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



const Login = () => {
    const classes = useStyles();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const dispatch = useDispatch();
    const UserFromStore = useSelector(state => state.UserReducer)




    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value.toLowerCase() }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.email && user.password) {
            dispatch(LoginAction(user))
        }
    }

    return (
        <>
            {UserFromStore.isLogged ? (
                <Redirect to="/" />
            ) : (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange}

                            />

                            {UserFromStore.user && UserFromStore.user.message && (
                                <Typography component="h1" variant="h5">
                                    {UserFromStore.user.message}
                                </Typography>
                            )}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link to="/register" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>

                        </form>
                    </div>

                </Container>
            )}
            );
        </>
    )
}

export default Login