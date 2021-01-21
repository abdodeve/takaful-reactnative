import UPLOADED_IMAGES from "../../../dummy-data/UPLOADED_IMAGES";
import {
  ADD_IMAGE,
  REMOVE_IMAGE,
  SET_IS_MAIN,
  Actions,
  UploadedImageType,
  MetaMainType,
} from "./types";

const initialState = UPLOADED_IMAGES;

export const UploadedImagesReducer = (
  state = initialState,
  action: Actions
) => {
  let newState: UploadedImageType[];
  switch (action.type) {
    case ADD_IMAGE:
      newState = state.map((element) => {
        return element.index === action.index
          ? { ...element, ...action.uploadedImage }
          : element;
      });
      return newState;
    case REMOVE_IMAGE:
      newState = state.map((element) => {
        if (element.index === action.meta.index) {
          element.uri = null;
          element.isMain = false;
        }
        return element;
      });
      return newState;
    case SET_IS_MAIN:
      newState = state.map((element: UploadedImageType) => {
        if (element.index === action.meta.index) {
          element.isMain = true;
        } else {
          element.isMain = false;
        }
        return element;
      });
      return newState;
    default:
      return state;
  }
};
