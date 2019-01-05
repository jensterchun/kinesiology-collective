import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class CardImg extends Component {
    

  render() {

    const { articleLink, image, imagePort, imageSquare, alt } = this.props;

    return (
        <React.Fragment>

            <MediaQuery minWidth={1625}>
                    <a className="articles-page-img" href={ `/article/${articleLink}` }>
                        <img className="lazyload" data-src={ imagePort } alt={ alt } width="100%"/>
                    </a>
            </MediaQuery>

            <MediaQuery minWidth={1225} maxWidth={1624}>
                    <a className="articles-page-img" href={ `/article/${articleLink}` }>
                        <img className="lazyload" data-src={ image } alt={ alt } width="100%"/>
                    </a>
            </MediaQuery>

            <MediaQuery minWidth={377} maxWidth={1224}>
                    <a className="articles-page-img" href={ `/article/${articleLink}` }>
                        <img className="lazyload" data-src={ imageSquare } alt={ alt } width="100%"/>
                    </a>
            </MediaQuery>

        </React.Fragment>

    );
  }
}

export default CardImg;