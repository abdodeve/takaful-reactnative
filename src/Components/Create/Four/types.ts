import React, { Dispatch } from "react";

export type setDataStepFourType = Dispatch<{
  fullname: string;
  email: string;
  phone: string;
}>;

export type dataStepFourType = {
  fullname: string;
  email: string;
  phone: string;
};
