import React from 'react';
import  {BrowserRouter, Switch , Route} from 'react-router-dom'
import App from './pages/App'      
import NotFound from './pages/NotFound'    
import Story from './pages/Story'
import Price from './pages/Price'
import Gallery from './pages/Gallery'
import Review from './pages/Review'


const Router = () =>(
<BrowserRouter>
    <Switch>
        <Route path='/' exact component={App}/>
        <Route path='/story' exact component={Story}/>
        <Route path='/price' exact component={Price}/>
        <Route path='/not' exact component={NotFound}/>
        <Route path='/Gallery' exact component={Gallery}/>
        <Route path='/Review' exact component={Review}/>
        <Route component={NotFound}/>

    </Switch>
</BrowserRouter>
)

export default Router;