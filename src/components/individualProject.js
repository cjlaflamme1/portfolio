import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    textAlign:'center'
  },
  paperContainer: {
      height: '600px',
      width: 'auto',
      backgroundColor: '#E1DFEB'
  },
  image: {
      maxHeight: '300px',
      width: 'auto',
      marginLeft: '20px',
      marginRight: '20px'
  },
  componentContainer: {
      display: 'flex',
      justifyContent: 'center',
  },
  text: {
      textAlign: 'center'
  },
  button: {
    backgroundColor: 'black',
    color: 'white'
  }
}));

function IndividualProject(props) {
    const classes = useStyles();
    return (
      <div className={classes.componentContainer}>
          <Paper className={classes.paperContainer}>
              <h1 className={classes.text}>{props.currentSlide.title}</h1>
              <img src={props.currentSlide.image} className={classes.image}/>
              <h2 className={classes.text}>{props.currentSlide.description}</h2>
              <h3 className={classes.text}><u>Technology Used:</u></h3>
              <h4 className={classes.text}>{props.currentSlide.techUsed}</h4>
              <div className={classes.root}>
                <Button variant="contained" className={classes.button} href={props.currentSlide.projectLink} target="_blank">
                    View Live App
                </Button>
                <Button variant="contained" className={classes.button} href={props.currentSlide.projectRepo} target="_blank">
                    View Repository
                </Button>
                </div>
          </Paper>
        
      </div>
    );
  }
  
  export default IndividualProject;
  