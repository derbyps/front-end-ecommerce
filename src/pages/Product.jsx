import React, { Component } from "react";
import Navigator from "../components/Header";
import Carousel from "../components/Carousel";
import Tabs from "../components/Tabs";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { doLogout } from "../store/action/userAction";
import { getProduct, addToCart } from "../store/action/productAction";
import { connect } from "react-redux";

class Product extends Component {
  componentDidMount() {
    this.props.getProduct();
  }
  render() {
    return (
      <div>
        <Navigator doLogout={this.props.doLogout} {...this.props} />
        <div className="container">
          <Carousel />
        </div>
        <Tabs />
        {this.props.product.map((el) => {
          return (
            <ProductCard
              id={el.id}
              title={el.name}
              category={el.cat_detail}
              description={el.description}
              price={el.price}
              created_at={el.created_at}
              addCart={this.props.addCart}
              {...this.props}
            />
          );
        })}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    password: state.user.password,
    login: state.user.is_login,
    product: state.product.listProduct,
  };
};

const mapDispatchToProps = {
  doLogout,
  getProduct,
  addCart: addToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
