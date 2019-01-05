import React, { Component } from 'react';
import data from '../../config/kcContent.json';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Construction from '../00-construction/Construction';
// import MediaQuery from 'react-responsive';

class TagsPage extends Component {

  render() {

    // const { articleContent, tagsCarContent, icons } = data;

    return (
      <div className="all-wrap-container">

        <Header {...data} />

          <div className="tags-page-container">

            <h1 className='tags-page-title'>Tags</h1>

              <Construction />

              <div className="dropdown-container">
                <li>
                  <ul><button href="/">Option 1</button></ul>
                  <ul><button href="/">Option 2</button></ul>
                  <ul><button href="/">Option 3</button></ul>
                  <ul><button href="/">Option 4</button></ul>
                </li>

              </div>

          </div>

        <Footer />

      </div>


    );
  }
}

export default TagsPage;