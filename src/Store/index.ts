import { combineReducers } from "redux";
import { UploadedImagesReducer } from "./UploadedImages/reducers";

export const rootReducer = combineReducers({
  UploadedImages: UploadedImagesReducer,
  // MainImage: MainImageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
