import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      
      <section id="contact">
      <ScrollAnimation animateIn="fadeIn" duration={2} delay={1}>
        <div className='container'>
          <h3><a href = "mailto: joseph.p.attwood@gmail.com">Contact me!</a></h3>
        </div>
        </ScrollAnimation>
       </section>
        );
  }
}
