import React from 'react'

class Navbar extends React.Component{

    render(){
        return(
            <div class="navbar">
                <img src={require('../images/acoutera-logo.png')}  alt="Acoutera" className="logo"></img>
                <div class="navbar-list">
                    <a href="#">My Dashboard</a>
                    <a href="#">Messages</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
        );
    }
}

export default Navbar