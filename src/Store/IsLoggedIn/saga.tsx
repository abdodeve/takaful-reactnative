import { put, takeEvery, all, call } from "redux-saga/effects";
import usersApi from "./../../Api/usersApi";
import { LOG_IN } from "./types";
import { SET_USER_DATA } from "../UserData/types";
// import Api from './path/to/api'

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* login(action) {
  const data = yield call(usersApi.login as any, action.isLoggedIn);
  console.log("SAGA login", data);
  if (data.type === "success") {
    yield put({ type: LOG_IN, isLoggedIn: action.isLoggedIn });
    yield put({ type: SET_USER_DATA, userData: data.user });
  }
}

function* watchLogin() {
  console.log("watchLogin");
  yield takeEvery("LOG_IN_ASYNC", login);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* saga() {
  yield all([watchLogin()]);
}
