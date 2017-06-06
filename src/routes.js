import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import App from './components/App'
import About from './components/About'
import Products from './components/Products'

const Routes = () => (
    <Router >
    <div>
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
        <OldSchoolMenuLink to="/about" label="About"/>
        <OldSchoolMenuLink to="/products" label="Products"/>
        <hr/>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/products" component={Products}/>
    </div>
    </Router>
);

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <div className={match ? 'active' : ''}>
      {match ? '> ' : ''}<Link to={to}>{label}</Link>
    </div>
  )}/>
);


export default Routes