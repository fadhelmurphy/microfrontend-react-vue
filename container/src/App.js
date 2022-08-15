import React, { useState } from 'react';
import HelloReactApp from './components/ReactApp';
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import HelloVueApp from './components/VueApp';
import Combine from './components/Combine';

const history = createBrowserHistory();

const Header = () => (
    <div style={{display:"flex"}}>
    <Link to='/'><h3>home</h3></Link><br />
    <Link to='/react'><h3>WithReact</h3></Link><br />
    <Link to='/vue'><h3>WithVue</h3></Link>
    <style jsx="true">
    {`
        a {
            font-family: system-ui;
            font-weight: 600;
            font-style: normal;
            font-size: 14px;
            line-height: 24px;
            text-transform: uppercase;
            text-decoration: none;
            color: #000;
        }
        a:not(:first-child) {
            margin-left: 20px;
        }
    `}
    </style>
    </div >
)

export default () => {
    
    return (
        <Router history={history}>
            <Header />
            <hr />
            <Switch>
                <Route path='/vue' render={()=><HelloVueApp />} />
                <Route path='/react' render={()=> <HelloReactApp />} />
                <Route path='/' render={()=><Combine />} />
            </Switch>
        </Router>
    )
}