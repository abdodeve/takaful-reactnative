// const initialState = {
//   questionsResponses: [],
//   storeResponse: { success: {}, error: {} },
// };
const initialState = [];

const questions = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_QUESTION":
      return [...state, action];
    case "GET_ALL_QUESTIONS":
      return { ...state, action };
    default:
      return state;
  }
};

export default questions;
