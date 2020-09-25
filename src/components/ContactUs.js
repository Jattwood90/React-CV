import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      
      <section id="contact">
      <ScrollAnimation animateIn="fadeIn" duration={2} delay={1}>
        <div className='container'>
            <form id="contact" action="" method="post">
              <h3>Contact Me</h3>
              <fieldset>
                <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
              </fieldset>
              <fieldset>
                <input placeholder="Your Email Address" type="email" tabindex="2" required/>
              </fieldset>
              <fieldset>
                <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
              </fieldset>
              <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
              </fieldset>
          </form>
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