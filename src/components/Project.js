import React from 'react'
import Progressbar from '../components/Progressbar'

class Project extends React.Component{

    render(){
        return(
            <div class="project-card">
                <h2>My Project - 4827 West 9th Avenue, Vancouver</h2>
                <p>Timeline</p>
                <Progressbar 
                
                    percentage={0} 
                    statusPlumbing={false}
                    statusFloorRemoval={false}
                    statusFloorInstallation={false}
                    statusPainting={false}
                />
            </div>
        );
    }
}

export default Project