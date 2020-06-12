import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  const { title, id, imgURL } = props;
  return (
    <div class="col-sm mb-3 d-flex justify-content-center">
      <Link onClick={() => props.handleRouter(id)}>
        <div class="card shadow" style={{ width: "18rem" }}>
          <img
            src={imgURL}
            class="card-img-top"
            style={{ maxHeight: "15rem" }}
            alt="..."
          />
          <div class="card-body text-center">
            <p class="card-text">{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
