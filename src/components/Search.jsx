import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control m-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-light my-2 my-sm-0" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
