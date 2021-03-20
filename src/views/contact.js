import React, { useEffect, useState } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#4e4d57',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  aTag: {
    color: 'black',
  },
  iconTag: {
    fontSize: '40px'
  }
}))

function Contact() {
  const classes = useStyles();

    return (
      <div className={classes.root}>
        <span><a className={classes.aTag} href="https://github.com/cjlaflamme1" target="_blank"><GitHubIcon className={classes.iconTag} ></GitHubIcon></a></span>
        <span><a className={classes.aTag} href="https://www.linkedin.com/in/chad-j-laflamme/" target="_blank"><LinkedInIcon className={classes.iconTag} ></LinkedInIcon></a></span>
        <span><a className={classes.aTag} href="mailto:cjlaflamme1@plymouth.edu"><MailOutlineIcon className={classes.iconTag} ></MailOutlineIcon></a></span>
      </div>
    );
  }
  
  export default Contact;
  