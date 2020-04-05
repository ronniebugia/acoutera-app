import React from 'react'
import Progressbar from '../components/Progressbar'

class Project extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          address:this.props.address,
          todo:this.props.todo
        };
    }
    render(){
        return(
            <div className="project-card">
                <h2>{this.state.address}</h2>
                <p>Timeline</p>
                <Progressbar 
                    name={this.state.address}
                    todo={this.state.todo}
                />
            </div>
        );
    }
}

export default Project