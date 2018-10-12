import React, { Component } from 'react';
import Nav from "../Navigation/Nav"
import Dashboard from "../Dashboard/Dashboard"
import About from "../About/About"
import './App.css';
import {Route, Link, Switch, Redirect} from 'react-router-dom'

//passes all files to be rendered similar to index page

class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      
      //  key : value
    }
    //bind goes here for function
  }
  // sendToHomePage(){
  //   <Redirect to="/stocks"/>
  // }
  //functions go here
 //hello

  render() {
    //console.log(something)
    return (
      <div>
        
        <nav>
          
          <Nav/> {/* Nav Bar */}
          
        </nav>
        
        <main>
          <Switch>
            <Route path="/stocks" component={Dashboard} />
            <Route path="/about" component={About}/>
            <Route path="/" render={props =>(<Redirect to="/stocks"/>)}/>
            
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
