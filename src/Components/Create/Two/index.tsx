import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  Dispatch,
} from "react";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
  Text
} from "react-native";
import {
  IndexPath
} from "@ui-kitten/components";
import { connect } from "react-redux";

import { UploadedImageType } from "../../../Store/UploadedImages/types";
import SelectCategory from "./SelectCategory";
import RadioAnnouncementType from "./RadioAnnouncementType";
import { PropsSelectCategory } from "./SelectCategory";
import { setDataStepTwoType, dataStepTwoType } from "./types";

const deviceHeight = Dimensions.get("window").height;

interface RootState {
  uploadedImagesStore: Array<UploadedImageType>;
}
const mapStateToProps = (state: RootState, ownProps) => ({
  uploadedImages: state.uploadedImagesStore,
  ownProps: ownProps,
});

const connector = connect(mapStateToProps);
type Props = ReturnType<typeof mapStateToProps> & {
  setDataStepTwo: setDataStepTwoType;
  dataStepTwo: dataStepTwoType;
};

/**
 * Two
 *
 */
const Two: React.FC<Props> = ({ uploadedImages, setDataStepTwo, dataStepTwo }: Props) => {
  const [selectCategory, setSelectCategory] = useState<IndexPath>(
    dataStepTwo.selectCategory
  );
  const [selectAnnouncementType, setSelectAnnouncementType] =
    useState<number>(dataStepTwo.selectAnnouncementType);

  useEffect(() => {
    setDataStepTwo({ selectCategory, selectAnnouncementType });
    return () => {
      // cleanup
    };
  }, [selectCategory, selectAnnouncementType]);

  return (
    <View style={[styles.container]}>
      <SelectCategory selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
      <View style={styles.typeTitle}>
        <Text style={styles.title}>Type d'annonce</Text>
        <RadioAnnouncementType
          setSelectAnnouncementType={setSelectAnnouncementType}
          selectAnnouncementType={selectAnnouncementType}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  typeTitle: { marginTop: 30 },
});

export default connector(Two);
