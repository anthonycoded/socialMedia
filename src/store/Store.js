import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";
import { caseReducer } from "./reducers/caseReducer";

export const store = configureStore({
  reducer: { auth: authReducer, cases: caseReducer },
});
