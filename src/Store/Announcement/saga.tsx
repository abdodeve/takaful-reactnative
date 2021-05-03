import { put, takeEvery, takeLatest, all, call } from "redux-saga/effects";
import announcementsApi from "./../../Api/announcementsApi";
import {
  GET_ANNOUNCEMENTS,
  SET_ANNOUNCEMENTS,
  GET_ANNOUNCEMENTS_FAILED,
} from "./types";
import { SET_USER_DATA } from "../UserData/types";
import { userDataDestructor } from "./../../Utils/UserHelper";

function* getAnnouncements(action) {
  try {
    console.log("action.announcementType", action.announcementType);
    const payload = yield call(announcementsApi.getAnnouncements as any, {
      type: action.announcementType,
      announcementsStore: action.payload,
    });
    yield put({ type: SET_ANNOUNCEMENTS, payload: payload });
  } catch (err) {
    console.dir(err, { depth: null });
    yield put({ type: GET_ANNOUNCEMENTS_FAILED, error: err });
  }
}

function* watchLogin() {
  yield takeLatest(GET_ANNOUNCEMENTS, getAnnouncements);
}

// single entry point to start all Sagas at once
export default function* saga() {
  yield all([watchLogin()]);
}
