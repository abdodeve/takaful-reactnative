import axios from "axios";
import * as Google from "expo-google-app-auth";
import { ANDROID_CLIENT_ID } from "./../Config";
import * as firebase from "firebase";
import "firebase/firestore";
import { LogBox } from "react-native";
import { User } from "./../Models";
import FirebaseHelper from "./../Utils/FirebaseHelper";

LogBox.ignoreLogs(["Setting a timer"]);

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyCJtUYqT_SI496aZYqxxmoqTzm7u2_QJL8",
//   authDomain: "takaful-mobile.firebaseio.com",
//   databaseURL: "https://takaful-mobile-default-rtdb.firebaseio.com",
//   projectId: "takaful-mobile",
//   // storageBucket: "takaful-mobile.appspot.com",
//   // messagingSenderId: 'sender-id',
//   // appId: "1:520521244029:android:fdf7fef31acba9611c4014",
//   // measurementId: 'G-measurement-id',
// };

// let FirebaseContext = firebase.initializeApp(firebaseConfig);
let FirebaseContext = FirebaseHelper.FirebaseContext;
export interface loginType {
  credentialResponseGoogle: any;
  signIngResponseFirebase: any;
}

async function login(): Promise<loginType | boolean> {
  try {
    const config = {
      androidClientId: ANDROID_CLIENT_ID,
    };
    const googleLogin: any = await Google.logInAsync(config);

    if (googleLogin.type !== "success") return false;

    const credentialResponseGoogle =
      firebase.auth.GoogleAuthProvider.credential(
        googleLogin.idToken,
        googleLogin.accessToken
      );

    /*
       Sign in with credential from the Google user.
       Or SignUp if its the first connection
        */
    const signIngResponseFirebase = (await firebase
      .auth()
      .signInWithCredential(credentialResponseGoogle)
      .catch((error) => {
        console.error("signInWithCredential====>", { error });
      })) as object;

    return { credentialResponseGoogle, signIngResponseFirebase };
  } catch (error) {
    console.error({ error });
    return error;
  }
}

const getUserById = async ({ uid }: { uid: string }): Promise<User> => {
  try {
    let collectionReference: firebase.firestore.CollectionReference =
      FirebaseHelper.FirebaseContext.firestore().collection("Users");
    const doc = collectionReference.doc(uid);
    const snapshot = await doc.get();
    return snapshot.data() as User;
  } catch (error) {
    throw { message: "getUserById: cannot find the user by ID", error };
  }
};

const checkUserExistence = async ({
  uid,
}: {
  uid: string;
}): Promise<boolean> => {
  try {
    const user = await getUserById({ uid });
    return user ? true : false;
  } catch (error) {
    return false;
  }
};

const createUser = async (data: any) => {
  try {
    let collectionReference = FirebaseHelper.FirebaseContext.firestore()
      .collection("Users")
      .doc(data.id);
    await collectionReference.set(data);
    return data;
  } catch (error) {
    throw { error, message: "createUser API error" };
  }
};

export default {
  login,
  getUserById,
  createUser,
  checkUserExistence,
};
