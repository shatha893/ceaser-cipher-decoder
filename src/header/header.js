import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Image from 'react-bootstrap/Image';
import cssClasses from './header.module.css';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }, 
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

const ButtonAppBar= (props)=> {
  // getpp();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar className={cssClasses.Toolbar}>
          
          {/* <Logo/> */}
          <Typography 
          variant="h6" 
          className={cssClasses.typography}>
            <a 
            className={cssClasses.title}>
              Ceaser Decoder
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(ButtonAppBar);
