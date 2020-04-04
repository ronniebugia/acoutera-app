import React from 'react'

class Sidebar extends React.Component{

    render(){
        return(
            <div class="sidebar">
                <div class="sidebar-profile">
                    <img src={require('../images/profile-pic.jpg')}  alt="Profile Pic" class="sidebar-pic"></img>
                    <h2>Kanye West</h2>
                    <p>Homeowner</p>
                </div>

                <div class="sidebar-nav">
                    <a href="#">Messages</a>
                    <a href="#">Contractors</a>
                    <a href="#">Settings</a>
                </div>
            </div>
        );
    }
}

export default Sidebar