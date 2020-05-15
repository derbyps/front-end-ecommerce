const initialState = {
  username: "",
  password: "",
  token: "",
  is_login: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SUCCESS_LOGIN":
      return {
        ...state,
        token: action.payload.token,
        is_login: true,
      };

    case "SUCCESS_REGISTER":
      return {
        ...state,
        is_login: false,
      };

    case "CHANGE_INPUT_USER":
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      };

    case "LOGOUT":
      return {
        ...initialState,
        // is_login: false,
      };

    default:
      return state;
  }
}
