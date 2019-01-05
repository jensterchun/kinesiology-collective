import React, { Component } from 'react';

class Author extends Component {

  render() {

    const { authorLink, author } = this.props;

    return (

        <div>
            <a href={ `/authors/${authorLink}` }>{ author }</a>
        </div>

    );
  }
}

export default Author;