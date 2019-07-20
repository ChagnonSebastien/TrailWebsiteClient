import React from 'react';
import { Route, Switch } from "react-router";
import { BrowserRouter as Router, Link } from "react-router-dom";
import './App.css';
import Trail from './trail/Trail';
import DoubleNavigationPage from './DoubleNavigationPage';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdbreact';

function App() {
  return (
    <Router>
      <DoubleNavigationPage>
        <Switch>
          <Route exact path="/" render={routeProps => (
            <MDBBreadcrumb>
              <MDBBreadcrumbItem active>Home</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          )}/>
          <Route path="/trail" component={Trail} />
          <Route path="/contact" render={routeProps => (
            <MDBBreadcrumb>
              <MDBBreadcrumbItem><Link to="/">Home</Link></MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Contact</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          )}/>
        </Switch>
      </DoubleNavigationPage>
    </Router>
  );
}

export default App;
