import { combineReducers } from "redux";
import questions from "./questions";
import UploadedImages from "./UploadedImages";

export default combineReducers({
  questions,
  UploadedImages,
});
