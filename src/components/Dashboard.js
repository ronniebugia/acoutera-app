import React from 'react'
import Project from '../components/Project'

class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          projects: [
            { address: "My Project - 4827 West 9th Avenue, Vancouver", initialized: true, todo: [
                { name: "Plumbing", isChecked: false, days: 2 },
                { name: "Floor Installation", isChecked: false, days: 1 },
                { name: "Floor Removal", isChecked: false, days: 2 },
                { name: "Painting", isChecked: false, days: 2 },
                ] },
          ],
        };
    }

    addNewProject = (event) => {
        event.preventDefault();
        const newProject = {
            address: event.target.elements.address.value,
            todo:[],
            initialized: false,
        };

        if(newProject.address === ""){
            alert('Please enter a non-empty string.')
            return true;
        }
        this.setState({ projects: [...this.state.projects, newProject] }, () => {
            document.getElementById("addProjectForm").reset();
        });
    };


    render(){
        return(
            <div className="dashboard">
                {this.state.projects.map((project) => (
                    <Project
                        key={project.address}
                        address={project.address}
                        initialized={project.initialized}
                        todo={project.todo}
                    />
                ))}


                <div className="form-dash">
                    <form className="form-dash" id="addProjectForm" onSubmit={(e) => this.addNewProject(e)}>
                        <h2>Create a New Project</h2>
                        <input name="address" type="text" placeholder="Enter Address Here"></input>
                        <button>+ New Project</button>
                    </form>
                </div>

            </div>

        );
    }
}

export default Dashboard