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
    const urls: string[] = [];
    for (let i = 1; i <= nbImg; i++) {
      let pathReference = storage.ref(
        `announcements/${announcement_id}/${i}.jpg`
      );
      const url: string = await pathReference.getDownloadURL();
      urls.push(url);
    }
    return urls;
  } catch (error) {
    return false;
  }
};

const formatDate = (timestamp) => {
  const dateString = moment.unix(timestamp);
  let month = moment(dateString).locale("fr").format("MMMM");
  month = month.substring(0, 3);
  const day = moment(dateString).format("DD");
  const time = moment(dateString).format("HH:mm");
  return `${day} ${month}, ${time}`;
};

const normalizeAnnouncements = async (announcements) => {
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
};

export default {
  getMainImage,
  getImagesOfAnnouncement,
  formatDate,
  normalizeAnnouncements,
};
