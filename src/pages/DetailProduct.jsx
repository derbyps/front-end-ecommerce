import React, { Component } from "react";
import Navigator from "../components/Header";
import Footer from "../components/Footer";
import { doLogout } from "../store/action/userAction";
import { addToCart } from "../store/action/productAction";
import { connect } from "react-redux";

class DetailProduct extends Component {
  render() {
    return (
      <div>
        <Navigator doLogout={this.props.doLogout} {...this.props} />
        <div className="container card-bio d-flex justify-content-center">
          <div className="row">
            <div className="card">
              <img
                className="card-img-top"
                src={this.props.productDetail.image_url}
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">{this.props.productDetail.name}</h5>
                <p className="card-text">
                  {this.props.productDetail.description}
                </p>
                <p className="card-text">
                  Harga : {this.props.productDetail.price} IDR
                </p>
                <button
                  type="button"
                  onClick={() =>
                    this.props.addCart(this.props.productDetail.id)
                  }
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                >
                  Add
                </button>
                <div
                  class="modal fade"
                  id="staticBackdrop"
                  data-backdrop="static"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">
                          Thank You
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">Succes Add to Your Card</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    productDetail: state.product.detailProduct,
  };
};

const mapDispatchToProps = {
  doLogout,
  addCart: addToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
