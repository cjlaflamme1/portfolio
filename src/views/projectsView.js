import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import IndividualProject from '../components/individualProject';
import portfolioInfo from '../utils/projectInfo';
import { makeStyles } from '@material-ui/core/styles';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import WorkIcon from '@material-ui/icons/Work';
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrill';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  sectionContainer: {
    paddingTop: '40px',
    paddingBottom: '40px',
    marginTop: '10px',
    backgroundImage: 'linear-gradient(#E1DFEB, #4e4d57)',
    
  },
  buttonGroup: {
    backgroundColor: 'white'
  },
  title: {
    textAlign: 'center'
  }, 
  projectIcon: {
    fontSize: '40px',
    color: 'black'
  },
  projectButton: {
    backgroundColor: '#E1DFEB'
  }
}));



function ProjectViews() {
  const classes = useStyles();
  const [currentSlidePosition, setCurrentSlidePosition] = useState(0);
  

  useEffect(() => {
  
  
  }, [currentSlidePosition])

    return (
      <div className={classes.sectionContainer}>
        <h1 className={classes.title}>Project Examples</h1>
        <div className={classes.root} >
        <IndividualProject currentSlide={portfolioInfo[currentSlidePosition]} ></IndividualProject>
        <h3 className={classes.title}>Select Icons to Explore More</h3>

          <ButtonGroup className={classes.buttonGroup} color="primary" variant="text" aria-label="text primary button group">
            <Button onClick={() => setCurrentSlidePosition(0)} className={classes.projectButton}><OutdoorGrillIcon className={classes.projectIcon}></OutdoorGrillIcon></Button>
            <Button onClick={() => setCurrentSlidePosition(1)} className={classes.projectButton}><FilterHdrIcon className={classes.projectIcon}></FilterHdrIcon></Button>
            <Button onClick={() => setCurrentSlidePosition(2)} className={classes.projectButton}><WbSunnyIcon className={classes.projectIcon}></WbSunnyIcon></Button>
            <Button onClick={() => setCurrentSlidePosition(3)} className={classes.projectButton}><WorkIcon className={classes.projectIcon}></WorkIcon></Button>
            <Button onClick={() => setCurrentSlidePosition(4)} className={classes.projectButton}><FastfoodIcon className={classes.projectIcon}></FastfoodIcon></Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
  
  export default ProjectViews;
  