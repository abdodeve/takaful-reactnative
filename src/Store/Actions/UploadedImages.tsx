import { UploadedImageType } from "../../Models";

const ADD_IMAGE = "ADD_IMAGE";
const addImage = (uploadedImage: UploadedImageType) => ({
  type: ADD_IMAGE,
  uploadedImage,
});

export default {
  addImage,
  ADD_IMAGE,
};
