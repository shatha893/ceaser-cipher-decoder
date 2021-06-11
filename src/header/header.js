import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CaeserDisk from '../Assets/wheel_img.jpg';
import cssClasses from './header.module.css';
import { withRouter } from 'react-router-dom';

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

          <img src={CaeserDisk} alt={"Ceaser Disk"} className={cssClasses.diskImg}/> 
                 
          <Typography 
          variant="h6" 
          className={cssClasses.typography}>
              Ceaser Decoder
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(ButtonAppBar);
