import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-4">
            <img
              className="img-fluid"
              src={require("../img/flower-footer.jpg")}
              alt=""
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid"
              src={require("../img/flower-footer.jpg")}
              alt=""
            />
          </div>
          <div className="col-4">
            <img
              className="img-fluid"
              src={require("../img/flower-footer.jpg")}
              alt=""
            />
          </div>
        </div>
        <div className="bg-success">
          <div className="container">
            <div className="row">
              <div className="col-4 mt-3">
                <img
                  className="logo"
                  src={require("../img/logo-flower.png")}
                  width="50"
                  height="30"
                  alt="logo"
                />
                <h3>Flower Shop</h3>
                <p>Register</p>
                <p>Have an account? Sign In</p>
              </div>
              <div className="col-4 text-center mt-3">
                <h3>Find Us</h3>
                <i class="fab fa-twitter-square">&nbsp;Twitter</i>
                <br />
                <i class="fab fa-youtube">&nbsp;Youtube</i>
                <br />
                <i class="fab fa-facebook">&nbsp;Facebook</i>
                <br />
                <i class="fab fa-instagram">&nbsp;Instagram</i>
              </div>
              <div className="col-4 text-right mt-3">
                <h3>Help</h3>
                <p>Help Center</p>
                <p>Contact Us</p>
                <br />
              </div>
            </div>
            <hr />
            <div className="text-center">© 2020 Flower Shop</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
