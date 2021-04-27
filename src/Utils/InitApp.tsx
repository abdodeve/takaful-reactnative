import { logInAction, logInAsyncAction } from "./../Store/IsLoggedIn/actions";
import { setUserDataAction } from "./../Store/UserData/actions";
import * as firebase from "firebase";
import { userDataDestructor } from "./UserHelper";
import FirebaseHelper from "./FirebaseHelper";
import ManipulateFirebase from "./ManipulateFireStore";

const checkIfUserLoggedIn = (store) => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      store.dispatch(logInAction(true));
      const userData = userDataDestructor(user);
      store.dispatch(setUserDataAction(userData));
    } else {
      // No user is signed in.
      store.dispatch(logInAction(false));
      store.dispatch(setUserDataAction(false));
    }
  });
};

export default (store) => {
  checkIfUserLoggedIn(store);
  FirebaseHelper.FirebaseContext;
  // ManipulateFirebase.deleteAnnouncements();
};
