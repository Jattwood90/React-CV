import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      
      <section id="contact">
        <div className='container'>
              <p>
                <a href="mailto:joedevattwood@gmail.com"><img src='images/email.png'/></a>
              </p>
          <br/>
          <br/>
        </div>
       </section>
        );
  }
}
