import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render(){

    let projectItems;
    if(this.props.project){
      projectItems = this.props.project.map(repo => {
        console.log(repo); // for debugging
        return (
          <ProjectItem key={repo.nam} repos={repo} />
        );
      })
    }

    return (
      <div>
        <h1> Projects Found </h1>
        <li>
            {projectItems}
        </li>
      </div>
    );

  }
}

Projects.PropTypes = {
  project: React.PropTypes.Array
}

export default Projects;
