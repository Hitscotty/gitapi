import React, { Component } from 'react';

class ProjectItem extends Component {
  render(){
    return (
      <div>
      <li>
      <strong className="biggers"> {this.props.repos.name} </strong>
      </li>
    </div>
    );
  }
}

ProjectItem.PropTypes = {
  repos: React.PropTypes.object
}

export default ProjectItem;
