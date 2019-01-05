import React, { Component } from 'react';

class Article extends Component {

  render() {
    return (
      <div>

        <article className="article-container">

          <div className="article-date">
              <time datetime="2018-08-19">August 19, 2018</time>
          </div>

          <div className="mega-header">
              <h1 className="article-title">
                  Our Goal
              </h1>
          </div>

          <img src="./img/matt-howard-223043-unsplash.jpg" alt="Sunrise landscape of a long and winding road" width="100%"/>
          
          <div className="article-author">Article by <a href="">The Kinesiology Collective Team</a></div>
          
          <div className="article-tags">
              <img src="./img/tag.svg" className="tag-icon" height="12px"/>
              <a href="">About</a>
          </div>
          
          <div className="article-content">
              <p className="article-paragraph">Hello there! We are a group of well-being enthusiasts who got degrees to learn more about the complexities of the human body. After years of client care we saw trends of preventable dysfunctions. We put our minds to work and realized the web was the best way to reach you. Our goal is to educate the public, so you can spend less time in a confining clinic and more time in a healthy body!</p>
          </div>

        </article>

      </div>
    );
  }
}

export default Article;