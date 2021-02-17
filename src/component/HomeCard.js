import React from 'react';
import '../css/app.scss'
import '../css/style.scss'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 600,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div>
    <Grid container spacing={2}>
    <Grid item xs={1}></Grid>
    <Grid item xs={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/images/main.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Yuling
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Yuling is one of the most popluar hair artist in the DMV area (DC, Maryland, Virginia)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid> 
    

    <Grid item xs={6}>
    <Typography gutterBottom variant="h5" component="h2">
     About Us
     </Typography>
     <Typography gutterBottom variant="subtitle1" component="h2">
      Yuling Guo, Owner/Barber
    </Typography>
    <Typography gutterBottom variant="subtitle1" component="h2">
      Coming from a long line of family barbers, Yuling started cutting hair at her family’s hair salon in Shenzhen, China) . Some says the shears are in her blood. She was first taught by a great barber, her mom, in 2008. After immigrating to the US, she honed her skills at Academy of Barber School and obtained her professional barbering license in 2012. For the past 8 years, she barbered at Diego’s hair salon and then at Grooming Lounge in downtown Washington DC. Her main focus is to provide our customers at YL’s Executive Cuts quality haircuts. Her blend of artistry,technical skill and passion for barbering make a unique experience.
    </Typography>
    </Grid>
    <Grid item xs={1}></Grid>
    </Grid>
    </div>
  );
}