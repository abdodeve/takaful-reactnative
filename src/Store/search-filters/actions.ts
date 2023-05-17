import {
  RESET_SEARCH_FILTERS,
  SET_SEARCH_FILTERS,
  SearchFiltersType,
} from "./types";

export const setSearchFiltersAction = (
  searchFiltersData: SearchFiltersType
) => ({
  type: SET_SEARCH_FILTERS,
  searchFiltersData,
});

export const resetSearchFiltersAction = () => ({
  type: RESET_SEARCH_FILTERS,
});
