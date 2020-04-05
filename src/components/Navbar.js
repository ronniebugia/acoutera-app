import React from 'react'

class Navbar extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            mobileMenu: false
        };
    }

    showMenu(){
        var menu = this.state.mobileMenu;
        this.setState({mobileMenu: !menu})
        return(true)
    }

    render(){
        return(
            <div className="navbar row" id="navbar">
                <img src={require('../images/acoutera-logo.png')}  alt="Acoutera" className="logo"></img>
                <button className="navbar-mobile-icon" onClick={() => this.showMenu()}>
                    <i className="fa fa-bars"></i>
                </button>
                <div className={this.state.mobileMenu ? "responsive navbar-list" : "navbar-list"}>
                    <a href="/">My Dashboard</a>
                    <a href="/">Messages</a>
                    <a href="/">About Us</a>
                    <a href="/">Contact Us</a>
                </div>
            </div>
        );
    }
}

export default Navbar