import React, { Component } from 'react';

class ProjectItem extends Component {
  render(){
    return (
             <tbody>
              <tr>
                <td>{this.props.repos.name}</td>
                <td>{this.props.repos.description}</td>
                <td><a href={this.props.repos.html_url} className="mega-octicon octicon-mark-github"><span className="label"></span></a></td>
              </tr>
            </tbody>
    );
  }
}

ProjectItem.PropTypes = {
  repos: React.PropTypes.object
}

export default ProjectItem;
