import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Dashboard from './component/dashboardComponent/dashboard';
import CustomerDetails from './component/customerDetails/customerDetails';

function App() {
  return (
    <BrowserRouter>
        <div>

            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                 <Route path="/customer" component={CustomerDetails} /> 
                {/* <Route path="/loading" component={Loading} /> */}
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
