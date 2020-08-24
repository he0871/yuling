import React from 'react';
import '../css/app.scss'
import '../css/style.scss'
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router";

class Header extends  React.Component{

goHome=()=>{
  this.props.history.push('/')
}

goStory=()=>{
  this.props.history.push('/story')
}

goPrice=()=>{
  this.props.history.push('/price')
}

goGallery=()=>{
  this.props.history.push('/Gallery')
}

GoReview=()=>{
  this.props.history.push('/Review')
}

render() {
  return(
  <div className="header">
  <div className="columns">
    <div className="column" onClick={this.goHome}>
      <Typography>
        Welcome
      </Typography>
    </div>
    <div className="column" onClick={this.goStory}>
      <Typography>
        Our story
      </Typography>
    </div>
    <div className="column" onClick={this.goPrice}>
      <Typography>
        Service
      </Typography>
    </div>
    <div className="column" onClick={this.goGallery}>
      <Typography>
        Gallery
      </Typography>
    </div>    
    <div className="column" onClick={this.GoReview}>
      <Typography>
        Reviews
      </Typography>
    </div>
    </div>
  </div>
  )
}
}

export default withRouter(Header);