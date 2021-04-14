import axios from "axios";
import * as Google from "expo-google-app-auth";
import {
  ANDROID_CLIENT_ID,
  apiKey,
  authDomain,
  databaseURL,
  projectId,
} from "./../Config";
import * as firebase from "firebase";
import "firebase/firestore";
import { LogBox } from "react-native";

// Initialize Firebase
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: "takaful-mobile.appspot.com",
  // messagingSenderId: 'sender-id',
  // appId: "1:520521244029:android:fdf7fef31acba9611c4014",
  // measurementId: 'G-measurement-id',
};

let FirebaseContext = firebase.initializeApp(firebaseConfig);

export default {
  FirebaseContext,
};
