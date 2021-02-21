import { all } from "redux-saga/effects";

import IsLoggedInSaga from "./IsLoggedIn/saga";

export default function* rootSaga() {
  yield all([IsLoggedInSaga()]);
}
