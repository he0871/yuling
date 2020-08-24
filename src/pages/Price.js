import React from 'react';
import Layout from '../Layout'
import PriceTable from '../component/PriceTable';
import Grid from '@material-ui/core/Grid';
import MobileService from '../component/MobileService';
class story extends React.Component{
  render(){
    return(
	<Layout>
    <Grid container spacing={2} >
    <Grid xs ={1}></Grid>
    <Grid item xs={4}>
    <PriceTable/>
    </Grid>
    <Grid xs ={1}></Grid>
    <Grid item xs={4}>
    <MobileService/>
    </Grid>
    </Grid>
	</Layout>
    )
  }
}

export default story;