import React, { Dispatch } from "react";
import {IndexPath} from "@ui-kitten/components";

export type setDataStepTwoType = Dispatch<{
  selectCategory: IndexPath;
  selectAnnouncementType: number;
}>;

export type dataStepTwoType = {
  selectCategory: IndexPath;
  selectAnnouncementType: number;
};
