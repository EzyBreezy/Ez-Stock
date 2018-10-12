import React, { Component } from 'react';
import './About.css';


class About extends Component {
    constructor(props){
        super(props)
        this.state = {
      //  key : value
    }
    //this is where you bind functions
}
//functions go here

render() {
  //console.log(something)
    return (
      <div>
          <h1> About Page </h1>
          <p> Whats up doc</p>
      </div>
    );
  }
}

export default About;