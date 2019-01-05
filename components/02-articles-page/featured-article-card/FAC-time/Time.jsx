import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class Time extends Component {

  render() {

    const { date, shortDate } = this.props;

    return (
        <React.Fragment>

            <MediaQuery minWidth={768}>

                <time>{ date }</time>

            </MediaQuery>

            <MediaQuery maxWidth={767}>

                <time>{ shortDate }</time>

            </MediaQuery>

        </React.Fragment>

    );
  }
}

export default Time;