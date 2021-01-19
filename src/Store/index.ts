import { combineReducers } from "redux";
// import { systemReducer } from './system/reducers'
// import { chatReducer } from './chat/reducers'
import { UploadedImagesReducer } from "./UploadedImages/reducers";

export const rootReducer = combineReducers({
  UploadedImage: UploadedImagesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
