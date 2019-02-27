import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import satu from "../../img/1.jpg";
import dua from "../../img/2.jpg";
import tiga from "../../img/3.jpg";
import empat from "../../img/4.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        {/* carousel */}
        <Carousel showStatus={false} showThumbs={false} autoPlay={true}>
          <div>
            <img src={satu} alt="crsl" />
          </div>
          <div>
            <img src={dua} alt="crsl" />
          </div>
          <div>
            <img src={tiga} alt="crsl" />
          </div>
          <div>
            <img src={empat} alt="crsl" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Home;
