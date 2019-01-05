import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Time from '../FAC-time/Time';
import ArticleTags from '../../../article-tags/ArticleTags';
import TagIcon from '../../../tag-icon/TagIcon';
import data from '../../../../config/kcContent.json';

class FeaturedArticlesPageImg extends Component {

  render() {

    const { articleLink, image, imagePort, imageSmall, alt } = this.props;

    return (

        <div className="featured-articles-page-img-container">

            <MediaQuery minWidth={1625}>
            
                <a href={ `/article/${articleLink}` }>
                    <img src={ imagePort } alt={ alt } width="100%"/>
                </a>

                <span className="img-time-stamp">
                    <Time {...this.props} />
                </span>
            </MediaQuery>

            <MediaQuery minWidth={768} maxWidth={1624}>
                <a href={ `/article/${articleLink}` }>
                    <img src={ image } alt={ alt } width="100%"/>
                </a>

                <span className="img-time-stamp">
                    <Time {...this.props} />
                </span>

                <span className="articles-page-featured-card-tags">
                    {/* Here figure out how to make the tags appear on hover SOLUTION CSS DROPDOWN*/}
                    <TagIcon {...data} />
                    <ArticleTags {...this.props} />
                </span>

            </MediaQuery>

            <MediaQuery maxWidth={767}>

                <a href={ `/article/${articleLink}` }>
                    <img src={ imageSmall } alt={ alt } width="100%"/>
                </a>

                <span className="img-time-stamp">
                    <Time {...this.props} />
                </span>

            </MediaQuery>

        </div>

    );
  }
}

export default FeaturedArticlesPageImg;