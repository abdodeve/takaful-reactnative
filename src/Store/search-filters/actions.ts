import { SET_SEARCH_FILTERS, SearchFiltersType } from "./types";

export const setSearchFiltersAction = (
  searchFiltersData: SearchFiltersType
) => ({
  type: SET_SEARCH_FILTERS,
  searchFiltersData,
});
