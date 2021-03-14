import { put, takeEvery, all, call } from "redux-saga/effects";
import usersApi from "./../../Api/usersApi";
import { LOG_IN } from "./types";
import { SET_USER_DATA } from "../UserData/types";
import { userDataDestructor } from "./../../Utils/UserHelper";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* login(action) {
  try {
    const signIngResponse = yield call(
      usersApi.login as any,
      action.isLoggedIn
    );
    console.log("signIngResponse==>", signIngResponse);
    if (!signIngResponse) return false;
    yield put({ type: LOG_IN, isLoggedIn: action.isLoggedIn });
    const userData = userDataDestructor(signIngResponse.user);
    yield put({ type: SET_USER_DATA, userData: userData });
  } catch (err) {
    console.error("login saga", err);
  }
}

function* watchLogin() {
  yield takeEvery("LOG_IN_ASYNC", login);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* saga() {
  yield all([watchLogin()]);
}
