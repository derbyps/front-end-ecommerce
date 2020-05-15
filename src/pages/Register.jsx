import React, { Component } from "react";
import { connect } from "react-redux";
import { changeInputUser } from "../store/action/userAction";

class Register extends Component {
  postRegister = async () => {
    await this.props.doRegister();
    const is_login = this.props.login;
    if (!is_login) {
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div className="bg-all">
        <div className="text-center pt-2">
          <img
            src={require("../img/logo-flower.png")}
            height="100"
            alt="logo"
          />
          <h3>Create Your account now</h3>
        </div>
        <div className="container d-flex justify-content-center mt-5 mb-5">
          <div class="card mb-3 shadow" style={{ maxWidth: "75%" }}>
            <div class="row no-gutters">
              <div class="col-lg-6 d-flex align-items-center p-5 bg-regis">
                <h4>
                  We serve a variety of the most complete and reliable fresh
                  flower creations. explore various types of flowers that will
                  make your moments more colorful. create an account and start
                  shopping now!
                </h4>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div class="card-body">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="text-center">
                      <h2>Register</h2>
                    </div>
                    <div class="form-group">
                      <label for="fullname">Full Name</label>
                      <input
                        type="text"
                        name="full_name"
                        class="form-control"
                        id="fullname"
                        onChange={(e) => this.props.changeInput(e)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="username">Username</label>
                      <input
                        type="text"
                        name="username"
                        class="form-control"
                        id="username"
                        onChange={(e) => this.props.changeInput(e)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input
                        type="text"
                        name="email"
                        class="form-control"
                        id="email"
                        onChange={(e) => this.props.changeInput(e)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input
                        type="text"
                        name="password"
                        class="form-control"
                        id="password"
                        onChange={(e) => this.props.changeInput(e)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="address">Address</label>
                      <input
                        type="text"
                        name="address"
                        class="form-control"
                        id="address"
                        onChange={(e) => this.props.changeInput(e)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="city">City</label>
                      <input
                        type="text"
                        name="city"
                        class="form-control"
                        id="city"
                        onChange={(e) => this.props.changeInput(e)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="telephone">Telephone</label>
                      <input
                        type="text"
                        name="telephone"
                        class="form-control"
                        id="telephone"
                        onChange={(e) => this.props.changeInput(e)}
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        onClick={() => this.postRegister()}
                        class="btn btn-primary"
                      >
                        Register
                      </button>
                      <p class="card-text">
                        <small class="text-muted">
                          Have an account? Login here.
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
    login: state.user.is_login,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
// export default Register;
