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
import StepOne from "../Components/Create/StepOne";
import { Colors } from "./../Constants";

const deviceHeight = Dimensions.get("window").height;

const CreateAnnouncementScreen: React.FC<any> = ({
  route,
  navigation,
  questions,
  addQuestion,
  addImage,
  uploadedImage,
  ownProps,
}: any) => {
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
            <View style={{ height: deviceHeight * 0.7 }}>
              <View style={styles.wrapperPhotos}>
                <StepOne />
              </View>
            </View>
          </ProgressStep>
          <ProgressStep
            {...ProgressStepPropsPrevious}
            {...ProgressStepPropsNext}
          >
            <View style={{ alignItems: "center" }}>
              <Text>Categorie</Text>
              <Text>Type</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            {...ProgressStepPropsPrevious}
            {...ProgressStepPropsNext}
          >
            <View style={{ alignItems: "center" }}>
              <Text>Ville</Text>
              <Text>Titre de l'annonce</Text>
              <Text>Description de l'annonce</Text>
              <Text>Prix</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            {...ProgressStepPropsPrevious}
            {...ProgressStepPropsSubmit}
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
  wrapperPhotos: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state, ownProps) => ({
  questions: state,
  uploadedImage: state,
  ownProps: ownProps,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: (response) => {
      // dispatch(Actions.questions.addQuestions(response));
    },
    addImage: (uploadedImage) => {
      console.log(1);
      // dispatch(Actions.UploadedImages.addImage(uploadedImage));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAnnouncementScreen);

// export default CreateAnnouncementScreen;
