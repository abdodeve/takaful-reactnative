import UPLOADED_IMAGES from "../../../dummy-data/UPLOADED_IMAGES";
import Actions from "../Actions";
import { UploadedImageType } from "../../Models";

const initialState = UPLOADED_IMAGES;

interface UploadedImagesAction {
  type: typeof Actions.UploadedImages.ADD_IMAGE;
  uploadedImage: UploadedImageType;
}

export const UploadedImagesReducer = (
  state = initialState,
  action: UploadedImagesAction
) => {
  switch (action.type) {
    case Actions.UploadedImages.ADD_IMAGE:
      console.log("state - before==>", state);
      const myArr = state.map((obj) => {
        if (obj.index === action.uploadedImage.index) {
          console.log("111111", action.uploadedImage);
          return action.uploadedImage;
        } else {
          console.log("22222222", obj);
          return obj;
        }
      });
      console.log("myArr===>", myArr);
      console.log("state - after==>", state);

      // return [...state, action.uploadedImage];
      // return state;
      return myArr;
    case "GET_ALL_QUESTIONS":
      return { ...state, action };
    default:
      return state;
  }
};
