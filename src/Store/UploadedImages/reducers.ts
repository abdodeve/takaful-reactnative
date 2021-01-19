import UPLOADED_IMAGES from "../../../dummy-data/UPLOADED_IMAGES";
import { UploadedImageType } from "../../Models";
import { ADD_IMAGE, DELETE_MESSAGE, Actions } from "./types";

const initialState = UPLOADED_IMAGES;

export const UploadedImagesReducer = (
  state = initialState,
  action: Actions
) => {
  switch (action.type) {
    case ADD_IMAGE:
      const newState = state.map((obj) =>
        obj.index === action.uploadedImage.index ? action.uploadedImage : obj
      );
      return newState;
    case DELETE_MESSAGE:
      return { ...state, action };
    default:
      return state;
  }
};
