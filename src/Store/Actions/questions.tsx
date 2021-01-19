const addQuestions = (question) => ({
  type: "ADD_QUESTION",
  question,
});

const resetQuestions = () => ({
  type: "RESET_QUESTIONS",
});

const showQuestions = (text) => ({
  type: "SHOW_QUESTION",
  text,
});

const storeAnswers = (answer) => ({
  type: "STORE_ANSWER",
  answer,
});

const fetchUsers = (users) => ({
  type: "FETCH_USERS",
  users,
});

export default {
  addQuestions,
  resetQuestions,
  showQuestions,
  storeAnswers,
  fetchUsers,
};
