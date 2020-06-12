import React, { Component } from "react";
import Navigator from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";
import { doLogout } from "../store/action/userAction";
import {
  getCategory,
  getProductByCategory,
} from "../store/action/productAction";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.getCategory();
  }

  handleRequestCategoryProduct = async (id) => {
    await this.props.history.replace("/product/category/" + id);
    this.props.getProductByCategory(id);
  };

  render() {
    return (
      <div>
        <Navigator doLogout={this.props.doLogout} {...this.props} />
        <Jumbotron />
        <div className="container my-5">
          <div className="row text-center border border-white bg-light  shadow rounded-pill ">
            <div className="col-3 pt-3 align-content-center flex-wrap">
              <i style={{ fontSize: "50px" }} class="fas fa-check-circle"></i>
              <p>Best Quality</p>
            </div>
            <div className="col-3 pt-3 align-content-center flex-wrap">
              <i style={{ fontSize: "50px" }} class="fas fa-shipping-fast"></i>
              <p>All Over Indonesia</p>
            </div>
            <div className="col-3 pt-3 align-content-center flex-wrap">
              <i style={{ fontSize: "50px" }} class="fas fa-medal"></i>
              <p>Trusted Shop</p>
            </div>
            <div className="col-3 pt-3 align-content-center flex-wrap">
              <i style={{ fontSize: "50px" }} class="fas fa-bolt"></i>
              <p>Fast Process</p>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <Carousel />
            </div>
            <div className="col-lg-6 d-flex align-content-center flex-wrap">
              <h2>WHY US?</h2>
              <span style={{ fontSize: "20px" }}>
                Flower Shop is the #1 flower delivery in Indonesia. We sells
                high quality flower with low price, delivery specially crafted
                flower bouquets and gift boxes to your loved one all around
                Indonesia.
                <br />
                We ready to gives best service and satisfy our customers.
                <br />
                Show your love and appreciation by sending fresh flowers to your
                loved ones.
              </span>
            </div>
          </div>
          <hr />
        </div>

        <div className="container mt-5">
          <div className="row d-flex justify-content-center">
            {this.props.category.map((el) => {
              return (
                <CategoryCard
                  title={el.name}
                  id={el.id}
                  imgURL={el.imgURL}
                  handleRouter={(id) => this.handleRequestCategoryProduct(id)}
                />
              );
            })}
          </div>
        </div>
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
    category: state.product.listCategory,
  };
};

const mapDispatchToProps = {
  doLogout,
  getCategory,
  getProductByCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
