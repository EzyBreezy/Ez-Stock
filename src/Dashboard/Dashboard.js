import React, { Component } from 'react';
import "./Dashboard.css"
import StockNames from "../data/stock-data.json"

class Dashboard extends Component {
  constructor (props){
    super(props)
    this.state = {
        stocks: null, // key we are passing
      //  key : value
    }
    //bind goes here for function
  }
  //functions go here

  render() {
    //console.log(something)
    return (
      <div>
        {/* <StockNames/> */}
      </div>
    );
  }
}

export default Dashboard;
