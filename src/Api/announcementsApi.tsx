import axios from "axios";
import * as Google from "expo-google-app-auth";
import * as firebase from "firebase";
import "firebase/firestore";
import { LogBox } from "react-native";
import moment from "moment";
import "moment/locale/fr";
import { Announcement, SearchFilters } from "./../Models";
import { TypeAnnouncement } from "./../Models/TypeAnnouncement";

import { ANDROID_CLIENT_ID } from "./../Config";
import FirebaseHelper from "./../Utils/FirebaseHelper";
import AnnouncementsUtil from "./../Utils/Announcements";
import { dataStepTwoType } from "./../Components/Create/Two/types";
import { dataStepThreeType } from "./../Components/Create/Three/types";
import { dataStepFourType } from "./../Components/Create/Four/types";
import { UploadedImageType } from "./../Store/UploadedImages/types";
import { userDataType } from "./../Store/UserData/types";
import { User } from "./../Models/User";
import Announcements from "./../Utils/Announcements";

LogBox.ignoreLogs(["Setting a timer"]);

async function getAnnouncements({
  type,
  subType,
  announcementsData,
  userData,
  searchFilters,
}: {
  type: any;
  subType?: any;
  announcementsData: any;
  userData?: any;
  searchFilters?: SearchFilters;
}) {
  try {
    const field = "id";
    const pageSize = 6;

    let query: firebase.firestore.Query;
    let collectionReference: firebase.firestore.CollectionReference =
      FirebaseHelper.FirebaseContext.firestore().collection("Announcements");
    query = collectionReference.orderBy(
      firebase.firestore.FieldPath.documentId(),
      "desc"
    );

    const typeSanitized = AnnouncementsUtil.sanitizeType(type);
    query = query.where("type", "==", typeSanitized);

    // If the user not connected return
    // an empty array for announcementsUser
    if (
      [TypeAnnouncement.DonationUser, TypeAnnouncement.RequestUser].includes(
        type
      ) &&
      !userData
    )
      return [];

    // If the user connected return announcementsUser by User
    if (
      [TypeAnnouncement.DonationUser, TypeAnnouncement.RequestUser].includes(
        type
      ) &&
      userData
    ) {
      query = query.where("user_id", "==", userData.id);
    }
    query = query.limit(pageSize);

    console.log("searchFilters========>", searchFilters);

    // Filter by category
    if (searchFilters?.category)
      query = query.where("category", "==", searchFilters.category);

    // Filter by City
    if (searchFilters?.city)
      query = query.where("city", "==", searchFilters.city);

    // Filter by condition
    if (searchFilters?.condition && searchFilters?.condition?.length > 0)
      query = query.where("condition", "in", searchFilters?.condition);

    // Paginate to the next page
    if (announcementsData.length > 0) {
      query = query.startAfter(
        announcementsData[announcementsData.length - 1].id
      );
    }
    let snapshot: firebase.firestore.QuerySnapshot;
    snapshot = await query.get();

    if (
      !snapshot ||
      typeof snapshot == "undefined" ||
      typeof snapshot.docs == "undefined"
    )
      return [];

    let announcements: Announcement[] = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    }) as Announcement[];

    const announcementsNormalized: Announcement[] =
      await AnnouncementsUtil.normalizeAnnouncements(announcements);

    return announcementsNormalized;
  } catch (error) {
    throw error;
  }
}

type createAnnouncementType = {
  uploadedImages: UploadedImageType[];
  dataStepTwo: dataStepTwoType;
  dataStepThree: dataStepThreeType;
  dataStepFour: dataStepFourType;
};

async function createAnnouncement(
  {
    uploadedImages,
    dataStepTwo,
    dataStepThree,
    dataStepFour,
  }: createAnnouncementType,
  userData: userDataType
) {
  try {
    let announcementReference: firebase.firestore.CollectionReference =
      FirebaseHelper.FirebaseContext.firestore().collection("Announcements");

    let snapshot: firebase.firestore.QuerySnapshot;
    // snapshot = await announcementReference.orderBy("id", "desc").limit(1).get();
    snapshot = await announcementReference
      .orderBy("created_at", "desc")
      .limit(1)
      .get();

    if (
      !snapshot ||
      typeof snapshot == "undefined" ||
      typeof snapshot.docs == "undefined"
    )
      return [];

    let announcements: Announcement[] = snapshot.docs.map((doc) => {
      return { ...doc.data() };
    }) as Announcement[];

    const nextId = String(Number(announcements[0].id) + 1);

    await Announcements.setImagesOfAnnouncement(nextId, uploadedImages);

    var docData = {
      id: nextId,
      category: JSON.stringify(dataStepTwo.selectCategory),
      type: dataStepTwo.radioAnnouncementType === 0 ? "DONATION" : "REQUEST",
      city: dataStepThree.city,
      condition: dataStepTwo.radioAnnouncementCondition,
      content: dataStepThree.description,
      title: dataStepThree.titleAnnouncement,
      fullname: dataStepFour.fullname,
      email: dataStepFour.email,
      phone: dataStepFour.phone,
      mainImg: 1,
      nbImg: 1,
      user_id: (userData as User).id,
      created_at: Date.now().toString(),
    };
    announcementReference
      .doc(nextId)
      .set(docData)
      .then(() => {
        console.log("Document successfully written!");
      });
  } catch (error) {
    throw error;
  }
}

export default {
  getAnnouncements,
  createAnnouncement,
};
