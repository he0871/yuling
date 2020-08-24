import React from 'react';
import Layout from '../Layout'
import Grid from '@material-ui/core/Grid';
import '../css/style.scss'

class Review extends React.Component{
    render(){
        return(
          <Layout>
            <div>
            <Grid container spacing={2}>
              <Grid item xs={4} className="gallery">
                <img src="/images/review1.png" alt="review1"/>
              </Grid>
              <Grid item xs={4} className="gallery">
                <img src="/images/review2.png" alt="review2"/>
              </Grid>
              <Grid item xs={4} className="gallery">
                <img src="/images/review3.png" alt="review3"/>
              </Grid>
            </Grid>
            </div>
          </Layout>  
          )
    }
  }
  
  export default Review;