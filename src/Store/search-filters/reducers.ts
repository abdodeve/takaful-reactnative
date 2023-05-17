import {
  SearchFiltersType,
  SET_SEARCH_FILTERS,
  RESET_SEARCH_FILTERS,
  Actions,
} from "./types";

export const initialStateSearchFilter = {
  searchInput: "",
  city: "",
  category: "",
  announcementType: "",
  condition: [],
};

export const SearchFiltersReducer = (
  state = initialStateSearchFilter,
  action: Actions
) => {
  switch (action.type) {
    case SET_SEARCH_FILTERS:
      return { ...state, ...action.searchFiltersData };
    case RESET_SEARCH_FILTERS:
      return initialStateSearchFilter;
    default:
      return state;
  }
};
