import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import App from './components/App'
import About from './components/About'
import Products from './components/Products'

// <a href="#">{this.props.siteName}</a>

const Routes = () => (
    <Router >
      <div>
    <Navbar inverse collapseOnSelect onSelect={this.handleSelect}>
      <Navbar.Header>
          <Navbar.Brand>
            <a href="#">A react Web Store</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} ><OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home"/></NavItem>
                <NavItem eventKey={2} ><OldSchoolMenuLink to="/products" label="Products"/></NavItem>
                <NavDropdown eventKey={3} title="Preferences" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider eventKey ={3.0}/>
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={4} href="#">Login</NavItem>
                <NavItem eventKey={5} href="#">Help</NavItem>
                <NavItem eventKey={5} ><OldSchoolMenuLink to="/about" label="About"/></NavItem>
            </Nav>
            </Navbar.Collapse>        
    </Navbar>
    <div>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/products" component={Products}/>
    </div>
    </div>
    </Router>
);

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    
    <div className={match ? 'active' : ''}>
      {match ? '\' ' : ''}<Link to={to}>{label}</Link>
    </div>
  )}/>
);


export default Routes