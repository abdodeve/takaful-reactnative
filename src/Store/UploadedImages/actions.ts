import { UploadedImageType } from "../../Models";
import { ADD_IMAGE } from "./types";

export const addImage = (uploadedImage: UploadedImageType) => ({
  type: ADD_IMAGE,
  uploadedImage,
});
