import {
  select,
  put,
  takeEvery,
  takeLatest,
  all,
  call,
} from "redux-saga/effects";
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
    const userDataStore = yield select((state) => state.userDataStore);
    const payload = yield call(announcementsApi.getAnnouncements as any, {
      type: action.announcementType,
      announcementsData: action.payload,
      userData: userDataStore,
    });
    yield put({
      type: SET_ANNOUNCEMENTS,
      payload: payload,
      announcementType: action.announcementType,
      refresh: action.refresh,
    });
  } catch (err) {
    console.error("getAnnouncements===>", err);
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
