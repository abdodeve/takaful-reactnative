import React, { useState, useEffect, useRef } from "react";
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Dimensions,
} from "react-native";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { Text, Input, Button, useTheme } from "@ui-kitten/components";
import { connect } from "react-redux";

import { ScreenProps } from "../Navigation/Routes";
import { Colors } from "../Constants";
import { UploadedImageType } from "../Store/UploadedImages/types";
import StepOne from "../Components/Create/StepOne";
import StepTwo from "../Components/Create/StepTwo";
import StepThree from "../Components/Create/StepThree";
import StepFour from "../Components/Create/StepFour";

const deviceHeight = Dimensions.get("window").height;

interface RootState {
  UploadedImages: Array<UploadedImageType>;
}
const mapStateToProps = (state: RootState, ownProps) => ({
  uploadedImages: state.UploadedImages,
  ownProps: ownProps,
});

const connector = connect(mapStateToProps);
type Props = ReturnType<typeof mapStateToProps> & ScreenProps;

const CreateAnnouncementScreen: React.FC<Props> = ({
  navigation,
  uploadedImages,
}: Props) => {
  const theme = useTheme();

  const [currentStep, setCurrentStep] = useState(-1);

  const [isSubmitted, setIsSubmitted] = React.useState(true);

  React.useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        // Before Leaving check if data submitted
        if (isSubmitted) {
          console.log("isSaved", isSubmitted);
          return;
        }
        // Prevent default behavior of leaving the screen
        e.preventDefault();
        alert("Screen was unfocuse");
      }),
    [navigation, isSubmitted]
  );

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
          activeStep={currentStep === -1 ? 0 : currentStep}
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
              // Submit code goes here
            }}
          >
            <StepFour />
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
