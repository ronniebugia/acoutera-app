import React from 'react'

class Sidebar extends React.Component{

    render(){
        return(
            <div className="sidebar">
                <div className="sidebar-profile">
                    <img src={require('../images/profile-pic.jpg')}  alt="Profile Pic" className="sidebar-pic"></img>
                    <h2>Kanye West</h2>
                    <p>Homeowner</p>
                </div>

                <div className="sidebar-nav">
                    <a href="#">Messages</a>
                    <a href="#">Contractors</a>
                    <a href="#">Settings</a>
                </div>
            </div>
        );
    }
}

export default Sidebar