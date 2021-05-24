import { logInAction, logInAsyncAction } from "./../Store/IsLoggedIn/actions";
import { setUserDataAction } from "./../Store/UserData/actions";
import * as firebase from "firebase";
import { userDataDestructor } from "./UserHelper";
import FirebaseHelper from "./FirebaseHelper";
import ManipulateFirebase from "./ManipulateFireStore";
import FetchAnnouncements from "./FetchAnnouncements";

const checkIfUserLoggedIn = (store) => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        store.dispatch(logInAction(true));
        const userData = userDataDestructor(user);
        store.dispatch(setUserDataAction(userData));
        resolve(true);
      } else {
        // No user is signed in.
        store.dispatch(logInAction(false));
        store.dispatch(setUserDataAction(false));
        resolve(false);
      }
    });
  });
};

export default async (store) => {
  try {
    FirebaseHelper.FirebaseContext;
    await checkIfUserLoggedIn(store);
    await FetchAnnouncements.loadAnnouncements(store);
    // ManipulateFirebase.testFetching();
    // ManipulateFirebase.getAnnouncementById();
  } catch (error) {
    console.log("InitApp", error);
  }
};
