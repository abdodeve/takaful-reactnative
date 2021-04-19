import { put, takeEvery, takeLatest, all, call } from "redux-saga/effects";
import announcementsApi from "./../../Api/announcementsApi";
import { GET_ANNOUNCEMENTS, SET_ANNOUNCEMENTS } from "./types";
import { SET_USER_DATA } from "../UserData/types";
import { userDataDestructor } from "./../../Utils/UserHelper";

function* getAnnouncements(action) {
  try {
    const payload = yield call(announcementsApi.getAnnouncements as any, {
      type: "DONATION",
      announcementsStore: action.payload,
    });
    yield put({ type: SET_ANNOUNCEMENTS, payload: payload });
  } catch (err) {
    console.error("getAnnouncements saga", err);
  }
}

function* watchLogin() {
  yield takeLatest(GET_ANNOUNCEMENTS, getAnnouncements);
}

// single entry point to start all Sagas at once
export default function* saga() {
  yield all([watchLogin()]);
}
