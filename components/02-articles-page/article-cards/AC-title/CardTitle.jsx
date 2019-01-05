import React, { Component } from 'react';

class CardTitle extends Component {

    // longTitle = () => {
    //     if (title.length > 5) {
    //         return font-size
    //     }
    // }

  render() {

    const { title, articleLink } = this.props;

    return (

        <h2 className="articles-page-card-title">
            <a href={ `/article/${articleLink}` }>
                { title }
            </a>
        </h2>

    );
  }
}

export default CardTitle;