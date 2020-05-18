import React from "react";
import moment from "moment";
// import { Link } from "react-router-dom";
// import Blink from "react-blink-text";

const ProductCard = (props) => {
  const {
    title,
    category,
    urlImage,
    description,
    price,
    created_at,
    id,
  } = props;
  const changeRouter = async (id) => {
    if (props.getDetail) {
      props.getDetail(id);
    }
  };
  return (
    <div className="container">
      <div class="card mb-3" style={{ maxWidth: "540px;" }}>
        <div class="row no-gutters">
          <div class="col-md-4" onClick={() => changeRouter(id)} value={id}>
            <img src={urlImage} class="card-img" alt="..." />
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
                data-toggle="modal"
                data-target="#staticBackdrop"
              >
                Add
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
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
