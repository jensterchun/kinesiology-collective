import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArticleTags extends Component {
  static propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string)
  }

  renderTagStuff = (tagalog, index, isLast) => {

    const { tags } = this.props;

    return (
      <span key={ tagalog+index }>

        <a href={ `/tags/${tags[index]}` }>{ tagalog }</a>
        { isLast ? '' : ' - ' }
      </span>
    )
  }
  // mongodb
  render() {

    const { tags } = this.props;
    
    return tags.length > 0 ? (
      <React.Fragment>
        {tags.map((tag, idx) => this.renderTagStuff(tag, idx, idx === tags.length - 1))}
      </React.Fragment>
    ) : null;
  }
}

export default ArticleTags;