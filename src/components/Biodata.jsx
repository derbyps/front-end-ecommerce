import React from "react";

const Biodata = () => {
  //   const bio = localStorage.getItem("bio");
  const bio1 = JSON.parse(localStorage.getItem("bio"));
  return (
    <div>
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
            <h5 class="card-title">Florence Garza</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <p class="mt-3 w-100 float-left text-center">
          <strong>Card with Floting Picture</strong>
        </p>
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
