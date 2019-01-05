import React, { Component } from 'react';
import data from '../../config/kcContent.json';
import Footer from '../footer/Footer';
import Header from '../header/Header';

class ThanksPage extends Component {

  render() {
  
    return (
      <div className="all-wrap-container">

        <Header {...data} />

          <div className="thanks-page-container">

            <h2>Thank You</h2>

            <div className="thanks-page-h3">
              <h3>Your support means the world to us.</h3>
            </div>

            <div>
            </div>

          </div>

        <Footer />

      </div>

    );
  }
}

export default ThanksPage;