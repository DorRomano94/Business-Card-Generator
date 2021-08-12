import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NavBar from './Components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import { useDispatch } from 'react-redux';
import { checkAuth } from './Redux/actions/userActions';
import CustomTemplate from './Components/CustomTemplate/CustomTemplate';
import Footer from './Components/Footer/Footer';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



function App() {

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch])


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/card/:cardId/">
                <CustomTemplate />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/" >
                <Home />
              </Route>
            </Switch>
          </Router>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
