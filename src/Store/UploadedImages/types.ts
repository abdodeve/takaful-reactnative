export const ADD_IMAGE = "ADD_IMAGE";
export const REMOVE_MESSAGE = "DELETE_MESSAGE";

export type UploadedImageType = {
  index: number;
  uri?: string | null;
};

export type MetaRemoveType = {
  index: number;
};

interface AddImageAction {
  type: typeof ADD_IMAGE;
  uploadedImage: UploadedImageType;
}

interface DeleteMessageAction {
  type: typeof REMOVE_MESSAGE;
  meta: MetaRemoveType;
}

export type Actions = AddImageAction | DeleteMessageAction;
