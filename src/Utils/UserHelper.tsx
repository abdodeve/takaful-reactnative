import _ from "lodash";
import { User } from "./../Models";

export const userDataDestructor = (data): User => {
  const subset = _.pick(data, ["email", "displayName", "uid"]) as any;
  const user = {
    id: subset.uid,
    fullName: subset.displayName,
    email: subset.email,
    phone: "",
  };
  return user;
};
