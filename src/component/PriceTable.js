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
       <Typography gutterBottom variant="h5" component="h2"> Hair Studio </Typography>
      </ListItem>
      <ListItem>
        <ListItemText  primary="MEN’S HAIRCUT $55 "/>
      </ListItem>
      <ListItem>
        <ListItemText primary="WOMEN’S HAIRCUTS $65+" secondary="depending on length" />
      </ListItem>
      <ListItem>
        <ListItemText primary="KIDS’ HAIRCUT $35 " secondary="UNDER 12YEARS OLD" />
      </ListItem>
      <ListItem>
        <ListItemText primary="BEARD TRIM $35"/>
      </ListItem>
      <ListItem>
        <ListItemText primary="HAIR COLOR $65" />
      </ListItem>
      <ListItem>
        <ListItemText primary="GREY BLENDING $55"/>
      </ListItem>
    </List>
  );
}