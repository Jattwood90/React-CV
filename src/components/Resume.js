import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
      	<h1>My Skillset</h1>
	       <ul className="resumeGrid">
				<li><img src='images/html.png'/></li>
				<li><img src="images/css.jpg"/></li>
				<li><img src="images/python.jpeg"/></li>
				<li><img src="images/react.png"/></li>
				<li><img src="images/javascript.png"/></li>
	        </ul> 
      </section>
    );
  }
}