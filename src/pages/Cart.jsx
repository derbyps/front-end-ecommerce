import React, { Component } from "react";
import Navigator from "../components/Header";
import ItemCard from "../components/ItemCard";
import { connect } from "react-redux";
import { getCart, deleteCart } from "../store/action/productAction";
import { doLogout } from "../store/action/userAction";

class Cart extends Component {
  componentDidMount() {
    this.props.getCart();
  }
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
                deleteCart={this.props.deleteCart}
              />
            );
          })}
        </div>
        <div className="d-flex justify-content-center">
          <button type="button" class="btn btn-outline-success">
            Checkout
          </button>
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
  deleteCart: deleteCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
