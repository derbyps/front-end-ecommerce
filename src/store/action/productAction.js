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
      await axios.post(url + "/product", dataProduct, {
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
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (id) => {
  //   alert(id);
  return async (dispatch) => {
    const bodyRequest = {
      product_id: id,
      qty: 1,
      shipping_method_id: 1,
      payment_method_id: 1,
    };
    const token = localStorage.getItem("token");
    const myJSON = JSON.stringify(bodyRequest);
    try {
      await axios.post(url + "/transaction", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCart = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(url + "/transaction/" + id, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetailProduct = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(url + "/product/" + id, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: "GET_PRODUCT_DETAIL",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProductCategory = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(url + "/product/category/" + id);
      dispatch({
        type: "SUCCESS_GET_PRODUCT_BY_CATEGORY",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
