import { SearchFiltersType, SET_SEARCH_FILTERS, Actions } from "./types";

const initialState = {
  searchInput: "",
  city: "",
  category: "",
  announcementType: "",
  objectState: {
    new: false,
    good: false,
    medium: false,
    tinker: false,
  },
};

export const SearchFiltersReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case SET_SEARCH_FILTERS:
      return { ...state, ...action.searchFiltersData };
    default:
      return state;
  }
};
