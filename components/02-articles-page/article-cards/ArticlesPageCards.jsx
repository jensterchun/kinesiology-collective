import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
// import ArticleTags from '../../article-tags/ArticleTags';
import CardImg from './AC-img/CardImg';
import CardHeader from './AC-time-author/CardTimeAuthor';
import MoreLink from './AC-more-link/MoreLink';
import CardTitle from './AC-title/CardTitle';
// import TagIcon from '../../tag-icon/TagIcon';
// import data from '../../../config/kcContent.json';
import ContentPreview from './AC-content-preview/ContentPreview';
import CardTimeAuthor from './AC-time-author/CardTimeAuthor';

class ArticlesPageCard extends Component {

  render() {

    return (
        <React.Fragment>

            <MediaQuery minWidth={768} >
                    <article className="articles-page-card-container">

                        <div className="articles-page-img">
                            <CardImg {...this.props} />
                        </div>

                        <div className="articles-page-details">
                            <CardHeader {...this.props} />
                        </div>

                        <div className="articles-page-card-content">
                            <ContentPreview {...this.props} />
                            <MoreLink {...this.props} />
                        </div>

                    </article>
            </MediaQuery>

            <MediaQuery minWidth={526} maxWidth={767}>

                <article className="articles-page-card-container">

                    <CardImg {...this.props} />

                    <div className="articles-page-card-content">
                        <CardTitle {...this.props} />
                        <CardTimeAuthor {...this.props} />
                        <ContentPreview {...this.props} />
                    </div>

                </article>

            </MediaQuery>

            <MediaQuery minWidth={401} maxWidth={525}>

                <article className="articles-page-card-container">

                    <CardImg {...this.props} />
                    <CardTitle {...this.props} />

                    <div className="articles-page-card-content">
                        <CardTimeAuthor {...this.props} />
                        <ContentPreview {...this.props} />
                    </div>

                </article>

            </MediaQuery>

            <MediaQuery maxWidth={400}>

                <article className="articles-page-card-container">

                    <CardTitle {...this.props} />

                    <div className="articles-page-card-content">
                        <CardTimeAuthor {...this.props} />
                    </div>

                </article>

            </MediaQuery>

        </React.Fragment>

    );
  }
}

export default ArticlesPageCard;