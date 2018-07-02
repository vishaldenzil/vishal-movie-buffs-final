import React, { Component } from "react";
import "../CSS/Body.css";
import Carousel from "./Carousel.js";
import MovieGrid from "./MovieGrid.js";

class Body extends Component {
  constructor() {
    super();
    (this.upcoming = [
      "tt5095030",
      "tt4912910",
      "tt5220122",
      "tt5814060",
      "tt5080556",
      "tt6452574",
      "tt7690638",
      "tt6133466",
      "tt5758778",
      "tt4560436",
      "tt4154664",
      "tt4682266"
    ]),
      (this.recomended = ["tt3501632", "tt5463162", "tt4154756", "tt0468569"]);
  }

  render() {
    return (
      <div className="main-container">
        <div className="container-fluid dark-bg">
          <div className="container dark-bg">
            <Carousel upcoming={this.upcoming} />
          </div>
        </div>
        <div className="container-fluid light-bg">
          <div className="text-container">
            <h3 className="recomended-text">Recomended Movies</h3>
          </div>
          <div className="container size">
            <MovieGrid movies={this.recomended} />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
