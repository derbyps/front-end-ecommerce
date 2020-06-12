import React from "react";
//import moment from "moment";
import numeral from "numeral";
import { Link } from "react-router-dom";
// import Blink from "react-blink-text";

const ProductCard = (props) => {
  const is_login = localStorage.getItem("is_login");
  const { title, urlImage, price, id } = props;
  // const changeRouter = async (id) => {
  //   if (props.getDetail) {
  //     props.getDetail(id);
  //   }
  // };
  return (
    <div className="card display-product">
      <div className="product-contain">
        <img
          src={urlImage}
          class="card-img-top image-product right-bottom-shadow"
          alt="..."
        />
        <div className="cart-text">
          {!is_login ? (
            <Link to="/signin">
              <button
                type="button"
                class="btn btn-lg btn-block btn-outline-dark"
              >
                Add to Cart
              </button>
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => props.addCart(id)}
              class="btn btn-lg btn-block btn-outline-dark"
              data-toggle="modal"
              data-target="#staticBackdrop"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
      <div class="card-body product-hover">
        <div className="text-center">
          <span>{title}</span>
          <br />
          <span>{numeral(price).format(0.0)} IDR</span>
        </div>
        <hr />

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
  );
};

export default ProductCard;
