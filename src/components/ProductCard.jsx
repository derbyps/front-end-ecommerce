import React from "react";
import moment from "moment";
// import Blink from "react-blink-text";

const ProductCard = (props) => {
  const { title, category, description, price, created_at, id } = props;
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
                onClick={() => props.addCart(id)}
                class="btn btn-primary"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
