import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Us from './UsComponent';
import {COMMENTS} from '../shared/comments';
import { MOVIES} from '../shared/movies';
import { PROMOTIONS } from '../shared/promotions';
class Main extends Component {



    constructor(props) {

        super(props);

        this.state = {

            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            movies: MOVIES

        };

    }



    



    render() {
        const HomePage = () => {

            return (
                // <Home/>
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                movie={this.state.movies.filter((movie) => movie.featured)[0]}
                />

            );

        }
       
        return (

            <div>
               
                <Header />
                <Switch> 

              <Route path='/home' component={HomePage} /> 
              <Route exact path='/aboutme' component={Us} />
              <Route path= '/menu' element
/> */
              <Redirect to="/home" /> 

          </Switch>
                <Footer />
            </div>

        );

    }

}



export default Main;