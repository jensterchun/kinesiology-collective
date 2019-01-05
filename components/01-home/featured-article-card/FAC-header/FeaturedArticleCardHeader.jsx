import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class FeaturedArticleCardHeader extends Component {

  render() {

    const { title, articleLink, authorLink, author, date, shortDate} = this.props;

    return (
        <div>

            <header className="featured-article-card-header">
                <h2 className="featured-article-card-title">
                    <a href={ `/article/${articleLink}` }>
                        { title }
                    </a>
                </h2>
                <div className="featured-article-card-time-author">

                    <MediaQuery minWidth={768}>
                        <time>{ date }</time>
                    </MediaQuery>
                    
                    <MediaQuery maxWidth={767}>
                        <time>{ shortDate }</time>
                    </MediaQuery>

                    <span> by <a href={ `/authors/${authorLink}` }>{ author }</a></span>
                </div>
            </header>

        </div>
    );
  }
}

export default FeaturedArticleCardHeader;
