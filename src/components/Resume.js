import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollAnimation from 'react-animate-on-scroll';

export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <ScrollAnimation animateIn="fadeIn" duration={2} delay={1}>
      	<h1>My Skillset</h1>
	       <ul className="resumeGrid">
    				<li><img src='images/html.png'/></li>
    				<li><img src="images/css.jpg"/></li>
    				<li><img src="images/python.png"/></li>
    				<li><img src="images/react.png"/></li>
    				<li><img src="images/javascript.png"/></li>
            <li><img src="images/aws.png"/></li>
            <li><img src="images/postgres.png"/></li>
	        </ul>
          </ScrollAnimation>
      </section>
    );
  }
}