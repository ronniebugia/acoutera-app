import React from 'react';
import ProgressItem from '../components/ProgressItem'


class Progressbar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          percentage: this.props.percentage,
          statusPlumbing: this.props.statusPlumbing,
          statusFloorRemoval: this.props.statusFloorRemoval,
          statusFloorInstallation: this.props.statusFloorInstallation,
          statusPainting: this.props.statusPainting
        };
    }

    handleClick(percent, item){
        switch(item){
            case "Plumbing":
               if (this.state.statusPlumbing){
                    this.setState((prevState, props) => {
                        return {percentage: prevState.percentage - percent};
                    })
               }else{
                    this.setState((prevState, props) => {
                        return {percentage: prevState.percentage + percent};
                    })
               }
               this.setState((prevState, props) => {
                    return {statusPlumbing: !prevState.statusPlumbing};
                })
                break;
            case "Floor Removal":
                if (this.state.statusFloorRemoval){
                    this.setState((prevState, props) => {
                        return {percentage: prevState.percentage - percent};
                    })
               }else{
                    this.setState((prevState, props) => {
                        return {percentage: prevState.percentage + percent};
                    })
               }
               this.setState((prevState, props) => {
                    return {statusFloorRemoval: !prevState.statusFloorRemoval};
                })
                break;
            case "Floor Installation":
                if (this.state.statusFloorInstallation){
                    this.setState((prevState, props) => {
                        return {percentage: prevState.percentage - percent};
                    })
                }else{
                    this.setState((prevState, props) => {
                        return {percentage: prevState.percentage + percent};
                    })
                }
                this.setState((prevState, props) => {
                    return {statusFloorInstallation: !prevState.statusFloorInstallation};
                })
                break;
            case "Painting":
                if (this.state.statusPainting){
                    this.setState((prevState, props) => {
                        return {percentage: prevState.percentage - percent};
                    })
                }else{
                    this.setState((prevState, props) => {
                        return {percentage: prevState.percentage + percent};
                    })
                }
                this.setState((prevState, props) => {
                    return {statusPainting: !prevState.statusPainting};
                })
                break;
        }
        return(true)
    }

    render(){
        return(
            <div>
                <div class="progress-bar">
                    <div
                        class="progress-bar-fill" 
                        style={{width: (this.state.percentage == 0 ? 5 : this.state.percentage) + '%'}} 
                    >
                        <p>{this.state.percentage}%</p>
                    </div>
                </div>

                <ProgressItem 
                    handleClick={() => this.handleClick(28, "Plumbing")} 
                    name={"Plumbing (2 Days)"}
                    status={false}
                />

                <ProgressItem 
                    handleClick={() => this.handleClick(22, "Floor Removal")} 
                    name={"Floor Removal (1 Day)"}
                    status={false}
                />

                <ProgressItem 
                    handleClick={() => this.handleClick(30, "Floor Installation")} 
                    name={"Floor Installation (2 Days)"}
                    status={false}
                />
                
                <ProgressItem 
                    handleClick={() => this.handleClick(20, "Painting")} 
                    name={"Painting (2 Days)"}
                    status={false}
                />
            </div>
        );
    }
}

export default Progressbar