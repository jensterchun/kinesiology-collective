import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class ContentPreview extends Component {

  contentPreview = () => {
    const { content } = this.props;
    return content[0];
  }

  render() {

    const { contentDetail } = this.props;

    return (

        <div className="articles-page-featured-card-text-block">
            <MediaQuery minWidth={768}>
                <p>{ this.contentPreview() }</p>
            </MediaQuery>

            <MediaQuery maxWidth={767}>
                <p>{ contentDetail }</p>
            </MediaQuery>
        </div>

    );
  }
}

export default ContentPreview;