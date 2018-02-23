import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor(){
    super();
    this.state = {
      customers: []
    }
  }
  /* MAke a request to our back end and fill the customers array 
  witht the data thats in the back end.
    So we have to use life cycle method below. 
  */
  
  componentDidMount(){
    fetch('/api/customers')
    .then(res => res.json())
    .then(customers => this.setState({customers}, () => console.log('Customers fetched..', customers)));
  }
  
  
  render() {
    return (
      <div>
        <h2>Customers  This is a Component</h2>
        <ul>
          {this.state.customers.map(customer =>
          <li key={customer.id}> { customer.firstName } { customer.lastName}</li> )}
        </ul>
      </div>
    );
  }
}

export default Customers;
