import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";
import { caseReducer } from "./reducers/caseReducer";
import timelineReducer from "./reducers/timelineReducer";

export const store = configureStore({
  reducer: { auth: authReducer, timeline: timelineReducer },
});
