import React from "react";

const Tabs = () => {
  return (
    <div className=" container mt-3 mb-2">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="."
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Hand Bouquet
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            role="tab"
            href="."
            aria-controls="home"
            aria-selected="false"
          >
            Bunga Meja
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            role="tab"
            href="."
            aria-controls="home"
            aria-selected="false"
          >
            Kotak Bunga
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            role="tab"
            href="."
            aria-controls="home"
            aria-selected="false"
          >
            Bunga Berdiri
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            role="tab"
            href="."
            aria-controls="home"
            aria-selected="false"
          >
            Bunga Papan
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            role="tab"
            href="."
            aria-controls="home"
            aria-selected="false"
          >
            Bunga Pengantin
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
