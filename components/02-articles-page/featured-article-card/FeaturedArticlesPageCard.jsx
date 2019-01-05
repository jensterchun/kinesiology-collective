import React, { Component } from 'react';
// import ArticleTags from '../../article-tags/ArticleTags';
import MediaQuery from 'react-responsive';
import FeaturedArticlesPageImg from './FAC-img/FeaturedArticlesPageImg';
// import TagIcon from '../../tag-icon/TagIcon';
import data from '../../../config/kcContent.json';
import MoreLink from './FAC-more-link/MoreLink';
import Header from './FAC-header/Header';
import ContentPreview from './FAC-content-preview/ContentPreview';
// import Time from './FAC-time/Time';
import Author from './FAC-author/Author';

class FeaturedArticlesPageCard extends Component {

  render() {



    return (
        <React.Fragment>

            <MediaQuery minWidth={1625}>

                <article className="articles-page-featured-card-container">
                    <div>
                        <FeaturedArticlesPageImg {...this.props} />
                    </div>
                    
                    <div className="articles-page-featured-card-content-container">
                        <div>
                            <header>
                                <Header {...this.props} />
                            </header>
                            <ContentPreview {...this.props} />
                            <MoreLink {...data} {...this.props} />
                        </div>
                        <div className="articles-page-featured-author">
                            <Author {...this.props}/>
                        </div>
                    </div>

                </article>

            </MediaQuery>

            <MediaQuery minWidth={1225} maxWidth={1624}>

                <article className="articles-page-featured-card-container">
                    <FeaturedArticlesPageImg {...this.props} />
                    <div className="articles-page-featured-card-content-container">
                        <div>
                            <header>
                                <Header {...this.props} />
                            </header>
                            <ContentPreview {...this.props} />
                        </div>
                        <div className="articles-page-featured-more-author">
                            <Author {...this.props}/>
                            <MoreLink {...data} {...this.props} />
                        </div>
                    </div>
                </article>

            </MediaQuery>

            <MediaQuery minWidth={768} maxWidth={1224}>

                <article className="articles-page-featured-card-container">
                    <FeaturedArticlesPageImg {...this.props} />
                    <div className="articles-page-featured-card-content-container">
                        <div>
                            <header>
                                <Header {...this.props} />
                            </header>
                            <ContentPreview {...this.props} />
                        </div>
                        <div className="articles-page-featured-more-author">
                            <Author {...this.props}/>
                            <MoreLink {...data} {...this.props} />
                        </div>
                    </div>
                </article>

            </MediaQuery>

            <MediaQuery maxWidth={767}>

                <article className="articles-page-featured-card-container">
                    <FeaturedArticlesPageImg {...this.props} />
                    <div className="articles-page-featured-card-content-container">
                        <div>
                            <header>
                                <Header {...this.props} />
                            </header>
                            <ContentPreview {...this.props} />
                        </div>
                        <div className="articles-page-featured-more-author">
                            <Author {...this.props}/>
                            <MoreLink {...data} {...this.props} />
                        </div>
                    </div>
                </article>

            </MediaQuery>

        </React.Fragment>

    );
  }
}

export default FeaturedArticlesPageCard;