
import App from './components/App';
import Products from './components/Products';
import About from './components/About';
import { Menu, Container } from 'semantic-ui-react';
import SearchAutoComplete from './components/SearchAutoComplete';


import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Routes extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    return (
      <Router>
      <Container style={{ marginTop: '2em' }}>
        <Menu pointing>
          <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to='/products'
            name='products'
            active={activeItem === 'products'}
            onClick={this.handleItemClick}
          />
          <Menu.Item as={Link} to='/about'
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <SearchAutoComplete icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/products" component={Products}/>
      </Container>
      </Router>
    );
  }

}

export default Routes;