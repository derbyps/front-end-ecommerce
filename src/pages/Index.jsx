import React, { Component } from "react";
import Navigator from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";
import { doLogout } from "../store/action/userAction";
import { getCategory } from "../store/action/productAction";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.getCategory();
  }

  render() {
    return (
      <div>
        <Navigator doLogout={this.props.doLogout} />
        <Jumbotron />
        <div className="container my-5">
          <div className="row text-center border border-white bg-light  shadow rounded-pill ">
            <div className="col-3 pt-3 align-content-center flex-wrap">
              <i style={{ fontSize: "50px" }} class="fas fa-check-circle"></i>
              <p>Kualitas Terjamin</p>
            </div>
            <div className="col-3 pt-3 align-content-center flex-wrap">
              <i style={{ fontSize: "50px" }} class="fas fa-shipping-fast"></i>
              <p>Kirim Seluruh Indonesia</p>
            </div>
            <div className="col-3 pt-3 align-content-center flex-wrap">
              <i style={{ fontSize: "50px" }} class="fas fa-medal"></i>
              <p>Toko Terpercaya</p>
            </div>
            <div className="col-3 pt-3 align-content-center flex-wrap">
              <i style={{ fontSize: "50px" }} class="fas fa-bolt"></i>
              <p>Proses Cepat</p>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <Carousel />
            </div>
            <div className="col-lg-6 d-flex align-content-center flex-wrap">
              <h1> WHY US?</h1>
              <span style={{ fontSize: "20px" }}>
                Flower Shop merupakan toko bunga online yang menjual bunga
                dengan kualitas terjamin namun harga terjangkau.
                <br />
                Kami siap memberikan pelayan yang prima dan memuaskan untuk
                setiap pelanggan kami.
                <br />
                Buat momen anda semakin spesial dengan bunga dari kami!
              </span>
            </div>
          </div>
          <hr />
        </div>

        <div className="container mt-5">
          <div className="row d-flex justify-content-center">
            {this.props.category.map((el) => {
              return <CategoryCard title={el.name} id={el.id} />;
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
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
