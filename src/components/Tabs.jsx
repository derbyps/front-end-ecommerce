import React from "react";
import { Link } from "react-router-dom";

const Tabs = (props) => {
  const { title, id } = props;
  return (
    <div className="tab-button">
      <Link onClick={() => props.handleRouter(id)}>
        <li class="nav-item" role="presentation">
          <div className="tab-button">
            <a
              class="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              {title}
            </a>
          </div>
        </li>
      </Link>
    </div>
  );
};

export default Tabs;
