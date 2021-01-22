import React, { useState } from "react";
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { Text, Input, Button, useTheme } from "@ui-kitten/components";
import { connect } from "react-redux";

import { ScreenProps } from "../Navigation/Routes";
import { Colors } from "./../Constants";
import { UploadedImageType } from "./../Store/UploadedImages/types";
import StepOne from "../Components/Create/StepOne";
import StepTwo from "../Components/Create/StepTwo";
import StepThree from "../Components/Create/StepThree";

const deviceHeight = Dimensions.get("window").height;
interface RootState {
  UploadedImages: Array<UploadedImageType>;
}
const mapStateToProps = (state: RootState, ownProps) => ({
  uploadedImages: state.UploadedImages,
  ownProps: ownProps,
});

const connector = connect(mapStateToProps);
type Props = ReturnType<typeof mapStateToProps>;

const CreateAnnouncementScreen: React.FC<Props> = ({
  uploadedImages,
}: Props) => {
  const theme = useTheme();

  const ProgressStepCommonStyle = {
    btnTextStyle: { color: "#fff", fontWeight: "bold", fontSize: 14 },
    btnStyle: {
      backgroundColor: theme["color-primary-500"],
      borderRadius: 5,
    },
  };
  const ProgressStepPropsPrevious = {
    previousBtnText: "PRÉCÉDENT",
    previousBtnTextStyle: ProgressStepCommonStyle.btnTextStyle,
    previousBtnStyle: {
      ...ProgressStepCommonStyle.btnStyle,
      backgroundColor: theme["color-basic-600"],
    },
  };
  const ProgressStepPropsNext = {
    nextBtnText: "CONTINUER",
    nextBtnTextStyle: ProgressStepCommonStyle.btnTextStyle,
    nextBtnStyle: ProgressStepCommonStyle.btnStyle,
  };
  const ProgressStepPropsSubmit = {
    finishBtnText: "DÉPOSER",
    nextBtnTextStyle: ProgressStepCommonStyle.btnTextStyle,
    nextBtnStyle: {
      ...ProgressStepCommonStyle.btnStyle,
      backgroundColor: theme["color-success-600"],
      paddingHorizontal: 40,
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: Colors.tintColor }}>
        <ProgressSteps
          marginBottom={0}
          topOffset={10}
          progressBarColor="#ecf0f1"
          disabledStepIconColor="#ecf0f1"
          activeStepIconBorderColor="#2ecc71"
          completedStepIconColor="#2ecc71"
          completedProgressBarColor="#2ecc71"
        >
          <ProgressStep {...ProgressStepPropsNext}>
            <StepOne />
          </ProgressStep>
          <ProgressStep
            {...ProgressStepPropsPrevious}
            {...ProgressStepPropsNext}
          >
            <StepTwo />
          </ProgressStep>
          <ProgressStep
            {...ProgressStepPropsPrevious}
            {...ProgressStepPropsNext}
          >
            <StepThree />
          </ProgressStep>
          <ProgressStep
            {...ProgressStepPropsPrevious}
            {...ProgressStepPropsSubmit}
            onSubmit={() => {
              // Get images
              console.log({ uploadedImages });
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text>Nom complet</Text>
              <Text>Telephone</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapperSteps: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: deviceHeight * 0.6,
  },
});

export default connector(CreateAnnouncementScreen);
