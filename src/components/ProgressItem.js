import React from 'react';

class ProgressItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            status: this.props.status,
            name: this.props.name,
            handleClick: this.props.handleClick,
            days: this.props.days
        };
    }

    render(){
        var progressItemClass = "progress-item"
        if(this.props.status){
            progressItemClass = "progress-item selected"
        }
        return(

            <label className={progressItemClass}>
                {this.state.days === 1 ? (
                    <p>{this.state.name + " (" + this.state.days + " Day)"}</p>
                ) : (
                    <p>{this.state.name + " (" + this.state.days + " Days)"}</p>
                )}
                <input type="checkbox" onClick={this.state.handleClick}></input>
                <span className="progress-check"></span>
            </label>
        )
    }

}

export default ProgressItem