import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class ContentPreview extends Component {

  contentPreview = () => {
    const { content } = this.props;
    return content[0];
  }

  contentPreview2 = () => {
    const { content } = this.props;
    return content[1];
  }

  render() {

    return (
        <React.Fragment>

            <MediaQuery minWidth={1225}>

                        <div className="featured-article-card-text-block">
                            <p>{ this.contentPreview() }</p>
                            <br/>
                            <p>{ this.contentPreview2() }</p>
                        </div>

            </MediaQuery>

            <MediaQuery minWidth={768} maxWidth={1224}>

                        <div className="featured-article-card-text-block">
                            <p>{ this.contentPreview() }</p>
                        </div>

            </MediaQuery>


            <MediaQuery maxWidth={767}>

                    <div className="featured-article-card-text-block">
                        <p>{ this.contentPreview() }</p>
                    </div>

            </MediaQuery>

        </ React.Fragment>
    );
  }
}

export default ContentPreview;
