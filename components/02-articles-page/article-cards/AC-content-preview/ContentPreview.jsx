import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class ContentPreview extends Component {

    contentPreview = () => {
        const { content } = this.props;
        return content[0];
      }

  render() {

    const { contentDetail} = this.props;


    return (
        <React.Fragment>

            <MediaQuery minWidth={1225}>

                <div className="articles-page-card-text-block">
                    <p>{ this.contentPreview() }</p>
                </div>

            </MediaQuery>


            <MediaQuery minWidth={768} maxWidth={1224}>

                <div className="articles-page-card-text-block">
                    <p>{ contentDetail }</p>
                </div>

            </MediaQuery>

            <MediaQuery minWidth={377} maxWidth={767}>

               <div className="articles-page-card-text-block">
                    <p>{ contentDetail }</p>
                </div>

            </MediaQuery>

        </React.Fragment>

    );
  }
}

export default ContentPreview;