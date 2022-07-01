// import ApiCalls from "../../../utils/ApiCalls";
// const Global = require("../../../utils/env");

// const Get_BillPay_History = "Get_BillPay_History";
// const Get_BillPay_Accounts = "Get_BillPay_Accounts";
// const Get_Pending_History = "Get_Pending_History";
// const New_Payment = "New_Payment";
// const API_Request_Sent = "API_Request_Sent";
// const API_Request_Completed = "API_Request_Completed";
// const API_Request_Error = "API_Request_Error";

const Select_Case = "Select_Case";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const SelectCase = (payload) => async (dispatch) => {
  try {
    dispatch({ type: Select_Case, payload: payload });
  } catch (error) {
    console.log(error);
  }
};
