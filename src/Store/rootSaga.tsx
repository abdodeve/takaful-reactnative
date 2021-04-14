import { all } from "redux-saga/effects";

import IsLoggedInSaga from "./IsLoggedIn/saga";
import AnnouncementSaga from "./Announcement/saga";

export default function* rootSaga() {
  yield all([IsLoggedInSaga(), AnnouncementSaga()]);
}
