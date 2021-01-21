export const ADD_IMAGE = "ADD_IMAGE";
export const REMOVE_IMAGE = "REMOVE_IMAGE";
export const SET_IS_MAIN = "SET_IS_MAIN";

export type UploadedImageType = {
  index?: number;
  uri?: string | null;
  isMain?: boolean | null;
};

export type MetaRemoveType = {
  index: number;
};

export type MetaMainType = {
  index: number;
};

interface AddImageAction {
  type: typeof ADD_IMAGE;
  index: number;
  uploadedImage: UploadedImageType;
}

interface RemoveImageAction {
  type: typeof REMOVE_IMAGE;
  meta: MetaRemoveType;
}
interface SetMainImageAction {
  type: typeof SET_IS_MAIN;
  meta: MetaMainType;
}

export type Actions = AddImageAction | RemoveImageAction | SetMainImageAction;
