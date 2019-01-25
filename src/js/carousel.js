export default class carouselClass {
  constructor(items) {
    this.slides = items;
    this.visibleSlide = 0;
  }
}

/* slide right */
carouselClass.prototype.slideRight = function slideRight() {
  let slidesLength = this.slides.length;
  if (this.visibleSlide + 1 > slidesLength - 1) {
    this.visibleSlide = 0;
  } else {
    this.visibleSlide += 1;
  }
  return this;
}; //end of slideRight prototype

/* slide left */
carouselClass.prototype.slideLeft = function slideLeft() {
  let slidesLength = this.slides.length;
  if (this.visibleSlide - 1 < 0) {
    this.visibleSlide = slidesLength - 1;
  } else {
    this.visibleSlide -= 1;
  }
  return this;
}; //end of slideLeft prototype

/* go to slide */
carouselClass.prototype.goToSlide = function goToSlide(selection) {
  this.visibleSlide = selection;
  return this;
}; //end of goToSlide prototype
