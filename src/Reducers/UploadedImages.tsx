// const initialState = {
//   questionsResponses: [],
//   storeResponse: { success: {}, error: {} },
// };
const initialState = [];

const UploadedImages = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_IMAGE":
      return [...state, action.uploadedImage];
    case "GET_ALL_QUESTIONS":
      return { ...state, action };
    default:
      return state;
  }
};

export default UploadedImages;
