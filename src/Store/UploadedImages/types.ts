export const ADD_IMAGE = "ADD_IMAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export type UploadedImageType = {
  index: number;
  uri?: string | null;
};

interface AddImageAction {
  type: typeof ADD_IMAGE;
  uploadedImage: UploadedImageType;
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE;
  meta: {
    timestamp: number;
  };
}

export type Actions = AddImageAction | DeleteMessageAction;
