import axios from "axios";
import * as Google from "expo-google-app-auth";
import * as firebase from "firebase";
import "firebase/firestore";
import { LogBox } from "react-native";
import moment from "moment";
import "moment/locale/fr"; // without this line it didn't work
import { Announcement } from "./../Models/Announcement";

import { ANDROID_CLIENT_ID } from "./../Config";
import FirebaseHelper from "./../Utils/FirebaseHelper";
import { random } from "lodash";

LogBox.ignoreLogs(["Setting a timer"]);

const getMainImage = async (announcement_id, nbImg) => {
  try {
    if (!nbImg) return false;
    const path = `announcements/${announcement_id}/1.jpg`;
    const storage = FirebaseHelper.FirebaseContext.storage();
    const pathReference = storage.ref(path);
    const url = await pathReference.getDownloadURL();
    return url;
  } catch (error) {
    console.error(error);
  }
};

const getImagesOfAnnouncement = async (announcement_id, nbImg) => {
  try {
    if (!nbImg) return false;
    var storage = FirebaseHelper.FirebaseContext.storage();
    const urls: any[] = [];
    for (let i = 1; i <= nbImg; i++) {
      var pathReference = storage.ref(
        `announcements/${announcement_id}/${i}.jpg`
      );
      const url = await pathReference.getDownloadURL();
      urls.push(url);
    }
    return urls;
  } catch (error) {
    return false;
  }
};

enum TypeAnnouncement {
  Donation = "DONATION",
  Request = "REQUEST",
}

function randomString(len, charSet) {
  charSet =
    charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var randomString = "";
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

async function getAnnouncements({
  type = TypeAnnouncement.Donation,
  nextPage = false,
  announcementsStore,
}) {
  try {
    const field = "id";
    const pageSize = 6;

    let snapshot;
    // console.log(
    //   "nextPage && announcementsStore.length===>",
    //   { nextPage },
    //   announcementsStore.items.length,
    //   announcementsStore.items[announcementsStore.items.length - 1]
    // );
    console.log("launch getAnnouncements", nextPage);

    if (announcementsStore.items.length > 0) {
      // Go to next page
      console.log("Go to next page");
      snapshot = await FirebaseHelper.FirebaseContext.firestore()
        .collection("Announcements")
        .orderBy(firebase.firestore.FieldPath.documentId(), "desc")
        .limit(pageSize)
        .startAfter(
          announcementsStore.items[announcementsStore.items.length - 1].id
        )
        .where("type", "==", type)
        .get();
    } else {
      // No pagination
      console.log("No pagination");
      snapshot = await FirebaseHelper.FirebaseContext.firestore()
        .collection("Announcements")
        .orderBy(firebase.firestore.FieldPath.documentId(), "desc")
        .limit(pageSize)
        .where("type", "==", type)
        .get();
    }

    if (!snapshot) return [];
    let announcements: any = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    // let announcements: any = snapshot;

    // console.log("announcements===>", announcements);

    const announcementsNormalized: Announcement[] = [];
    for (let value of announcements) {
      const allImages = await getImagesOfAnnouncement(value.id, value.nbImg);
      const mainImgUrl = await getMainImage(value.id, value.nbImg);
      const url = mainImgUrl
        ? { uri: mainImgUrl }
        : require("../../assets/announcements/2/1.jpg");
      announcementsNormalized.push({
        ...value,
        mainImg: url,
        images: allImages,
        seconds: value.created_at.seconds,
        created_at: formatDate(value.created_at),
        created_at_timestamp: value.created_at,
      });
    }

    return announcementsNormalized;
  } catch (error) {
    console.error({ error });
    return error;
  }
}

const formatDate = (timestamp = 1615770000) => {
  const dateString = moment.unix(timestamp);
  let month = moment(dateString).locale("fr").format("MMMM");
  month = month.substring(0, 3);
  const day = moment(dateString).format("DD");
  const time = moment(dateString).format("HH:mm");
  return `${day} ${month}, ${time}`;
};

export default {
  getAnnouncements,
};
