import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class Header extends Component {

  render() {

    const { title, articleLink, authorLink, author, date, shortDate } = this.props;

    return (

        <header className="article-card-header">

            <h2 className="article-card-title">
                    <a href={ `/article/${articleLink}` }>
                        { title }
                    </a>
            </h2>
            <div className="article-card-time-author">

                <MediaQuery minWidth={768} >
                    <time>{ date }</time>
                </MediaQuery>
                <MediaQuery maxWidth={767}>
                    <time>{ shortDate }</time>
                </MediaQuery>

                <span> by <a href={ `/authors/${authorLink}` }>{ author }</a></span>
            </div>

        </header>

    );
  }
}

export default Header;