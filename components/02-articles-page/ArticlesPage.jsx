import React, { Component } from 'react';
import data from '../../config/kcContent.json';
import FeaturedArticlesPageCard from './featured-article-card/FeaturedArticlesPageCard';
import ArticlesPageCard from './article-cards/ArticlesPageCards';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Subscribe from '../subscribe/Subscribe';
import TagsCar from '../tags-car/TagsCar';
import MoreArticlesBtn from '../more-articles-btn/MoreArticlesBtn';
import MediaQuery from 'react-responsive';

class ArticlesPage extends Component {

  state = {
    articleContent: null
  }

  componentDidMount() {
    if (data) {
      this.setState({
        articleContent: data.articleContent,
        tagsCarContent: data.tagsCarContent
      }) 
    }
  }

  renderRightArrowWhite = () => {
    return (<svg className="white-right-arrow-icon" viewBox="0 0 20 20">
      <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"/>
      </svg>);
  }

  render() {

    const { articleContent, tagsCarContent } = this.state;

    if (!articleContent) return (<div>loading</div>)

    return (
      <div className="all-wrap-container">

        <Header {...data} />

          <div className="articles-page-wrap">

            <h1 className="articles-page-title">Articles</h1>
            
            <div className="articles-page-featured-articles">
              <FeaturedArticlesPageCard key={articleContent[0].title} {...articleContent[0]} />
              <FeaturedArticlesPageCard key={articleContent[1].title} {...articleContent[1]} />
            </div>

            <TagsCar tagsCarContent={tagsCarContent}/>

            <div className="articles-page-article-container">

              <div className="articles-page-subtitle">Recent articles</div>
              
              <div className="articles-page-articleGrid">
              
                <MediaQuery maxWidth={1224}>
                  { articleContent.map( (article, idx)=> {
                      if ( idx > 0 && idx < 7 ) {
                        return (
                          <ArticlesPageCard key={article.title} {...article} />
                        )
                      }
                    return null;
                    })
                  }
                </MediaQuery>
              
                <MediaQuery minWidth={1224}>
                  { articleContent.map( (article, idx)=> {
                      if ( idx > 1 && idx < 10 ) {
                        return (
                          <ArticlesPageCard key={article.title} {...article} />
                        )
                      }
                    return null;
                    })
                  }
                </MediaQuery>

              </div>

              <MoreArticlesBtn />

            </div>

            <Subscribe />

          </div>

        <Footer />

      </div>

    );
  }
}

export default ArticlesPage;