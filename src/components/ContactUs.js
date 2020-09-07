import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
      <h1>contact me at: </h1>
        <a className="emailLink" href="mailto:joedevattwood@gmail.com">joedevattwood@gmail.com</a>
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
        </section>
        );
  }
}