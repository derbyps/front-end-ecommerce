import React from "react";
import { Link } from "react-router-dom";

const Biodata = () => {
  const dataUser = JSON.parse(localStorage.getItem("bio"));
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div class="col-md-4 mt-4">
        <div class="card profile-card-5">
          <div class="card-img-block">
            <img
              class="card-img-top"
              src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47c"
              alt="cap"
            />
          </div>
          <div class="card-body pt-0">
            <h5 class="card-title">@{dataUser.username}</h5>
            <hr />
            <h5>Personal Info</h5>
            <p class="card-text">Full name : {dataUser.full_name}</p>
            <p class="card-text">email : {dataUser.email}</p>
            <p class="card-text">Address : {dataUser.address}</p>
            <p class="card-text">City : {dataUser.address}</p>
            <p class="card-text">Telphone : {dataUser.telephone}</p>
          </div>
          <div className="d-flex justify-content-center pb-3">
            <Link to="/product/upload">
              <button type="button" class="btn btn-outline-success mr-1">
                Post Your Product
              </button>
            </Link>
            <Link to="/">
              <button type="button" class="btn btn-outline-success ml-1">
                Manage Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // </div>
    // {/* <h1>{bio1.full_name}</h1>
    // <h1>nama</h1>
    // <h1>{bio1.email}</h1>
    // <h1>address</h1>
    // <h1>city</h1>
    // <h1>telephone</h1> */}
    // </div>
  );
};

export default Biodata;
