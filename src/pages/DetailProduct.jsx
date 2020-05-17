import React, { Component } from "react";
import Navigator from "../components/Header";
import Footer from "../components/Footer";
import { doLogout } from "../store/action/userAction";
import { connect } from "react-redux";

class DetailProduct extends Component {
  render() {
    return (
      <div>
        <Navigator doLogout={this.props.doLogout} {...this.props} />
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
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
