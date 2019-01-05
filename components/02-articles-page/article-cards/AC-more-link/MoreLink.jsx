import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class MoreLink extends Component {

  render() {

    const { articleLink } = this.props;


    return (
        <MediaQuery minWidth={768} >

            <p className="more-link-container">
                <a href={ `/article/${articleLink}` } >
                    (more...)
                </a>
            </p>
            
        </MediaQuery>
    );
  }
}

export default MoreLink;