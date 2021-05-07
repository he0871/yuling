import React from 'react';
import Layout from '../Layout'
import Typography from '@material-ui/core/Typography';
import '../css/style.scss'

class App extends React.Component{
  render(){
    return(
	<Layout>
    <div className="logo">
		  <img src="/images/logo2.png" alt="logo" className="logo_image"/>
      <Typography variant="h3">Mobile hairstylist and hair studio</Typography>
    </div>
    <div align = "center">
    <div className="ContactInfo"></div>
      <div className="text">
        <Typography variant="h5">Custom Hairstyling for the Modern Men and Women.</Typography>
        <Typography variant="h5">Providing expert grooming, premier service, and a shot of confidence.</Typography>
        <div className="phone_number">
          <Typography>Schedule Appointment</Typography>
          <Typography>----- 4107394608 -----</Typography>
        </div>
      </div>
    </div>
	</Layout>
    )
  }
}

export default App;