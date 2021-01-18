import React, { useState, useEffect } from "react";
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
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Layout, Text } from "@ui-kitten/components";
import ImagesUploaded from "./ImagesUploaded";

const deviceHeight = Dimensions.get("window").height;

const StepOne: React.FC = () => {
  const [image, setImage] = useState<ImagePicker.ImagePickerResult | null>(
    null
  );

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      // setImage(result);
      console.log({ result });
    }
  };

  // const renderItem = ({ item }: { item: any }) => {
  //   return (
  //     <Item
  //       item={item}
  //     />
  //   );
  // };

  return (
    <View>
      <ImagesUploaded />
    </View>
  );

  // return (
  //   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //     <Button title="Pick an image from camera roll" onPress={pickImage} />
  //     {image && (
  //       <View>
  //         <Image
  //           source={{ uri: (image as any).uri }}
  //           style={{ width: 200, height: 200 }}
  //         />
  //       </View>
  //     )}
  //     {/* <UploaderMultiple /> */}
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginVertical: 6,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: "row",
    borderRadius: 15,
    overflow: "hidden",
    elevation: 3,
  },
  touchableItem: {
    flex: 1,
    flexDirection: "row",
    height: deviceHeight * 0.18,
  },
});

export default StepOne;
