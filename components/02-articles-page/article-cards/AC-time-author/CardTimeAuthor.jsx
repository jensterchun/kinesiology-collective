import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import CardTitle from '../AC-title/CardTitle';

class CardTimeAuthor extends Component {

  render() {

    const { authorLink, author, date, shortDate } = this.props;

    return (
        <React.Fragment>

            <MediaQuery minWidth={768}>

                <CardTitle {...this.props} />

                <div className="articles-page-card-time-author">
                    <time>{ date }</time>
                    <span> by <a href={ `/authors/${authorLink}` }>{ author }</a></span>
                </div>

            </MediaQuery>

            <MediaQuery maxWidth={767}>

                <div className="articles-page-card-time-author">
                    <time>{ shortDate }</time>
                    <span> by <a href={ `/authors/${authorLink}` }>{ author }</a></span>
                </div>

            </MediaQuery>

        </React.Fragment>

    );
  }
}

export default CardTimeAuthor;