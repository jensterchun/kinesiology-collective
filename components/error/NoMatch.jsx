import React, { Component } from 'react';
import data from '../../config/kcContent.json';
import Header from '../header/Header';

class NoMatch extends Component {

  render() {

    const { icons } = data;

    return (
      
        <div className="error-container all-wrap-container" >

          <Header icons={icons}/>

          <div className="error-wrap">

            <div className="error-title">
              <div className="error-header">
                <h1>404</h1>
              </div>
              <h2>page not found</h2>
            </div>

            <div className="error-content">
              <p>Hm, it looks like we have a problem</p>
              <p>The page you're looking for cannot be found</p>
              <br/>
              <p>We're still doing our best to make our website more user friendly!</p>
              <br/>
              <p>You can follow <a className="error-link" href="/">this link</a> to our homepage!</p>
            </div>

          </div>

        </div>
    );
  }
}

export default NoMatch;