import React from 'react';
// import React, { Component } from 'react';

function ArticleCardsImg(props) {

  const { articleLink, image, alt } = props;
  
  return (
    <a href={ `/article/${articleLink}` }>
      <img className="lazyload" data-src={ image } alt={ alt } width="100%"/>
    </a>)

}

// class ArticleCardsImg extends Component {

//   render() {

//     const { articleLink, imageSmall, alt } = this.props;
//     return (
//         <a href={ `/article/${articleLink}` }>
//             <img src={ imageSmall } alt={ alt } width="100%"/>
//         </a>
//     );
//   }
// }

export default ArticleCardsImg;