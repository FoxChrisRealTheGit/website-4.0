import React from "react";
import carouselClass from "../../../js/carousel";

import "../../../css/carousel.css";
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoSlide: false || props.autoSlide,
      arrows: false || props.arrows,
      loaded: false,
      carousel: {}
    };
    this.onSlideLeft = this.onSlideLeft.bind(this);
    this.onSlideRight = this.onSlideRight.bind(this);
    this.onGoTo = this.onGoTo.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  componentDidMount() {
    let carousel = new carouselClass(this.props.carousel);
    let timer;
    if (this.state.autoSlide || this.props.autoSlide) {
      timer = setInterval(() => {
        this.onSlideRight();
      }, 3000);
    }
    this.setState({
      timer: timer,
      carousel: carousel,
      loaded: true
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  onMouseOver() {
    clearInterval(this.state.timer);
  }

  onMouseLeave() {
    let timer;
    if (this.state.autoSlide || this.props.autoSlide) {
      timer = setInterval(() => {
        this.onSlideRight();
      }, 3000);
    }

    this.setState({ timer: timer });
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
      <div
        className="section section--column section--w-full"
        onMouseEnter={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
      >
       
        <div className="carousel">
         {this.state.arrows && (
          <div className="arrow arrow--left" onClick={this.onSlideLeft}>
            <i className="fas fa-caret-left" />
          </div>
        )}
        {this.state.arrows && (
          <div className="arrow arrow--right" onClick={this.onSlideRight}>
            <i className="fas fa-caret-right" />
          </div>
        )}
          {this.state.loaded && (
            <React.Fragment>
              <div className="carousel--item">
                {this.state.carousel.slides[this.state.carousel.visibleSlide]}
              </div>
            </React.Fragment>
          )}
        </div>
        <div className="section section--center">
          {this.state.loaded &&
            this.state.carousel.slides.map((x, i) => {
              return (
                <div
                  className={`carousel--circle ${this.state.carousel
                    .visibleSlide === i && "carousel--circle--active"}`}
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
