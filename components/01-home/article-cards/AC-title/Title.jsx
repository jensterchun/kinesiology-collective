import React, { Component } from 'react';

class Header extends Component {

  render() {

    const { title, articleLink } = this.props;

    return (

        <h2 className="article-card-title">
            <a href={ `/article/${articleLink}` }>
                { title }
            </a>
        </h2>

    );
  }
}

export default Header;