import axios from "axios";
import * as Google from "expo-google-app-auth";
import * as firebase from "firebase";
import "firebase/firestore";

import { LogBox } from "react-native";
import moment from "moment";
import "moment/locale/fr"; // without this line it didn't work
import { Announcement, User } from "./../Models";
import usersApi from "./../Api/usersApi";

import { ANDROID_CLIENT_ID } from "./../Config";
import FirebaseHelper from "./../Utils/FirebaseHelper";
import { random } from "lodash";
import { TypeAnnouncement } from "../Models/TypeAnnouncement";

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
/**
 * 
 * @TODO Upload images to the Server
 */
const setImagesOfAnnouncement = async (uploadedImages) => {
  try {
    console.log("-------------setImagesOfAnnouncement-------------", uploadedImages);
    let storage = FirebaseHelper.FirebaseContext.storage();

    
    // Create a reference to 'mountains.jpg'
    console.log("1111");
      let pathReference = storage.ref(
        `announcements/abdo111.jpg`
      );
      console.log("22222==>", uploadedImages.uri);

      const blobFetched = await fetch(uploadedImages.uri);
      const blob = await blobFetched.blob();


     const res = pathReference.put(blob);
     console.log("3333");

     res.then(res=>{
      console.log("--------------Image saved--------------");
     }).catch(err=>{
      console.log("--------------Image ERROR--------------");
     })
     console.log("Upload res==>");

    // const urls: string[] = [];
    // for (let i = 1; i <= nbImg; i++) {
    //   let pathReference = storage.ref(
    //     `announcements/${announcement_id}/${i}.jpg`
    //   );
    //   const url: string = await pathReference.getDownloadURL();
    //   urls.push(url);
    // }
    // return urls;
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

const formatType = (type) => {
  switch (type) {
    case TypeAnnouncement.Donation:
      return "Don";
    case TypeAnnouncement.Request:
      return "Demande";

    default:
      return "No type";
  }
};

const formatCondition = (condition: number | undefined) => {
  switch (condition) {
    case 0:
      return "Comme neuf";
    case 1:
      return "Bon état";
    case 2:
      return "État moyen";
    case 3:
      return "À bricoler";
    default:
      return "No condition";
  }
};

const normalizeAnnouncements = async (announcements: Announcement[]) => {
  const announcementsNormalized: Announcement[] = [];
  for (let value of announcements) {
    const user: User = await usersApi.getUserById({ uid: value.user_id });
    const allImages = await getImagesOfAnnouncement(value.id, value.nbImg);
    const mainImgUrl = await getMainImage(value.id, value.nbImg);
    const category = JSON.parse(value.category as any);
    const url = mainImgUrl
      ? { uri: mainImgUrl }
      : require("../../assets/announcements/2/1.jpg");
    announcementsNormalized.push({
      ...value,
      user,
      type_formatted: formatType(value.type),
      mainImg: url,
      images: allImages,
      condition_formatted: formatCondition(value.condition),
      category,
      created_at: value.created_at,
      created_at_formatted: formatDate(value.created_at),
      timeSince: timeSince(value.created_at),
    });
  }
  return announcementsNormalized;
};

function sanitizeType(type: string) {
  switch (type) {
    case TypeAnnouncement.DonationUser:
      return TypeAnnouncement.Donation;
    case TypeAnnouncement.RequestUser:
      return TypeAnnouncement.Request;

    default:
      return type;
  }
}

function timeSince(date: any) {
  let timeNow = new Date() as any;
  var seconds = Math.floor((timeNow - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " ans";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " mois";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " jrs";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " h";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " min";
  }
  return Math.floor(seconds) + " sec";
}

export default {
  getMainImage,
  getImagesOfAnnouncement,
  formatDate,
  normalizeAnnouncements,
  sanitizeType,
  setImagesOfAnnouncement
};
