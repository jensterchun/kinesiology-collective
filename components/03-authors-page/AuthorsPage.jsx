import React, { Component } from 'react';
import data from '../../config/kcContent.json';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Construction from '../00-construction/Construction.jsx';
// import MediaQuery from 'react-responsive';

class AuthorsPage extends Component {

  render() {

    // const { articleContent, tagsCarContent, icons } = data;

    return (

      <div className="all-wrap-container">

        <Header {...data} />

          <div className="author-page-container">
            <h1 className="author-page-title">Authors</h1>

            <Construction />

          </div>

        <Footer />

      </div>

    );
  }
}

export default AuthorsPage;