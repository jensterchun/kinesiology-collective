import React, { Component } from 'react';

class MoreLink extends Component {

  render() {

    const { articleLink } = this.props;

    return (

        <p className="featured-article-card-more-link-container">
            <a href={ `/article/${articleLink}` } >
                (more...)
            </a>
        </p>

    );
  }
}

export default MoreLink;