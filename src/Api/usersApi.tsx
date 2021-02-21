import axios from "axios";
import * as Google from "expo-google-app-auth";
import { ANDROID_CLIENT_ID } from "./../Config";
import * as firebase from "firebase";

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

firebase.initializeApp(firebaseConfig);

async function login() {
  try {
    // await storeHighScore("1", 24);
    // loginFirebase();
    const config = {
      androidClientId: ANDROID_CLIENT_ID,
    };
    const dataLogin: any = await Google.logInAsync(config);

    if (dataLogin.type === "success") {
      const credential = firebase.auth.GoogleAuthProvider.credential(
        dataLogin.idToken,
        dataLogin.accessToken
      );
      /* 
       Sign in with credential from the Google user.
       Or SignUp if its the first connection
        */
      const signIngResult = await firebase
        .auth()
        .signInWithCredential(credential)
        .catch((error) => {
          console.error("signInWithCredential====>", { error });
        });
      console.log(
        "signIngResult====================>",
        JSON.stringify(signIngResult)
      );
    }

    // console.log("dataLogin====>", dataLogin.accessToken);
    return dataLogin;
  } catch (error) {
    console.error({ error });
    return error;
  }
}

export default {
  login,
};
