import React, { Component } from 'react';
import Nav from "../Navigation/Nav"
import Dashboard from "../Dashboard/Dashboard"
import './App.css';
import {Route, Link, Switch} from 'react-router-dom'

//passes all files to be rendered similar to index page

class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      
      //  key : value
    }
    //bind goes here for function
  }
  //functions go here

  render() {
    //console.log(something)
    return (
      <div>
        
        <nav>
          <Nav/>
        </nav>
        <main>
          <Switch>
            
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
