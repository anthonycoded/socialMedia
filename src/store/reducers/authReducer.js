const USER_LOGIN_ATTEMPT = "USER_LOGIN_ATTEMPT";
const USER_LOGIN_SUCCESS1 = "USER_LOGIN_SUCCESS1";
const USER_LOGIN_SUCCESS2 = "USER_LOGIN_SUCCESS2";
const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
const CLEAR_LOGIN_STATE = "CLEAR_LOGIN_STATE";

const CHECK_USERNAME_SUCCESS = "CHECK_USERNAME_SUCCESS";
const CHECK_ANSWER_SUCCESS = "CHECK_ANSWER_SUCCESS";
const UPDATE_PASSWORD_SUCCESS = "UPDATE_PASSWORD_SUCCESS";
const UPDATE_PASSWORD_FAIL = "UPDATE_PASSWORD_FAIL";

//SET INITIAL STATE
const initialState = {
  loading: false,
  message: null,
  error: null,
  success: false,
  status: undefined,
  attempts: undefined,
  usernameSuccess: undefined,
  questionsSuccess: undefined,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    //////////////////////////////LOGIN REDUCERS//////////////////////////////////////////////////
    case USER_LOGIN_ATTEMPT:
      return {
        ...state,
        message: null,
        loading: true,
        success: false,
      };

    case CLEAR_LOGIN_STATE:
      return {
        loading: false,
        message: null,
        error: null,
        success: false,
        status: undefined,
        attempts: undefined,
        usernameSuccess: undefined,
        questionsSuccess: undefined,
      };
    case USER_LOGIN_SUCCESS1:
      return {
        ...state,
        loading: false,
        message: action.payload,
        success: action.payload,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        success: false,
        status: action.payload.status,
      };

    ///////////////////////////////Update Password///////////////////////////////////////////
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        success: action.payload,
      };
    case UPDATE_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        success: false,
        status: action.payload.status,
      };
    ////////////////////////////////////////////////////////////////////////////////////////////////
    case CHECK_USERNAME_SUCCESS:
      return {
        ...state,
        usernameSuccess: true,
      };

    case CHECK_ANSWER_SUCCESS:
      return {
        ...state,
        questionsSuccess: true,
      };

    default:
      return state;
  }
};
