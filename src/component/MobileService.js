import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 480,
    height: 550,

    backgroundColor: "#FFFFE5",
  },

  title:{
    textAlign: 'center',
  },
}));

export default function FolderList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
       <ListItem>
       <Typography gutterBottom variant="h5" component="h2"> Mobile Service </Typography>
      </ListItem>
      <ListItem>
        <ListItemText primary="MEN’S HAIRCUT $100"/>
      </ListItem>
      <ListItem>
        <ListItemText primary="WOMEN’S HAIRCUTS $100+" secondary="depends on length" />
      </ListItem>
      <ListItem>
        <ListItemText primary="KIDS’ HAIRCUT $50" secondary="UNDER 12YEARS OLD" />
      </ListItem>
      <ListItem>
        <ListItemText primary="BEARD TRIM $40" />
      </ListItem>
      <ListItem>
        <ListItemText primary="FATHER AND SON $150" />
      </ListItem>
      <ListItem>
        <ListItemText secondary="Travel fees may be applied for longer distance" />
        </ListItem>
        <ListItem>
        <ListItemText secondary="10% off for group of 3 people" />
        </ListItem>
        <ListItem>
        <ListItemText secondary="20% off for group of 4 people" />
      </ListItem>
      
    </List>
  );
}