import React from 'react';
import Layout from '../Layout' 
import Grid from '@material-ui/core/Grid';

import '../css/style.scss'


class Gallery extends React.Component{
    render(){
   
      return(
      <Layout>
      <div>
      <Grid container spacing={1}>
          <Grid item xs={3} className="gallery">
            <img src="/images/Gallery4.jpg" alt="gallery1"/>
          </Grid>
          <Grid item xs={3} className="gallery">
            <img src="/images/Gallery2.jpg" alt="gallery2"/>
          </Grid>
          <Grid item xs={3} className="gallery">
            <img src="/images/Gallery3.jpg" alt="gallery3"/>
          </Grid>
      </Grid>

      <Grid container spacing={2}>
          <Grid item xs={3} className="gallery">
            <img src="/images/Gallery1.jpg" alt="gallery4"/>
          </Grid>
          <Grid item xs={3} className="gallery">
            <img src="/images/Gallery5.jpg" alt="gallery5"/>
          </Grid>
          <Grid item xs={3} className="gallery">
            <img src="/images/Gallery6.jpg" alt="gallery6"/>
          </Grid>
      </Grid>

      <Grid container spacing={2}>
          <Grid item xs={3} className="gallery">
            <img src="/images/Gallery7.jpg" alt="gallery7"/>
          </Grid>
          <Grid item xs={3} className="gallery">
            <img src="/images/Gallery8.jpg" alt="gallery8"/>
          </Grid>
          <Grid item xs={3} className="gallery">
            <img src="/images/Gallery9.jpg" alt="gallery9"/>
          </Grid>
      </Grid>

      <Grid container spacing={2}>
          <Grid item xs={3} className="gallery">
            <img src="/images/Gallery10.jpg" alt="gallery10"/>
          </Grid>
          <Grid item xs={3} className="gallery">
            <img src="/images/Gallery13.jpg" alt="gallery13"/>
          </Grid>
          <Grid item xs={3} className="gallery">
            <img src="/images/Gallery12.jpg" alt="gallery12"/>
          </Grid>
      </Grid>
      
      </div>
      </Layout>
      
      )
    }
  }
  
  export default Gallery;