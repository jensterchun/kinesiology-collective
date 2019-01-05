import React, { Component } from 'react';
import data from '../../config/kcContent.json';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Construction from '../00-construction/Construction.jsx';
// import MediaQuery from 'react-responsive';

class SupportPage extends Component {

  

  render() {

    // const { articleContent, tagsCarContent, icons } = data;

    return (
      <div className="all-wrap-container">

        <Header {...data} />

        <div className="support-container">

          <h1 className="support-title">Support us</h1>




          <Construction />
          
        </div>

        <Footer />

      </div>

    );
  }
}

export default SupportPage;