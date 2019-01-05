import React, { Component } from 'react';
import '../../App.scss';
import data from '../../config/kcContent.json';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import FeaturedArticleCard from './featured-article-card/FeaturedArticleCard';
import ArticleCardsHeader from './article-cards-header/ArticleCardsHeader';
import ArticleCards from './article-cards/ArticleCards';
import Subscribe from '../subscribe/Subscribe';
import MediaQuery from 'react-responsive';
import FeaturedNote from '../featured-note/FeaturedNote';

class Home extends Component {

  state = {
    articleContent: null
  }

  componentDidMount() {
    if (data) {
      this.setState({
        articleContent: data.articleContent
      }) 
    }
  }

  renderRightArrow = () => {
    return (<svg height="12px" viewBox="0 0 20 20">
      <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"/>
      </svg>);
  }

  render() {

    const { articleContent } = this.state;

    if (articleContent === null ) return <div className="home-loading">loading...</div> 
     return (
      <div className="all-wrap-container">

        <Header/>

          <div className="home-body">

            <div className="featured-article-card">
            
            <FeaturedArticleCard key={articleContent[0].title} {...articleContent[0]} />

            </div>

            <div className="featured-note-container">
              <FeaturedNote />
            </div>

            <ArticleCardsHeader />

            <div className="articleGrid">

              <MediaQuery maxWidth={1225}>
                { articleContent.map( (article, idx)=> {
                    if ( idx > 0 && idx < 7 ) {
                      return (
                        <ArticleCards key={article.title} {...article} />
                      )
                    }
                  return null;
                  })
                }
              </MediaQuery>

              <MediaQuery minWidth={1224}>
                { articleContent.map( (article, idx)=> {
                    if ( idx > 0 && idx < 10 ) {
                      return (
                        <ArticleCards key={article.title} {...article} />
                      )
                    }
                  return null;
                  })
                }
              </MediaQuery>
              
            </div>

            <div className="home-more-articles-link">
              <a href="/articles">More { this.renderRightArrow() }</a>
            </div>
            
            <div className="home-subscribe">
              <Subscribe />
            </div>

            <div className="home-resources">
                <h2>Resources</h2>
                *insert really cool resource*
            </div>

            <div className="home-authors">
              <h2>Featured Authors</h2>
                *insert really cool authors*
            </div>

          </div>

        <Footer />

      </div>
    );
  }
}

export default Home;