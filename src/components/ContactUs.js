import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      
      <section id="contact">
      <ScrollAnimation animateIn="fadeIn" duration={2} delay={1}>
        <div className='container'>
            
              <p>
                <a href="mailto:joedevattwood@gmail.com"><img src='images/email.png'/></a>
              </p>
          
        </div>
          <div className="row section-head">
            <div className="ten columns">
      </div>
      </div>
     
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">

              </div>
            </aside>
          </div>
        </ScrollAnimation>
        </section>
        );
  }
}