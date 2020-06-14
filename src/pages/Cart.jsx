import React, { Component } from "react";
import Navigator from "../components/Header";
import ItemCard from "../components/ItemCard";
import { connect } from "react-redux";
import { getCart, deleteCart, doCheckout } from "../store/action/productAction";
import { doLogout } from "../store/action/userAction";

class Cart extends Component {
  componentDidMount() {
    this.props.getCart();
  }

  checkout = async () => {
    await this.props.doCheckout();
    await this.props.history.replace("/me/cart");
    await this.props.getCart();
  };

  deleteData = async (id) => {
    await this.props.deleteCart(id);
    await this.props.history.replace("/me/cart");
    await this.props.getCart();
  };

  render() {
    return (
      <div>
        <Navigator doLogout={this.props.doLogout} {...this.props} />
        <div className="card-bio">
          {this.props.cart.map((el) => {
            return (
              <ItemCard
                name={el.product}
                qty={el.qty}
                price={el.price}
                id={el.id}
                deleteCart={this.deleteData}
              />
            );
          })}
        </div>
        <div
          className="d-flex justify-content-center"
          // onSubmit={(e) => e.preventDefault()}
        >
          <button
            type="submit"
            onClick={() => this.checkout()}
            class="btn btn-outline-success"
            data-toggle="modal"
            data-target="#staticBackdrop"
          >
            Checkout
          </button>
        </div>
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
              <div class="modal-body">Succes Checkout</div>
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.product.listCart,
  };
};

const mapDispatchToProps = {
  getCart,
  doLogout,
  doCheckout,
  deleteCart: deleteCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
