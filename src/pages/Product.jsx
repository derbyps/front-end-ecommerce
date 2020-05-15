import React, { Component } from "react";
import Navigator from "../components/Header";
import Carousel from "../components/Carousel";
import Tabs from "../components/Tabs";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

class Product extends Component {
  render() {
    return (
      <div>
        <Navigator />
        <div className="container">
          <Carousel />
        </div>
        <Tabs />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <Footer />
      </div>
    );
  }
}

export default Product;
