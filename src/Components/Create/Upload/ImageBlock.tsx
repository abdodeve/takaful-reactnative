import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Image,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { Text, Input, useTheme, Radio } from "@ui-kitten/components";
import { connect } from "react-redux";

import { IconX, ICON_TYPE } from "../../../Icons";
import {
  addImage,
  removeImage,
  setIsMain,
} from "./../../../Store/UploadedImages/actions";
import {
  UploadedImageType,
  MetaMainType,
  MetaRemoveType,
} from "./../../../Store/UploadedImages/types";

const deviceHeight = Dimensions.get("window").height;
interface RootState {
  UploadedImages: Array<UploadedImageType>;
}

const mapStateToProps = (state: RootState, ownProps) => ({
  UploadedImages: state.UploadedImages,
  ownProps: ownProps,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeImage: (meta: MetaRemoveType) => {
      dispatch(removeImage(meta));
    },
    setIsMain: (metaMain: MetaMainType) => {
      dispatch(setIsMain(metaMain));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    uri: string;
    index: number;
  };

/**
 * If image uploaded
 * @param uri
 */
const ImageBlock: React.FC<Props> = ({
  uri,
  index,
  UploadedImages,
  removeImage,
  setIsMain,
}: Props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.clearImageBtn}
        onPress={() => {
          removeImage({ index });
        }}
      >
        <IconX
          name="md-close-circle"
          color="#fc5c65"
          size={30}
          origin={ICON_TYPE.IONICONS}
        />
      </TouchableOpacity>

      <Image
        style={styles.itemDimensions}
        source={{
          uri: uri,
        }}
      />

      <View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "rgba(127, 140, 141,0.6)",
          width: "100%",
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setIsMain({ index });
          }}
        >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {/* <Text>{JSON.stringify(UploadedImages[index].isMain)}</Text> */}
            {UploadedImages[index].isMain === true ? (
              <IconX
                name="checkbox-marked-circle"
                color="#fc5c65"
                size={30}
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                style={{
                  marginLeft: 8,
                  color: "#fff",
                }}
              />
            ) : (
              <IconX
                name="checkbox-blank-circle-outline"
                color="#fc5c65"
                size={30}
                origin={ICON_TYPE.MATERIAL_COMMUNITY}
                style={{
                  marginLeft: 8,
                  color: "#fff",
                }}
              />
            )}

            <Text
              style={{
                marginLeft: 8,
                color: "#fff",
              }}
            >
              Photo principale
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  touchableItem: {
    elevation: 4,
    backgroundColor: "#ecf0f1",
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: 15,
    marginVertical: 6,
    marginHorizontal: 16,
  },
  itemDimensions: {
    height: deviceHeight * 0.21,
    width: 180,
  },
  clearImageBtn: {
    position: "absolute",
    top: 0,
    right: 4,
    zIndex: 1,
  },
});

export default connector(ImageBlock);
