import axios from "axios";

const url = "http://0.0.0.0:7070";

export const getCategory = (props) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(url + "/category");
      dispatch({ type: "SUCCESS_GET_CATEGORY", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProduct = (props) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(url + "/product/list");
      dispatch({ type: "SUCCESS_GET_PRODUCT", payload: response.data });
      //   console.log("id category", response.data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeFileUser = (el) => {
  return { type: "CHANGE_FILE_USER", payload: el };
};

export const uploadProduct = (props) => {
  return async (dispatch, getState) => {
    const dataProduct = new FormData();
    dataProduct.append("url_image", getState().product.url_image);
    dataProduct.append("name", getState().user.name);
    dataProduct.append("description", getState().user.description);
    dataProduct.append("price", getState().user.price);
    dataProduct.append("weight", getState().user.weight);
    dataProduct.append("size", getState().user.size);
    dataProduct.append("stock", getState().user.stock);
    dataProduct.append("category_id", getState().user.category_id);

    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(url + "/product", dataProduct, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch({ type: "SUCCESS_UPLOAD_PRODUCT" });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCart = (props) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(url + "/detail", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: "SUCCESS_GET_CART", payload: response.data });
      //   console.log("id category", response.data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (id, qty) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      product_id: id,
      qty: 2,
    };
    const myJSON = JSON.stringify(bodyRequest);
    try {
      const response = await axios.post(url + "/register", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
        },
      });
      dispatch({ type: "SUCCESS_REGISTER" });
    } catch (error) {
      console.log(error);
    }
  };
};
