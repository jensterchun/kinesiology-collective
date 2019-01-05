import React, { Component } from 'react';

class ArticleCardsHeader extends Component {

  renderRightArrow = () => {
    return (<svg height="12px" viewBox="0 0 20 20">
      <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"/>
      </svg>);
  }

  render() {

    return (
      <div className="home-article-card-header">

        <div>Recents</div>
        <a href="/articles">More { this.renderRightArrow() }</a>
        
      </div>
    );
  }
}

export default ArticleCardsHeader;