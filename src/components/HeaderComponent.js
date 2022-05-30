import React, { Component } from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';



import { Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';

import { NavLink } from 'react-router-dom';



class Header extends Component {

    constructor(props) {

        super(props);



        this.toggleNav = this.toggleNav.bind(this);

        this.state = {

            isNavOpen: false

        };

    }



    toggleNav() {

        this.setState({

            isNavOpen: !this.state.isNavOpen

        });

    }



    render() {

        return (

            <div>

                <Navbar dark expand="md">

                    <div className="d-flex container">

                        <NavbarToggler onClick={this.toggleNav} />

                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Welcome to my Website!' /></NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>

                            <Nav navbar>

                                <NavItem>

                                    <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>

                                </NavItem>

                                <NavItem>

                                    <NavLink className="nav-link" to='/aboutme'><span className="fa fa-info fa-lg"></span> AboutMe </NavLink>

                                </NavItem>

                                <NavItem>

                                    <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span>Gallery</NavLink>

                                </NavItem>
                                

                            </Nav>

                        </Collapse>

                    </div>

                </Navbar>

                <div class="jumbotron">

                    <div className="container">

                        <div className="row row-header">

                            <div className="col-12 col-sm-6">

                                <h1 class="display-12 fw-bold">Welcome to Kitibhum's Website!</h1>

                                <p class="col-md-8 fs-4">Super Idol的笑容 都没你的甜 八月正午的阳光 都没你耀眼 热爱105°C的你
滴滴清纯的蒸馏水。</p>

                            </div>

                        </div>

                    </div>

                </div>



            </div>

        );

    }

}

export default Header;
