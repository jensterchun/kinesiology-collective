import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class FeaturedArticleCardImg extends Component {

  render() {

    const { articleLink, image, imageSmall, alt } = this.props;

    return (
        <React.Fragment>
            
            <MediaQuery minWidth={768}>
                <a href={ `/article/${articleLink}` }>
                    <img src={ imageSmall } alt={ alt } width="100%"/>
                </a>
            </MediaQuery>

            <MediaQuery maxWidth={767}>
                <a href={ `/article/${articleLink}` }>
                    <img src={ image } alt={ alt } width="100%"/>
                </a>
            </MediaQuery>

        </React.Fragment>
    );
  }
}

export default FeaturedArticleCardImg;
