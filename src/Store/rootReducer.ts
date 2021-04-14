import { combineReducers } from "redux";
import { UploadedImagesReducer } from "./UploadedImages/reducers";
import { IsLoggedInReducer } from "./IsLoggedIn/reducers";
import { UserDataReducer } from "./UserData/reducers";
import { AnnouncementReducer } from "./Announcement/reducers";

export const rootReducer = combineReducers({
  uploadedImagesStore: UploadedImagesReducer,
  isLoggedInStore: IsLoggedInReducer,
  userDataStore: UserDataReducer,
  AnnouncementStore: AnnouncementReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
