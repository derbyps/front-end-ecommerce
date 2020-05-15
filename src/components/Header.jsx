import React from "react";
import SearchBar from "../components/Search";
import { Link } from "react-router-dom";

const Navigator = (props, postSignout) => {
  const login = localStorage.getItem("is_login");
  postSignout = () => {
    props.doLogout();
    if (!login) {
      props.history.push("/");
    }
  };
  return (
    <div className="fixed-top">
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container">
          <a class="navbar-brand" href="">
            <img
              className="logo"
              src={require("../img/logo-flower.png")}
              width="50"
              height="30"
              alt="logo"
            />
            {/* Flower Shop */}
            Flower Shop
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto">
              <SearchBar />
            </ul>
            {login ? (
              <ul class="navbar-nav">
                <li className="mr-3">
                  <button
                    type="button"
                    onClick={() => postSignout()}
                    class="btn btn-outline-success"
                  >
                    Log Out
                  </button>
                </li>
                <li className="mr-3">
                  <Link to="/profile">
                    <button type="button" class="btn btn-outline-success">
                      Profile
                    </button>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul class="navbar-nav">
                <li className="mr-3">
                  <Link to="/register">
                    <button type="button" class="btn btn-outline-success">
                      Register
                    </button>
                  </Link>
                </li>
                <li className="mr-3">
                  <Link to="/signin">
                    <button type="button" class="btn btn-outline-success">
                      Login
                    </button>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigator;
