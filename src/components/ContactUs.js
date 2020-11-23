import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      
      <section id="contact">
        <div className='container'>
          <a href = "mailto: joseph.p.attwood@gmail.com">Contact me!</a>
        </div>
       </section>
        );
  }
}
