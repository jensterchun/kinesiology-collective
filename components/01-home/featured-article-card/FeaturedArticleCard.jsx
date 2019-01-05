import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import ArticleTags from '../../article-tags/ArticleTags';
import FeaturedArticleCardImg from './FAC-img/featuredArticleCardImg';
import FeaturedArticleCardHeader from './FAC-header/FeaturedArticleCardHeader';
import ContentPreview from './FAC-content-preview/ContentPreview';
import TagIcon from '../../tag-icon/TagIcon';
import data from '../../../config/kcContent.json';
import MoreLink from './FAC-more-link/MoreLink';

class FeaturedArticleCard extends Component {

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

  render() {

    return (

        <React.Fragment>

            <MediaQuery minWidth={768}>

                <article className="featured-article-card-container">

                    <span>
                        <FeaturedArticleCardImg {...this.props} />
                        <div className="featured-article-card-tags">
                            <TagIcon />
                            <ArticleTags {...this.props} />
                        </div>
                    </span>

                    <div>
                        <FeaturedArticleCardHeader {...this.props} />
                        <ContentPreview {...this.props} />
                        <MoreLink {...this.props} />
                    </div>

                </article>

            </MediaQuery>


            <MediaQuery maxWidth={767}>

                <article className="featured-article-card-container">

                    <FeaturedArticleCardImg {...this.props} />
                    
                    <div className="featured-article-card-content">

                        <FeaturedArticleCardHeader {...this.props} />
                        <ContentPreview {...this.props} />
                        <MoreLink {...this.props} />
                        
                        <div className="featured-article-card-tags">
                            <TagIcon />
                            <ArticleTags {...this.props} />
                        </div>

                    </div>

                </article>

            </MediaQuery>

        </React.Fragment>
    );
  }
}

export default FeaturedArticleCard;
