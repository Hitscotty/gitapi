import React, { Component } from 'react';
import $ from 'jquery';
import Projects from './Projects';
import ProjectItem from './ProjectItem';
import styles from './test.css';
import css from './assets/css/style.css';
import sass from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const config = require('../../../config.js');

//import style from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ProjectComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  getProjects(lang){
    const auth = "?" + config.github.client_id + "&" + config.github.client_secret + "&";

    $.ajax({
      url: 'https://api.github.com/search/repositories' + auth + 'q=user:' + config.github.user + ' language:' + lang,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({projects: data.items}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div>

      <ul>

      <li><button onClick={this.getProjects.bind(this, "Haskell")}> Haskell </button></li>
      <li><button onClick={this.getProjects.bind(this, "Javascript")}> Javascript </button></li>
      <li><button onClick={this.getProjects.bind(this, "Java")}> Java </button></li>
      <li><button onClick={this.getProjects.bind(this, "Python")}> Python </button></li>
      <li><button onClick={this.getProjects.bind(this, "Css")}> Css </button></li>
      <li><button onClick={this.getProjects.bind(this, "html")}> html </button></li>
      <li><button onClick={this.getProjects.bind(this, "ruby")}> ruby </button></li>



      </ul>

      <Projects project={this.state.projects}/>

      </div>
    );
  }

}



export default ProjectComponent;
