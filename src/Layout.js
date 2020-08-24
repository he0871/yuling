import React from 'react'
import Header from './component/Header'
import './css/style.scss'

const Layout = props =>(
    <div className="wrapper">
        <Header/>
        {props.children}
    </div>
)

export default Layout