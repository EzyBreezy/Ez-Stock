import React, { Component } from 'react';
import './Nav.css';


class Nav extends Component {
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
      <div className="navContainer" >
        <a href="/stocks"className="homebutton"> Home </a>
        <a href="/about"className="about"> About </a>
      </div>
    );
  }
}

export default Nav;