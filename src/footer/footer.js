import React from 'react';
import classes from './footer.module.css';
import CopyrightIcon from '@material-ui/icons/Copyright';

const footer = (props) =>(
    <footer className={classes.Footer}>
        
        <p><CopyrightIcon style={{fontSize:13}}/> Shatha Barqawi </p>
    </footer>
    
);

export default footer;