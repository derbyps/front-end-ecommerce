import React from "react";

const ItemCard = (props) => {
  const { name, qty, price } = props;
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
