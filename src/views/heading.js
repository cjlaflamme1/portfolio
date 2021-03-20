import React from 'react';
import '../styles/heading.css';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


import profileImg from '../images/profileWitheffect.jpg';

const useStyles = makeStyles(() => ({
    gridContainer: {
        display: 'flex',
        '@media (max-width:960px)': {
            flexDirection: 'column-reverse'
        },
        textAlign: 'center',
        alignItems: 'center'

    },
    paper: {
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        backgoundColor: 'rgba(0, 0, 0, 0)'

    },
    paperImage: {
        maxHeight: '100%',
        borderRadius: '10%',
    },
    title: {
        textAlign: 'center'
    },
    list: {
        borderTop:'solid'
    }
}))

const useTransparentBackground = makeStyles(() => ({
    transparentBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        textAlign: 'left',
        margin: '10px'
    }
}))

function Heading() {
    const classes = useStyles();
    const background = useTransparentBackground();
    const combinedStyles = clsx(classes.paper, background.transparentBackground);
    return (
        <div>
            <section className="header">
                <div className='headerBG'></div>
                <h1>Chad J Laflamme</h1>
                <h2>Full Stack Web Developer</h2>
                <h3>cjlaflamme1@plymouth.edu</h3>
            </section>
            <Grid container spacing={1} className={classes.gridContainer}>
                <Grid item xs={12} md={3}>
                    <Paper className={background.transparentBackground} elevation={0}>
                    Full-stack web developer leveraging several years of experience in leadership, education, and organizational management with a certificate in full stack web development from the University of New Hampshire. 
                    Trained in HTML, CSS, Javascript, Typescript, Node.JS, Angular, and React. 
                    <br />
                    <br />
                    With each project, I aim to find creative solutions that meet the unique needs of the program and the population served. 
                    I developed curriculum for university undergraduate programs and nonprofit employee development training programs with intended outcomes and students served as the primary guiding principle. 
                    I’m excited to combine my experiences to deliver web based programs to meet the needs of a diverse user profile.
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper className={background.transparentBackground} elevation={0}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography variant="h6" className={classes.title}>
                                    Front-End
                                </Typography>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ArrowRightIcon />
                                            JavaScript
                                    </ListItem>
                                    <ListItem>
                                        <ArrowRightIcon />
                                        TypeScript
                                    </ListItem>
                                    <ListItem>
                                        <ArrowRightIcon />
                                        HTML
                                    </ListItem>
                                    <ListItem>
                                        <ArrowRightIcon />
                                        CSS
                                    </ListItem>
                                    <ListItem>
                                        <ArrowRightIcon />
                                        React
                                    </ListItem>
                                    <ListItem>
                                        <ArrowRightIcon />
                                        Angular
                                    </ListItem>
                                </List>

                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6" className={classes.title}>
                                    Back-End
                                </Typography>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ArrowRightIcon />
                                        Node.js
                                    </ListItem>
                                    <ListItem>
                                        <ArrowRightIcon />
                                        NestJS
                                    </ListItem>
                                    <ListItem>
                                        <ArrowRightIcon />
                                        MySQL
                                    </ListItem>
                                    <ListItem>
                                        <ArrowRightIcon />
                                        NoSQL
                                    </ListItem>
                                    <ListItem>
                                        <ArrowRightIcon />
                                        Sequelize
                                    </ListItem>
                                    <ListItem>
                                        <ArrowRightIcon />
                                        TypeORM
                                    </ListItem>
                                    <ListItem>
                                        <ArrowRightIcon />
                                        Mongoose
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={combinedStyles} elevation={0}>
                        <img
                            src={profileImg}
                            title="Profile Photo"
                            className={classes.paperImage}
                        />
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}

export default Heading;
