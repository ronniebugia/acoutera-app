import React from 'react';
import ProgressItem from '../components/ProgressItem'


class Progressbar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          percentage: this.props.percentage,
          todo: this.props.todo
        };
    }

    handleClick = (index) => {
        var newArray = this.state.todo.map((item, i) => {
          if (i === index) {
            var newTodo = Object.assign({}, item);
            newTodo.isChecked = !item.isChecked;
            return newTodo;
          } else {
            return item;
          }
        });

        var totaldays = 0;
        this.state.todo.forEach((item) => (totaldays += item.days));

        var daysChecked = 0;
        newArray.forEach((item) => item.isChecked ? (daysChecked += parseInt(item.days)) : daysChecked += 0);
        
        this.setState({ todo: newArray, percentage: 100 * (daysChecked / totaldays)});
    
        return true;
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            name: event.target.elements.itemName.value,
            isChecked: false,
            days: parseInt(event.target.elements.itemDays.value),
        };


        if(newItem.name === "" || isNaN(newItem.days) || newItem.days < 1){
            alert('Please submit a non-empty string and/or a valid number.')
            return true;
        }

        const newArray = [...this.state.todo, newItem];
        
        var totaldays = 0;
        newArray.forEach((item) => (totaldays += parseInt(item.days)));
        
        var daysChecked = 0;
        newArray.forEach((item) => item.isChecked ? (daysChecked += parseInt(item.days)) : daysChecked += 0);
        
        this.setState(
            {
                todo: newArray,
                percentage: 100 * (daysChecked / totaldays)
            },
            () => {document.getElementById("addItemForm").reset();}
        );

        
    };
    
    render(){
        return(
            <div>
                <div className="progress-bar">
                    <div
                        className="progress-bar-fill" 
                        style={{width: (this.state.percentage < 8 ? 8 : this.state.percentage) +'%'}} 
                    >
                        <p>{Math.round(this.state.percentage)}%</p>
                    </div>
                </div>
                <div className="progress-items">
                    {this.state.todo.map((item, i) =>  
                    <ProgressItem 
                        handleClick={() => this.handleClick(i)} 
                        key={item.name}
                        name={item.name}
                        days={item.days}
                        status={item.isChecked}
                    />)}
                </div>

                <div>
                    <form className="form-todo" id={"addItemForm"} onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="row">
                            <label>To Do Item</label>
                            <input name="itemName" type="text"/>
                        </div>
                        
                        <div className="row">
                            <label>Days to Complete Item</label>
                            <input name="itemDays" type="number"/>
                        </div>
                        <button>Add To Timeline</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Progressbar