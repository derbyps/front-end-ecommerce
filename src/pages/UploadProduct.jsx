import React, { Component } from "react";
import { connect } from "react-redux";
import { changeInputUser } from "../store/action/userAction";
import { changeFileUser, uploadProduct } from "../store/action/productAction";

class UploadProduct extends Component {
  postProduct = async (e) => {
    e.preventDefault();
    await this.props.uploadProduct();
    const is_login = this.props.login;
    if (!is_login) {
      this.props.history.push("/");
    }
  };
  //   () => this.postProduct()

  render() {
    return (
      <div className="bg-all">
        <div className="text-center pt-2">
          <img
            src={require("../img/logo-flower.png")}
            height="100"
            alt="logo"
          />
          <h3>Upload Your Product Now</h3>
        </div>
        <div className="container d-flex justify-content-center mt-5 mb-5">
          <div class="card mb-3 shadow" style={{ maxWidth: "75%" }}>
            <div class="row no-gutters">
              <div class="col-lg-6 d-flex align-items-center p-5 bg-regis">
                <h4>
                  We serve a variety of the most complete and reliable fresh
                  flower creations. explore various types of flowers that will
                  make your moments more colorful. start sell your product now!
                </h4>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div class="card-body">
                  <form onSubmit={this.postProduct}>
                    <div className="text-center">
                      <h2>Upload</h2>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlFile1">Image</label>
                      <input
                        type="file"
                        name="url_image"
                        class="form-control-file"
                        id="exampleFormControlFile1"
                        onChange={(e) => this.props.changeFile(e)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="name">Product Name</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        onChange={(e) => this.props.changeInput(e)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="description">Product Description</label>
                      <input
                        type="text"
                        name="description"
                        class="form-control"
                        id="description"
                        onChange={(e) => this.props.changeInput(e)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="price">Price</label>
                      <input
                        type="text"
                        name="price"
                        class="form-control"
                        id="price"
                        onChange={(e) => this.props.changeInput(e)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="weight">Weight</label>
                      <input
                        type="text"
                        name="weight"
                        class="form-control"
                        id="weight"
                        onChange={(e) => this.props.changeInput(e)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="size">Size</label>
                      <input
                        type="text"
                        name="size"
                        class="form-control"
                        id="size"
                        onChange={(e) => this.props.changeInput(e)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="stock">Stock</label>
                      <input
                        type="text"
                        name="stock"
                        class="form-control"
                        id="stock"
                        onChange={(e) => this.props.changeInput(e)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="category_id">Category</label>
                      <input
                        type="text"
                        name="category_id"
                        class="form-control"
                        id="category_id"
                        onChange={(e) => this.props.changeInput(e)}
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        // onClick={() => this.postProduct()}
                        class="btn btn-primary"
                      >
                        Upload
                      </button>
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
  changeFile: (e) => changeFileUser(e),
  uploadProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadProduct);
