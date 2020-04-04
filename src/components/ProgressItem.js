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
        var progressItemClass = "progress-item"
        if(this.props.status){
            progressItemClass = "progress-item-selected"
        }
        return(
            <label class={progressItemClass}>{this.state.name}
                <input type="checkbox" onClick={this.state.handleClick}></input>
            </label>
        )
    }

}

export default ProgressItem