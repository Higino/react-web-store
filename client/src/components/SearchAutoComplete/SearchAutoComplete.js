import _ from 'lodash'
import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'

var source;

export default class SearchAutoComplete extends Component {
  componentWillMount() {
    this.resetComponent()
  }
  componentDidMount() {
    // Uppon component mouting fetch product list from datacenter
    // url (required), options (optional).
    // I Guess this method only works for safari and chrome but then again this is a demo ... :)
    fetch('/product_listing', {
      method: 'get'
    }).then(function(response) {
      return response.json();
    }).then ((prods) => {
        source = JSON.parse(prods).map( (e)=>{ 
            return {
                key: e.id,
                title: e.product_name, 
                description: _.truncate(e.description), 
                price: e.price, 
                image: e.product_avatar
            }
        });
    }).catch(function(err) {
      console.log("Error " + err);
    });    
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            results={results}
            value={value}
            {...this.props}
          />
    )
  }
}