import React from "react";
import moment from "moment";
import { addToCart } from "../store/action/productAction";
// import Blink from "react-blink-text";

const ProductCard = (props) => {
  const { title, category, description, price, created_at, id } = props;
  // const tes = `${price} IDR`;
  return (
    <div className="container">
      <div class="card mb-3" style={{ maxWidth: "540px;" }}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src={require("../img/flowershop.jpg")}
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div className="d-flex justify-content-between">
                <h5 class="card-title">{title}</h5>
                <h5>
                  <span class="badge badge-dark">{category.name}</span>
                </h5>
              </div>
              <p class="card-text">{description}</p>
              <p class="card-text">{price}</p>
              <div class="d-flex align-items-end">
                <p class="card-text">
                  <small class="text-muted">
                    posted {moment({ created_at }).fromNow()}
                  </small>
                </p>
              </div>
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#staticBackdrop"
              >
                Add to Cart
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
                        Modal title
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
                    <div class="modal-body">
                      <label for="qty">Quantity</label>
                      <input
                        type="number"
                        name="cart-qty"
                        class="form-control"
                        id="qty"
                        onChange={(e) => props.changeInput(e)}
                      />
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        onClick={(e) => props.addToCart()}
                        class="btn btn-primary"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
