import React, { Component } from 'react';
import ArticleTags from '../../article-tags/ArticleTags';
import TagIcon from '../../tag-icon/TagIcon';
import data from '../../../config/kcContent.json';
import ArticleCardsImg from './AC-img/ArticleCardsImg';
import Header from './AC-header/Header';
import MoreLink from './AC-more-link/MoreLink';
import ContentPreview from './AC-content-preview/ContentPreview';

class ArticleCards extends Component {

  render() {

    return (

        <article className="article-card-container">
            <div>
                <ArticleCardsImg {...this.props} />
                <Header {...this.props} />
                <ContentPreview {...this.props} />

            </div>

            <div>
                <MoreLink {...this.props} />
                <div className="article-card-tags">
                    <TagIcon {...data} />
                    <ArticleTags {...this.props} />
                </div>
            </div>

        </article>

    );
  }
}

export default ArticleCards;
