import React, { Component } from "react";
import Navigator from "../components/Header";
import Carousel from "../components/Carousel";
import Tabs from "../components/Tabs";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { doLogout } from "../store/action/userAction";
import {
  getProduct,
  addToCart,
  getDetailProduct,
  getProductByCategory,
  getCategory,
} from "../store/action/productAction";
import { connect } from "react-redux";

class Product extends Component {
  componentDidMount() {
    this.props.match.params.id
      ? this.props.getProductByCategory(this.props.match.params.id)
      : this.props.getProduct();
    this.props.getCategory();
  }

  handleRequestCategoryProduct = async (id) => {
    await this.props.history.replace("/product/category/" + id);
    this.props.getProductByCategory(id);
  };

  handleRequestDetailProduct = async (id) => {
    await this.props.history.replace("/product/" + id);
    this.props.getDetailProduct(id);
  };
  render() {
    return (
      <div>
        <Navigator doLogout={this.props.doLogout} {...this.props} />
        <div className="container">
          <Carousel />
        </div>
        <div className=" container mt-3 mb-2">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            {this.props.category.map((el) => {
              return (
                <Tabs
                  title={el.name}
                  id={el.id}
                  handleRouter={(id) => this.handleRequestCategoryProduct(id)}
                />
              );
            })}
          </ul>
        </div>
        <div class="container card-columns">
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
                urlImage={el.url_image}
                getDetail={(id) => this.handleRequestDetailProduct(id)}
                // {...this.props}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.product.listCategory,
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
  getDetailProduct,
  getProductByCategory,
  getCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
