import React, { Dispatch } from "react";
import {IndexPath} from "@ui-kitten/components";

export type setDataStepThreeType = Dispatch<{
  city: string;
  titleAnnouncement: string;
  description: string;
}>;

export type dataStepThreeType = {
  city: string;
  titleAnnouncement: string;
  description: string;
};
