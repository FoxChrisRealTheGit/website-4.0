import React from "react";

/* import Carousels */
import WebDesignCarousel from "./portfolio/webDesign/webDesignCarousel";
import GraphicDesignCarousel from "./portfolio/graphicDesign/graphicDesignCarousel";
import OpenSourceCarousel from "./portfolio/openSource/openSourceCarousel";
import PublicationCarousel from "./portfolio/publications/publicationCarousel";

/* import css */
import "../../css/link.css";
export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      web: true,
      graphic: false,
      open: false,
      publication: false
    };
    this.onHandleChange = this.onHandleChange.bind(this);
  }
  onHandleChange(num) {
    switch (num) {
      case 0:
        return this.setState({
          web: true,
          graphic: false,
          open: false,
          publication: false
        });
      case 1:
        return this.setState({
          web: false,
          graphic: true,
          open: false,
          publication: false
        });
      case 2:
        return this.setState({
          web: false,
          graphic: false,
          open: true,
          publication: false
        });
      case 3:
        return this.setState({
          web: false,
          graphic: false,
          open: false,
          publication: true
        });
      default:
        return this.setState({
          web: true,
          graphic: false,
          open: false,
          publication: false
        });
    }
  }
  render() {
    return (
      <div className="section section--portfolio">
        <div className="section section--w-80 section--h-100">
          <h5
            className={`link ${this.state.web && "link-active"}`}
            onClick={() => this.onHandleChange(0)}
          >
            Web Development
          </h5>
          <h5
            className={`link ${this.state.graphic && "link-active"}`}
            onClick={() => this.onHandleChange(1)}
          >
            Graphic Design
          </h5>
          <h5
            className={`link ${this.state.open && "link-active"}`}
            onClick={() => this.onHandleChange(2)}
          >
            Open Source Projects
          </h5>
          <h5
            className={`link ${this.state.publication && "link-active"}`}
            onClick={() => this.onHandleChange(3)}
          >
            Publications
          </h5>
        </div>
        {this.state.web && <WebDesignCarousel />}
        {this.state.graphic && <GraphicDesignCarousel />}
        {this.state.open && <OpenSourceCarousel />}
        {this.state.publication && <PublicationCarousel />}
      </div>
    );
  }
}
