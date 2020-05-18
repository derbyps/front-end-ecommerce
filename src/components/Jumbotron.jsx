import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = () => {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid bg-jumbotron mt-5">
        <div class="container text-center">
          <h1 class="display-4 text-white">
            <strong>Selamat Datang di Flower Shop</strong>
          </h1>
          <p class="lead text-white">
            <strong>Toko Bunga Online Paling Terpercaya</strong>
          </p>
          <Link to="/product">
            <button type="button" class="btn btn-success">
              <span style={{ fontSize: "25px" }}>Lihat Katalog Kami</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
