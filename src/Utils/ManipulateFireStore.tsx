import axios from "axios";
import * as Google from "expo-google-app-auth";
import * as firebase from "firebase";
import "firebase/firestore";
import { LogBox } from "react-native";
import moment from "moment";
import faker from "faker";
import { Announcement } from "../Models";
import { TypeAnnouncement } from "../Models/TypeAnnouncement";

import { ANDROID_CLIENT_ID } from "../Config";
import FirebaseHelper from "./FirebaseHelper";
import AnnouncementsUtil from "./Announcements";
import announcementsApi from "./../Api/announcementsApi";
import usersApi from "./../Api/usersApi";

LogBox.ignoreLogs(["Setting a timer"]);

async function creatAnnouncements() {
  try {
    const data: Announcement[] = [];
    const idFirst = 7;
    const NbAnnouncementsToAdd = 2;
    for (let i = idFirst + 1; i <= idFirst + NbAnnouncementsToAdd; i++) {
      let newAnnouncement: Announcement = {
        id: i.toString(),
        user_id: "1",
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        nbImg: 1,
        mainImg: "1",
        city: faker.address.city(),
        type: TypeAnnouncement.Request,
        created_at: "1617461663000",
      };
      data.push(newAnnouncement);
    }

    for (let element of data) {
      await FirebaseHelper.FirebaseContext.firestore()
        .collection("Announcements")
        .doc(element.id)
        .set(element);
    }
  } catch (error) {
    throw error;
  }
}

async function deleteAnnouncements() {
  try {
    const idFirst = 7;
    const NbAnnouncementsToAdd = 2;
    for (let i = idFirst + 1; i <= idFirst + NbAnnouncementsToAdd; i++) {
      await FirebaseHelper.FirebaseContext.firestore()
        .collection("Announcements")
        .doc(i.toString())
        .delete();
    }
  } catch (error) {
    throw error;
  }
}

async function testFetching() {
  try {
    const data = await announcementsApi.getAnnouncements({
      type: "DONATION",
      subType: "DONATION_USER",
      announcementsData: [],
      userData: { uid: "IPlBSh1okhT341lYwhRKYXlSUXx1" },
    });
  } catch (error) {
    throw error;
  }
}

async function getAnnouncementById() {
  try {
    let query: any =
      FirebaseHelper.FirebaseContext.firestore().collection("Announcements");
    // .where("type", "==", "REQUEST");
    query = query.where("user_id", "==", "IPlBSh1okhT341lYwhRKYXlSUXx1");
    query = query.where("type", "==", "REQUEST");

    let snapshot = await query.get();
    let data: any = snapshot.docs;

    data.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  } catch (error) {
    throw error;
  }
}

export default {
  creatAnnouncements,
  deleteAnnouncements,
  testFetching,
  getAnnouncementById,
};
