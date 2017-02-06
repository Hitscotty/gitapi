import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render(){

    let projectItems;
    if(this.props.project){
      projectItems = this.props.project.map(repo => {
        console.log(repo); // for debugging
        return (
          <ProjectItem key={repo.id} repos={repo} />
        );
      })
    }

    return (
      <section className="wrapper style5">
        <center><h4> Projects </h4></center>
        <div className="table-wrapper">
          <table className="icons">
            <thead>
              <tr>
                <th>Project</th>
                <th>Description</th>
                <th>GitHub</th>
              </tr>
            </thead>

            {projectItems}

          </table>
        </div>
      </section>
    );

  }
}

Projects.PropTypes = {
  project: React.PropTypes.Array
}

export default Projects;
