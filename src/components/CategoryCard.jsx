import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  const { title, id, imgURL } = props;
  return (
    <div class="col-sm mb-3 d-flex justify-content-center">
      <div class="card" style={{ width: "18rem" }}>
        <img
          src={imgURL}
          class="card-img-top"
          style={{ maxHeight: "13rem" }}
          alt="..."
        />
        <div class="card-body text-center">
          <Link to={"/category/" + id}>
            <p class="card-text">{title}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
