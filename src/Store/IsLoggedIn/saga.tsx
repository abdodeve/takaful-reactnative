import { put, takeEvery, all, call } from "redux-saga/effects";
import usersApi, { loginType } from "./../../Api/usersApi";
import { LOG_IN, LOG_IN_ASYNC } from "./types";
import { SET_USER_DATA } from "../UserData/types";
import { userDataDestructor } from "./../../Utils/UserHelper";
import { User } from "./../../Models";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* login(action) {
  try {
    // Call Login API of FireStore
    const signIngResponse: loginType = yield call(
      usersApi.login as any,
      action.isLoggedIn
    );

    if (!signIngResponse) return false;
    yield put({ type: LOG_IN, isLoggedIn: action.isLoggedIn });
    const userData: User = userDataDestructor(
      signIngResponse.signIngResponseFirebase.user
    );

    // Create new user on FireStore
    const isUserExist = yield call(usersApi.checkUserExistence as any, {
      uid: userData.id,
    });
    if (!isUserExist) {
      const createdUser = yield call(usersApi.createUser as any, userData);
    }
    const connectedUser = yield call(usersApi.getUserById as any, {
      uid: userData.id,
    });
    console.log("connectedUser===>", connectedUser);

    yield put({ type: SET_USER_DATA, userData: connectedUser });
  } catch (err) {
    console.error("login saga", err);
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_ASYNC, login);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* saga() {
  yield all([watchLogin()]);
}
