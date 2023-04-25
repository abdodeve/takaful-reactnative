import { SearchFilters } from "./../../Models/SearchFilters";
export const SET_SEARCH_FILTERS = "SET_SEARCH_FILTERS";

export type SearchFiltersType = SearchFilters | boolean;

interface setSearchFiltersDataActionType {
  type: typeof SET_SEARCH_FILTERS;
  searchFiltersData: SearchFilters;
}

export type Actions = setSearchFiltersDataActionType;
