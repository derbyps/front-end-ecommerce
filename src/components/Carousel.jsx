import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={require("../img/cat-1.jpg")}
              class="d-block w-100"
              alt="..."
              // style={{ maxHeight: "550px" }}
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../img/cat-2.jpg")}
              class="d-block w-100"
              alt="..."
              // style={{ maxHeight: "550px" }}
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../img/cat-3.jpg")}
              class="d-block w-100"
              alt="..."
              // style={{ maxHeight: "550px" }}
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
