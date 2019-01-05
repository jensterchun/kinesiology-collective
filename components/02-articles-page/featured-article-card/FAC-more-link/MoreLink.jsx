import React, { Component } from 'react';

class MoreLink extends Component {

  contentPreview = () => {
    const { content } = this.props;
    return content[0];
  }

  renderRightArrowBrandColor = () => {
    return (<svg className="brand-color-right-arrow-icon" viewBox="0 0 20 20">
      <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"/>
      </svg>);
  }

  render() {

    const { articleLink } = this.props;

    return (

        <p className="articles-page-featured-more-link-container">
            <a href={ `/article/${articleLink}` } >
                (more...)
            </a>
        </p>

    );
  }
}

export default MoreLink;