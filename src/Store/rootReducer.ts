import { combineReducers } from "redux";
import { UploadedImagesReducer } from "./UploadedImages/reducers";
import { IsLoggedInReducer } from "./IsLoggedIn/reducers";
import { UserDataReducer } from "./UserData/reducers";
import { AnnouncementReducer } from "./Announcement/reducers";
import { SearchFiltersReducer } from "./search-filters/reducers";

export const rootReducer = combineReducers({
  uploadedImagesStore: UploadedImagesReducer,
  isLoggedInStore: IsLoggedInReducer,
  userDataStore: UserDataReducer,
  AnnouncementStore: AnnouncementReducer,
  SearchFiltersStore: SearchFiltersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
