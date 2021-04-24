import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";
// import logger from "../utility/logger";

function AppImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    // Pour plusieur permission
    // const { granted } = await Permission.askAsync(
    //   Permission.MEDIA_LIBRARY,
    //   Permission.LOCATION
    // );
    // if (!granted) alert("You need to enable permission to access the library.");

    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error any ", error);
    }
  };

  const handlerPress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete the image", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlerPress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            colors={colors.medium}
            name="camera"
            size={40}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default AppImageInput;
