import { combineReducers } from "redux";
import { UploadedImagesReducer } from "./UploadedImages/reducers";
import { IsLoggedInReducer } from "./IsLoggedIn/reducers";

export const rootReducer = combineReducers({
  UploadedImagesStore: UploadedImagesReducer,
  isLoggedInStore: IsLoggedInReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
