import React from 'react';

class ProgressItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            status: this.props.status,
            name: this.props.name,
            handleClick: this.props.handleClick
        };
    }

    render(){
        return(
            <div class="progress-item">
                <input type="checkbox" class="project-button" onClick={this.state.handleClick}>
                </input>
                <label>{this.state.name}</label>
            </div>
        )
    }

}

export default ProgressItem