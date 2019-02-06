import React from "react";
import carouselClass from "../../js/carousel";

import "../../css/carousel.css";
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      carousel: {}
    };
    this.onSlideLeft = this.onSlideLeft.bind(this);
    this.onSlideRight = this.onSlideRight.bind(this);
    this.onGoTo = this.onGoTo.bind(this);
  }

  componentDidMount() {
    let carousel = new carouselClass(this.props.carousel);
    this.setState({
      carousel: carousel,
      loaded: true
    });
  }

  onSlideLeft() {
    let newCarousel = this.state.carousel.slideLeft();
    this.setState({
      carousel: newCarousel
    });
  }
  onSlideRight() {
    let newCarousel = this.state.carousel.slideRight();
    this.setState({
      carousel: newCarousel
    });
  }
  onGoTo(id) {
    let newCarousel = this.state.carousel.goToSlide(id);
    this.setState({
      carousel: newCarousel
    });
  }
  render() {
    return (
      <div className="section section--column section--w-full">
        <div className="carousel">
          {this.state.loaded && (
            <React.Fragment>
              <div className="arrow arrow--left" onClick={this.onSlideLeft}>
                <i className="fas fa-caret-left" />
              </div>

              <div className="carousel--item">
                {this.state.carousel.slides[this.state.carousel.visibleSlide]}
              </div>

              <div className="arrow arrow--right" onClick={this.onSlideRight}>
                <i className="fas fa-caret-right" />
              </div>
            </React.Fragment>
          )}
        </div>
        <div className="section section--center">
          {this.state.loaded &&
            this.state.carousel.slides.map((x, i) => {
              return (
                <div
                  className={`carousel--circle ${
                    this.state.carousel.visibleSlide === i
                      && "carousel--circle--active"
                      
                  }`}
                  onClick={() => this.onGoTo(i)}
                  key={x.type.name + i}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
