import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';

import {
    Link
} from "react-router-dom";
import { LoguotAction } from '../../Redux/actions/userActions';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
};



const NavBar = () => {
    const classes = useStyles();
    const UserFromStore = useSelector(state => state.UserReducer);
    const dispatch = useDispatch()



    const handleLogout = () => {
        dispatch(LoguotAction());
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" style={linkStyle} >
                            Home
                        </Link>
                    </Typography>
                    {!UserFromStore.isLogged ? (
                        <>
                            <Link to="/login" style={linkStyle}>
                                <Button color="inherit">Login</Button>
                            </Link>
                            <Link to="/register" style={linkStyle}>
                                <Button color="inherit">
                                    Register
                                </Button>
                            </Link>
                        </>
                    ) : (
                        <Link to="/" style={linkStyle}>
                            <Button color="inherit" onClick={handleLogout}>
                                Loguot
                            </Button>
                        </Link>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;