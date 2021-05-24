import _ from "lodash";

export const userDataDestructor = (data) => {
  const subset = _.pick(data, ["email", "displayName", "uid"]);
  return subset;
};
