import {
  UploadedImageType,
  MetaRemoveType,
  MetaMainType,
  ADD_IMAGE,
  REMOVE_IMAGE,
  SET_IS_MAIN,
} from "./types";

export const addImage = (uploadedImage: UploadedImageType, index: number) => ({
  type: ADD_IMAGE,
  index,
  uploadedImage,
});

export const removeImage = (meta: MetaRemoveType) => ({
  type: REMOVE_IMAGE,
  meta,
});

export const setIsMain = (meta: MetaMainType) => ({
  type: SET_IS_MAIN,
  meta,
});
