import React, { Dispatch } from "react";
import { IndexPath } from "@ui-kitten/components";

export type selectCategoryType = string;

export type setDataStepTwoType = Dispatch<{
  selectCategory: selectCategoryType;
  radioAnnouncementType: number;
  radioAnnouncementCondition: number;
}>;

export type dataStepTwoType = {
  selectCategory: selectCategoryType;
  radioAnnouncementType: number;
  radioAnnouncementCondition: number;
};
