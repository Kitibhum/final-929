import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes'; 
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component { 

    constructor(props) { 
  
      super(props); 
  
      this.state = { 
  
        dishes: DISHES 
  
      }; 
  
    } 

  render() {

    return (
      <BrowserRouter>
      <div className="App">

   
         <Main/>
     
      </div>
      </BrowserRouter>
    );

  }

}
export default App;
