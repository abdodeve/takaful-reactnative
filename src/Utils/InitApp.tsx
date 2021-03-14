import { logInAction, logInAsyncAction } from "./../Store/IsLoggedIn/actions";
import { setUserDataAction } from "./../Store/UserData/actions";
import * as firebase from "firebase";
import { userDataDestructor } from "./../Utils/UserHelper";

const checkIfUserLoggedIn = (store) => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      store.dispatch(logInAction(true));
      const userData = userDataDestructor(user);
      store.dispatch(setUserDataAction(userData));
    } else {
      // No user is signed in.
      // console.log("INITAPP onAuthStateChanged", "OUUUUUUUUT", user);
    }
  });
};

export default (store) => {
  checkIfUserLoggedIn(store);
};
