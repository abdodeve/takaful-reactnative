import React, { useState } from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { Text, Input, Button, useTheme } from "@ui-kitten/components";

import { ScreenProps } from "../Navigation/Routes";
import StepOne from "../Components/Create/StepOne";
import { Colors } from "./../Constants";

const CreateAnnouncementScreen: React.FC<ScreenProps> = ({
  route,
  navigation,
}: ScreenProps) => {
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
          topOffset={0}
          progressBarColor="#ecf0f1"
          disabledStepIconColor="#ecf0f1"
          activeStepIconBorderColor="#2ecc71"
          completedStepIconColor="#2ecc71"
          completedProgressBarColor="#2ecc71"
        >
          <ProgressStep {...ProgressStepPropsNext}>
            <View style={{ alignItems: "center" }}>
              <Text>Upload Image</Text>
              <StepOne />
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
});

export default CreateAnnouncementScreen;
