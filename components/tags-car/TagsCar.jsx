import React, { Component } from 'react';

class TagsCar extends Component {

    renderRightArrow = () => {
        return (<svg height="12px" viewBox="0 0 20 20">
          <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"/>
          </svg>);
    }

  render() {

    const { tagCar1, tagCar2, tagCar3, tagCar4, tagCar5, tagCar6,
        tagCar1_details, tagCar2_details, tagCar3_details, tagCar4_details, tagCar5_details, tagCar6_details,
        tagCar1_link, tagCar2_link, tagCar3_link, tagCar4_link, tagCar5_link, tagCar6_link } = this.props.tagsCarContent;

    return (
        <React.Fragment>
                <div className="tagCarousel">

                    <div className="tag-car-title">
                        <div>Popular Tags</div>
                        <a href="/tags" >
                            More { this.renderRightArrow() }
                        </a>
                    </div>

                    <div className="tag-car-container">

                        <a  className="tag-car-link" href={`/tags/${tagCar1_link}`}>

                            <p>{ tagCar1 }</p>
                            { this.renderRightArrow() }
                            <p>{ tagCar1_details }</p>

                        </a>

                        <a  className="tag-car-link" href={`/tags/${tagCar2_link}`}>

                            <p>{ tagCar2 }</p>
                            { this.renderRightArrow() }
                            <p>{ tagCar2_details }</p>

                        </a>
                        <a  className="tag-car-link" href={`/tags/${tagCar3_link}`}>

                            <p>{ tagCar3 }</p>
                            { this.renderRightArrow() }
                            <p>{ tagCar3_details }</p>

                        </a>
                        <a  className="tag-car-link" href={`/tags/${tagCar4_link}`}>

                            <p>{ tagCar4 }</p>
                            { this.renderRightArrow() }
                            <p>{ tagCar4_details }</p>

                        </a>
                        <a  className="tag-car-link" href={`/tags/${tagCar5_link}`}>

                            <p>{ tagCar5 }</p>
                            { this.renderRightArrow() }
                            <p>{ tagCar5_details }</p>

                        </a>
                        <a  className="tag-car-link" href={`/tags/${tagCar6_link}`}>

                            <p>{ tagCar6 }</p>
                            { this.renderRightArrow() }
                            <p>{ tagCar6_details }</p>

                        </a>
                    </div>

                </div>

        </React.Fragment>
    );
  }
}

export default TagsCar;
