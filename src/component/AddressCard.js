import React from 'react';
import '../css/app.scss'
import '../css/style.scss'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    width: 480,
    height: 580,
  },
  icon:{
    width: 40,
    height: 40,
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography  variant="h4" component="h1">
            Contact Me
          </Typography>
          <Typography  variant="body1" component="h2">
            Address
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p">
            8234 Miner St Greenbelt, MD
          </Typography>
          <Typography  variant="body1" component="h2">
            Cell Phone
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p">
           (410)7394608
          </Typography>
          <Typography  variant="body1" component="h2">
            Social Media
          </Typography>
          <div className="columns">
          <div className="column">
              <a href ="https://www.instagram.com/yulingmensgrooming/">
              <img className={classes.icon} src="icons/ins.png" alt="ins icon"/>
              </a>
          </div>
          <div className="column">
              <img className={classes.icon} src="icons/fb.png" alt="facebook icon"/>
          </div>
          <div className="column">
              <a href = "https://twitter.com/YulingGuo3">
              <img className={classes.icon} src="icons/twitter.svg" alt="twitter icon"/>
              </a>
          </div>
          <div className="column"></div>
          <div className="column"></div>
          </div>
          <Typography  variant="body1" component="h2">
            Youtube Channel
          </Typography>
          <a href="https://www.youtube.com/watch?v=aSPm3qMGZV0&feature=youtu.be&fbclid=IwAR3zdeXKxzT68qQgOa-cEPRiKuWFp4oK5wahgDHMp40pF3Hdok7odprlZOs">
          <img src="/images/ytchannel.jpg" alt="youtube channel"/>
          </a>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}