import React from "react";

const ItemCard = (props) => {
  const { name, qty, price, id } = props;
  return (
    <div className="mt-3">
      <div className="container">
        <div className="d-flex justify-content-center">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={require("../img/flowershop.jpg")}
                  class="img-fluid"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{name.name}</h5>
                  <p class="card-text">Jumlah : {qty}</p>
                  <p class="card-text">
                    <small class="text-muted">Harga : {price}</small>
                  </p>
                  <button
                    type="button"
                    onClick={() => props.deleteCart(id)}
                    class="btn btn-dark"
                    data-toggle="modal"
                    data-target="#staticBackdrop"
                  >
                    Delete
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
                        <div class="modal-body">Succes delete to Your Card</div>
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
      </div>
    </div>
  );
};

export default ItemCard;
