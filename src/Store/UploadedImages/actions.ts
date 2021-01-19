import {
  UploadedImageType,
  MetaRemoveType,
  ADD_IMAGE,
  REMOVE_MESSAGE,
} from "./types";

export const addImage = (uploadedImage: UploadedImageType) => ({
  type: ADD_IMAGE,
  uploadedImage,
});

export const removeImage = (meta: MetaRemoveType) => ({
  type: REMOVE_MESSAGE,
  meta,
});
