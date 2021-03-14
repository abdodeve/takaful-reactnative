import axios from "axios";
import * as Google from "expo-google-app-auth";
import { ANDROID_CLIENT_ID } from "./../Config";
import * as firebase from "firebase";
import "firebase/firestore";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCJtUYqT_SI496aZYqxxmoqTzm7u2_QJL8",
  authDomain: "takaful-mobile.firebaseio.com",
  databaseURL: "https://takaful-mobile-default-rtdb.firebaseio.com",
  projectId: "takaful-mobile",
  // storageBucket: "takaful-mobile.appspot.com",
  // messagingSenderId: 'sender-id',
  // appId: "1:520521244029:android:fdf7fef31acba9611c4014",
  // measurementId: 'G-measurement-id',
};

let FirebaseContext = firebase.initializeApp(firebaseConfig);

async function login() {
  try {
    const config = {
      androidClientId: ANDROID_CLIENT_ID,
    };
    const googleLogin: any = await Google.logInAsync(config);

    if (googleLogin.type !== "success")
      throw { ...googleLogin, customMessage: "Connection to Google is failed" };

    const credential = firebase.auth.GoogleAuthProvider.credential(
      googleLogin.idToken,
      googleLogin.accessToken
    );
    /*
       Sign in with credential from the Google user.
       Or SignUp if its the first connection
        */
    const signIngResponse = await firebase
      .auth()
      .signInWithCredential(credential)
      .catch((error) => {
        console.error("signInWithCredential====>", { error });
      });

    var user = firebase.auth().currentUser;
    if (user) {
      console.log("User is loggedIn");
    } else {
      console.log("No user is loggedIn");
    }

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log("onAuthStateChanged", "IIIIIIIIINNN", user);
      } else {
        // No user is signed in.
        console.log("onAuthStateChanged", "OUUUUUUUUT", user);
      }
    });

    console.log("firebase.auth()========>", firebase.auth());

    console.log(
      "firebase.auth().currentUser.isAnonymous",
      firebase.auth().currentUser?.isAnonymous
    );

    const snapshot = await FirebaseContext.firestore()
      .collection("employees")
      .get();
    console.log(
      "snapshot=============>",
      snapshot.docs.map((doc) => doc.data())
    );

    // return signIngResponse;
  } catch (error) {
    console.error({ error });
    return error;
  }
}

export default {
  login,
};
