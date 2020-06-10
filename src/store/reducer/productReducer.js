const initialState = {
  listCategory: [],
  listProduct: [],
  listCart: [],
  detailProduct: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "SUCCESS_GET_CATEGORY":
      return {
        ...state,
        listCategory: action.payload,
      };

    case "SUCCESS_GET_PRODUCT":
      return {
        ...state,
        listProduct: action.payload,
      };

    case "SET_PRODUCT_BY_CATEGORY":
      return {
        ...state,
        listProduct: action.payload,
      };

    case "SUCCESS_GET_CART":
      return {
        ...state,
        listCart: action.payload,
      };

    case "CHANGE_FILE_USER":
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.files[0],
      };

    case "SUCCESS_UPLOAD_PRODUCT":
      return {
        ...state,
      };

    case "SUCCESS_ADD_CART":
      return {
        ...state,
      };

    case "GET_PRODUCT_DETAIL":
      return {
        ...state,
        detailProduct: action.payload,
      };

    default:
      return state;
  }
}
