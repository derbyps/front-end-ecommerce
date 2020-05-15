import React, { Component } from "react";
import { changeInputUser, doLogin } from "../store/action/userAction";
import { connect } from "react-redux";

class SignIn extends Component {
  postLogin = async () => {
    await this.props.doLogin();
    const is_login = this.props.login;
    if (is_login) {
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div className="bg-all">
        <div className="text-center pt-2">
          <img src={require("../img/logo-flower.png")} height="80" alt="logo" />
          <h1>Welcome Back!</h1>
        </div>
        <div className="container d-flex justify-content-center mt-3 mb-4">
          <div class="card mb-3 shadow" style={{ maxWidth: "75%" }}>
            <div class="row no-gutters">
              <div class="col-lg-6">
                <img
                  src={require("../img/floral-signin.jpg")}
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div class="card-body">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="text-center">
                      <h2>Login</h2>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Username</label>
                      <input
                        type="text"
                        name="username"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(e) => this.props.changeInput(e)}
                      />
                      <small id="emailHelp" class="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        name="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        onChange={(e) => this.props.changeInput(e)}
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        onClick={() => this.postLogin()}
                        class="btn btn-primary"
                      >
                        Login
                      </button>
                      <p class="card-text">
                        <small class="text-muted">
                          Don't have an account? Register here
                        </small>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>&nbsp;</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    password: state.user.password,
    login: state.user.is_login,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doLogin: doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
