export type Announcement = {
  id: string;
  user_id: string;
  title: string;
  content: string;
  nbImg: number;
  mainImg: ImageSourcePropType;
  images: [ImageSourcePropType];
  city: string;
  type: string;
  created_at: string;
};
