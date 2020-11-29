import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works</h1>
          <ScrollAnimation animateIn="fadeIn" duration={2} delay={1}>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {
              resumeData.portfolio && resumeData.portfolio.map((item)=>{
                return(
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <img src={`${item.imgurl}`} className="port-img" alt=''/>
                          <div className="portfolio-item-meta">
                            <br/>
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                              <ul>
                                <li src={item.icon}>
                                    <a target="_blank" href={item.link} ><i className={item.className}></i></a>
                                </li>
                              </ul>
                          </div>
                    </div>
                  </div>
                )
              })
            }
            </div>
          </ScrollAnimation>
          </div>
        </div>
  </section>
        );
  }
}