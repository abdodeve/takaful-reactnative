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

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  // <View style={styles.item}>
  //   <Text>{title}</Text>
  // </View>
  <Layout style={[styles.item]}>
    <TouchableOpacity style={[styles.touchableItem]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  </Layout>
);

const StepOne: React.FC = () => {
  const [image, setImage] = useState<ImagePicker.ImagePickerResult | null>(
    null
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

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
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
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
  // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  {
    /* <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <View>
          <Image
            source={{ uri: (image as any).uri }}
            style={{ width: 200, height: 200 }}
          />
        </View>
      )} */
  }
  // </View>
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
