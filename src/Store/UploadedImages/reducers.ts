import UPLOADED_IMAGES from "../../../dummy-data/UPLOADED_IMAGES";
import { ADD_IMAGE, REMOVE_MESSAGE, Actions, UploadedImageType } from "./types";

const initialState = UPLOADED_IMAGES;

export const UploadedImagesReducer = (
  state = initialState,
  action: Actions
) => {
  let newState: UploadedImageType[];
  switch (action.type) {
    case ADD_IMAGE:
      newState = state.map((element) =>
        element.index === action.uploadedImage.index
          ? action.uploadedImage
          : element
      );
      return newState;
    case REMOVE_MESSAGE:
      newState = state.map((element) => {
        if (element.index === action.meta.index) {
          element.uri = null;
        }
        return element;
      });
      return newState;
    default:
      return state;
  }
};
