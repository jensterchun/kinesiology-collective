import React, { Component } from 'react';
import data from '../../config/kcContent.json';
import Footer from '../footer/Footer';
import Header from '../header/Header';

class DeveloperPage extends Component {

  render() {
  
    return (
      <div className="all-wrap-container">

        <Header {...data} />

          <div className="developer-page-container">

            <h2>Developer</h2>

            <div className="developer-page-h3">
              <h3>Kinesiology Collective was created using React and SCSS by <a href="jychung.com">jychung.com</a>.</h3>
            </div>

            <div>
              <p>At the start of 2018 I chose to buckle down and learn web development and design. Since then I've built a few projects you can view in <a href="jychung.com">my portfolio</a>, and so far Kinesiology Collective is my best work to date. </p>
              <p></p>
            </div>

          </div>

        <Footer />

      </div>

    );
  }
}

export default DeveloperPage;