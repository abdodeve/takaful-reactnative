export type SearchFilters = {
  searchInput?: string;
  city?: string;
  category?: string;
  announcementType?: string;
  objectState?: {
    new?: boolean;
    good?: boolean;
    medium?: boolean;
    tinker?: boolean;
  };
};
