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
